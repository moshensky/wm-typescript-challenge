import * as t from "io-ts";
import { mapLeft, left, fold } from "fp-ts/lib/Either";
import { PathReporter } from "io-ts/lib/PathReporter";
import { pipe } from "fp-ts/lib/function";

export const decodeOrThrow =
  <T>(decoder: t.Decoder<any, T>) =>
  (data: any): T =>
    pipe(
      decoder.decode(data),
      mapLeft((e) => PathReporter.report(left(e))),
      fold(
        (x) => {
          // eslint-disable-next-line no-console
          console.log(x.join("\n---\n"));
          throw new Error("Failed to decode data");
        },
        (x) => x
      )
    );
