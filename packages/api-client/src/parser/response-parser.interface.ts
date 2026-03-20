import type { IMetadata } from "../core/types/api.types";
import type {
  IResponseDTO,
  IResponseWithMetadataDTO,
} from "../core/types/response.types";

/**
 * ResponseParser defines the contract for transforming raw HTTP response
 * payloads into the application's canonical DTO shapes.
 *
 * By abstracting this behind an interface, the ApiClient is fully decoupled
 * from any particular backend envelope format. You can swap the parser
 * without touching any other layer.
 *
 * Default implementation: DefaultResponseParser in response-parser.ts.
 */
export interface ResponseParser {
  /**
   * Parse raw response data into a standard IResponseDTO.
   * Must never throw – unexpected shapes should yield a fallback DTO.
   */
  parse<T>(data: unknown): IResponseDTO<T>;

  /**
   * Like `parse`, but guarantees that `metaData` is always present.
   * Generates an empty metadata object when the server omits it.
   */
  parseWithMeta<T>(data: unknown): IResponseWithMetadataDTO<T>;

  /**
   * Convenience helper to unwrap the `data` field from a parsed DTO.
   * Returns `null` when data is missing.
   */
  extractData<T>(response: IResponseDTO<T>): T | null;

  /**
   * Convenience helper to unwrap the `metaData` field.
   * Returns `null` when metadata is missing.
   */
  extractMeta(response: IResponseWithMetadataDTO): IMetadata | null;
}
