import type { AxiosResponse } from "axios";

import type {
  IDataError,
  IDataWithMeta,
  IDataWithStatusCode,
  IFileOptions,
  IRequestOptions,
  IResponseDTO,
  IResponseWithMetadataDTO,
} from "./types";
import { ErrorHandler } from "./errorHandler";

export class ResponseParser {
  private errorHandler: ErrorHandler;

  constructor() {
    this.errorHandler = ErrorHandler.getInstance();
  }

  parseData<T>(
    response: AxiosResponse<IResponseDTO<T>>,
    options: IRequestOptions,
  ): T {
    if (!response.data.success) {
      const error = this.createErrorFromResponse(response);
      throw new Error(error.errorMessage);
    }

    if (response.data.data === undefined) {
      const emptyError = this.createDataEmptyError();
      if (options.displayError) {
        this.errorHandler.displayError(emptyError);
      }
      throw new Error(emptyError.errorMessage);
    }

    return response.data.data;
  }

  parseDataWithMeta<T>(
    response: AxiosResponse<IResponseWithMetadataDTO<T>>,
    options: IRequestOptions,
  ): IDataWithMeta<T> {
    if (!response.data.success) {
      const error = this.createErrorFromResponse(response);
      throw new Error(error.errorMessage);
    }

    if (response.data.data === undefined || !response.data.metaData) {
      const emptyError = this.createDataEmptyError();
      if (options.displayError) {
        this.errorHandler.displayError(emptyError);
      }
      throw new Error(emptyError.errorMessage);
    }

    return {
      data: response.data.data,
      meta: response.data.metaData,
    };
  }

  parseDataWithStatusCode<T>(
    response: AxiosResponse<IResponseDTO<T>>,
    options: IRequestOptions,
  ): IDataWithStatusCode<T> {
    if (!response.data.success) {
      const error = this.createErrorFromResponse(response);
      throw new Error(error.errorMessage);
    }

    if (response.data.data === undefined) {
      const emptyError = this.createDataEmptyError();
      if (options.displayError) {
        this.errorHandler.displayError(emptyError);
      }
      throw new Error(emptyError.errorMessage);
    }

    return {
      data: response.data.data,
      statusCode: response.data.statusCode,
    };
  }

  parseBlobResponse(
    response: AxiosResponse<Blob>,
    fileOptions: IFileOptions,
  ): Blob {
    if (response.status === 200) {
      this.triggerDownload(response.data, fileOptions);
      return response.data;
    }
    throw new Error("Download failed");
  }

  private triggerDownload(data: Blob, options: IFileOptions): void {
    const href = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute(
      "download",
      `${options.fileName ?? "download"}.${options.fileType ?? "file"}`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  private createErrorFromResponse<T>(
    response: AxiosResponse<T>,
  ): IDataError<T> {
    return {
      data: response.data,
      statusCode: response.status,
      errorMessage: response.statusText,
    };
  }

  private createDataEmptyError<T>(): IDataError<T> {
    return {
      statusCode: "DATA_EMPTY",
      errorMessage: "Data is empty",
    };
  }
}
