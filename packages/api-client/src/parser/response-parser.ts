import type { IMetadata } from "@/core/types/api.types";

import type {
  IResponseDTO,
  IResponseWithMetadataDTO,
} from "../core/types/response.types";

export interface ResponseParser {
  parse<T>(data: unknown): IResponseDTO<T>;
  parseWithMeta<T>(data: unknown): IResponseWithMetadataDTO<T>;
  extractData<T>(response: IResponseDTO<T>): T | null;
  extractMeta(response: IResponseWithMetadataDTO): IMetadata | null;
}

export class DefaultResponseParser implements ResponseParser {
  parse<T>(data: unknown): IResponseDTO<T> {
    if (this.isResponseDTO(data)) {
      return {
        success: data.success,
        statusCode: String(data.statusCode),
        message: data.message,
        metaData: data.metaData,
        data: data.data as T,
      };
    }

    return {
      success: true,
      statusCode: "200",
      data: data as T,
    };
  }

  parseWithMeta<T>(data: unknown): IResponseWithMetadataDTO<T> {
    const parsed = this.parse<T>(data);

    if (parsed.metaData) {
      return {
        success: parsed.success,
        statusCode: parsed.statusCode,
        message: parsed.message,
        metaData: parsed.metaData,
        data: parsed.data as T,
      };
    }

    const metadata = this.extractMetadataFromData(data);
    if (metadata) {
      return {
        success: parsed.success,
        statusCode: parsed.statusCode,
        message: parsed.message,
        metaData: metadata,
        data: this.extractDataFromData<T>(data) ?? (parsed.data as T),
      };
    }

    return {
      success: parsed.success,
      statusCode: parsed.statusCode,
      message: parsed.message,
      metaData: this.createEmptyMetadata(),
      data: parsed.data as T,
    };
  }

  extractData<T>(response: IResponseDTO<T>): T | null {
    return response.data ?? null;
  }

  extractMeta(response: IResponseWithMetadataDTO): IMetadata | null {
    return response.metaData;
  }

  private isResponseDTO(data: unknown): data is IResponseDTO {
    return (
      typeof data === "object" &&
      data !== null &&
      "success" in data &&
      "statusCode" in data
    );
  }

  private extractMetadataFromData(data: unknown): IMetadata | null {
    if (!data || typeof data !== "object") {
      return null;
    }

    const obj = data as Record<string, unknown>;

    if (this.isMetadata(obj.meta)) {
      return obj.meta;
    }

    if (this.isPagination(obj.pagination) && Boolean(obj.pagination)) {
      return {
        totalPages: obj.pagination.totalPages,
        totalItems: obj.pagination.totalItems,
        currentPage: obj.pagination.currentPage,
        pageSize: obj.pagination.pageSize,
        time: obj.pagination.time,
      };
    }

    return null;
  }

  private extractDataFromData<T>(data: unknown): T | null {
    if (!data || typeof data !== "object") {
      return null;
    }

    const obj = data as Record<string, unknown>;

    if ("data" in obj) {
      return obj.data as T;
    }

    if ("items" in obj) {
      return obj.items as T;
    }

    return null;
  }

  private isMetadata(value: unknown): value is IMetadata {
    if (!value || typeof value !== "object") {
      return false;
    }

    const obj = value as Record<string, unknown>;
    return (
      typeof obj.totalPages === "number" &&
      typeof obj.totalItems === "number" &&
      typeof obj.currentPage === "number"
    );
  }

  private isPagination(value: unknown): value is IMetadata {
    return this.isMetadata(value);
  }

  private createEmptyMetadata(): IMetadata {
    return {
      totalPages: 0,
      totalItems: 0,
      currentPage: 1,
      pageSize: 10,
    };
  }
}
