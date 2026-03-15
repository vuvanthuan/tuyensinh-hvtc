import type { AxiosError } from "axios";
import { isAxiosError } from "axios";

import type { IDataError, IRequestOptions } from "./types";

export class ErrorHandler {
  private static instance: ErrorHandler;
  private logoutCallback?: () => void;

  static getInstance(): ErrorHandler {
    this.instance = new ErrorHandler();

    return ErrorHandler.instance;
  }

  setLogoutCallback(callback: () => void) {
    this.logoutCallback = callback;
  }

  private logout(): Promise<void> {
    return new Promise((resolve) => {
      if (this.logoutCallback) {
        this.logoutCallback();
      }

      resolve();
    });
  }

  displayError<T>(dataError: IDataError<T>): void {
    const { statusCode, errorMessage } = dataError;

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("api:error", {
          detail: { message: errorMessage, code: statusCode },
        }),
      );
    }

    console.error("[API Error]", { code: statusCode, message: errorMessage });
  }

  async handleErrorResponse<T>(
    error: AxiosError | Error,
    options: IRequestOptions,
  ): Promise<IDataError<T>> {
    if (!isAxiosError(error)) {
      return this.handleNativeError(error);
    }

    return this.handleAxiosError(error, options);
  }

  private handleNativeError<T>(error: Error): IDataError<T> {
    console.error("Native error:", error);
    return {
      statusCode: "NATIVE_ERROR",
      errorMessage: error.message || "Something went wrong",
    };
  }

  private async handleAxiosError<T>(
    error: AxiosError,
    options: IRequestOptions,
  ): Promise<IDataError<T>> {
    if (typeof window !== "undefined" && !window.navigator.onLine) {
      return {
        statusCode: "NETWORK_ERROR",
        errorMessage: "No internet connection",
      };
    }

    if (error.response?.data) {
      const data = error.response.data as IDataError<T>;
      const dataError: IDataError<T> = {
        statusCode: data.statusCode ?? "UNKNOWN_ERROR",
        errorMessage: data.errorMessage ?? "Something went wrong",
        data: data.data as T,
      };

      await this.handleSpecialStatusCode(dataError, options);
      return dataError;
    }

    return {
      statusCode: "ERROR_UNKNOWN",
      errorMessage: "Something went wrong",
    };
  }

  private async handleSpecialStatusCode<T>(
    dataError: IDataError<T>,
    options: IRequestOptions,
  ): Promise<void> {
    if (
      dataError.statusCode === "EXPIRED_TOKEN" ||
      dataError.statusCode === "UNAUTHORIZED"
    ) {
      await this.logout();
    } else if (options.displayError) {
      this.displayError(dataError);
    }
  }
}
