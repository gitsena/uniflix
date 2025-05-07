
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tbl_classificacao
 * 
 */
export type tbl_classificacao = $Result.DefaultSelection<Prisma.$tbl_classificacaoPayload>
/**
 * Model tbl_genero
 * 
 */
export type tbl_genero = $Result.DefaultSelection<Prisma.$tbl_generoPayload>
/**
 * Model tbl_filme_genero
 * 
 */
export type tbl_filme_genero = $Result.DefaultSelection<Prisma.$tbl_filme_generoPayload>
/**
 * Model tbl_filme
 * 
 */
export type tbl_filme = $Result.DefaultSelection<Prisma.$tbl_filmePayload>
/**
 * Model tbl_diretor
 * 
 */
export type tbl_diretor = $Result.DefaultSelection<Prisma.$tbl_diretorPayload>
/**
 * Model tbl_filme_diretor
 * 
 */
export type tbl_filme_diretor = $Result.DefaultSelection<Prisma.$tbl_filme_diretorPayload>
/**
 * Model tbl_ator
 * 
 */
export type tbl_ator = $Result.DefaultSelection<Prisma.$tbl_atorPayload>
/**
 * Model tbl_filme_ator
 * 
 */
export type tbl_filme_ator = $Result.DefaultSelection<Prisma.$tbl_filme_atorPayload>
/**
 * Model tbl_nacionalidade
 * 
 */
export type tbl_nacionalidade = $Result.DefaultSelection<Prisma.$tbl_nacionalidadePayload>
/**
 * Model tbl_diretor_nacionalidade
 * 
 */
export type tbl_diretor_nacionalidade = $Result.DefaultSelection<Prisma.$tbl_diretor_nacionalidadePayload>
/**
 * Model tbl_ator_nacionalidade
 * 
 */
export type tbl_ator_nacionalidade = $Result.DefaultSelection<Prisma.$tbl_ator_nacionalidadePayload>
/**
 * Model tbl_sexo
 * 
 */
export type tbl_sexo = $Result.DefaultSelection<Prisma.$tbl_sexoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_classificacaos
 * const tbl_classificacaos = await prisma.tbl_classificacao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_classificacaos
   * const tbl_classificacaos = await prisma.tbl_classificacao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tbl_classificacao`: Exposes CRUD operations for the **tbl_classificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_classificacaos
    * const tbl_classificacaos = await prisma.tbl_classificacao.findMany()
    * ```
    */
  get tbl_classificacao(): Prisma.tbl_classificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_genero`: Exposes CRUD operations for the **tbl_genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_generos
    * const tbl_generos = await prisma.tbl_genero.findMany()
    * ```
    */
  get tbl_genero(): Prisma.tbl_generoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_filme_genero`: Exposes CRUD operations for the **tbl_filme_genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_filme_generos
    * const tbl_filme_generos = await prisma.tbl_filme_genero.findMany()
    * ```
    */
  get tbl_filme_genero(): Prisma.tbl_filme_generoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_filme`: Exposes CRUD operations for the **tbl_filme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_filmes
    * const tbl_filmes = await prisma.tbl_filme.findMany()
    * ```
    */
  get tbl_filme(): Prisma.tbl_filmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_diretor`: Exposes CRUD operations for the **tbl_diretor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_diretors
    * const tbl_diretors = await prisma.tbl_diretor.findMany()
    * ```
    */
  get tbl_diretor(): Prisma.tbl_diretorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_filme_diretor`: Exposes CRUD operations for the **tbl_filme_diretor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_filme_diretors
    * const tbl_filme_diretors = await prisma.tbl_filme_diretor.findMany()
    * ```
    */
  get tbl_filme_diretor(): Prisma.tbl_filme_diretorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_ator`: Exposes CRUD operations for the **tbl_ator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_ators
    * const tbl_ators = await prisma.tbl_ator.findMany()
    * ```
    */
  get tbl_ator(): Prisma.tbl_atorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_filme_ator`: Exposes CRUD operations for the **tbl_filme_ator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_filme_ators
    * const tbl_filme_ators = await prisma.tbl_filme_ator.findMany()
    * ```
    */
  get tbl_filme_ator(): Prisma.tbl_filme_atorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_nacionalidade`: Exposes CRUD operations for the **tbl_nacionalidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_nacionalidades
    * const tbl_nacionalidades = await prisma.tbl_nacionalidade.findMany()
    * ```
    */
  get tbl_nacionalidade(): Prisma.tbl_nacionalidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_diretor_nacionalidade`: Exposes CRUD operations for the **tbl_diretor_nacionalidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_diretor_nacionalidades
    * const tbl_diretor_nacionalidades = await prisma.tbl_diretor_nacionalidade.findMany()
    * ```
    */
  get tbl_diretor_nacionalidade(): Prisma.tbl_diretor_nacionalidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_ator_nacionalidade`: Exposes CRUD operations for the **tbl_ator_nacionalidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_ator_nacionalidades
    * const tbl_ator_nacionalidades = await prisma.tbl_ator_nacionalidade.findMany()
    * ```
    */
  get tbl_ator_nacionalidade(): Prisma.tbl_ator_nacionalidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_sexo`: Exposes CRUD operations for the **tbl_sexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_sexos
    * const tbl_sexos = await prisma.tbl_sexo.findMany()
    * ```
    */
  get tbl_sexo(): Prisma.tbl_sexoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tbl_classificacao: 'tbl_classificacao',
    tbl_genero: 'tbl_genero',
    tbl_filme_genero: 'tbl_filme_genero',
    tbl_filme: 'tbl_filme',
    tbl_diretor: 'tbl_diretor',
    tbl_filme_diretor: 'tbl_filme_diretor',
    tbl_ator: 'tbl_ator',
    tbl_filme_ator: 'tbl_filme_ator',
    tbl_nacionalidade: 'tbl_nacionalidade',
    tbl_diretor_nacionalidade: 'tbl_diretor_nacionalidade',
    tbl_ator_nacionalidade: 'tbl_ator_nacionalidade',
    tbl_sexo: 'tbl_sexo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tbl_classificacao" | "tbl_genero" | "tbl_filme_genero" | "tbl_filme" | "tbl_diretor" | "tbl_filme_diretor" | "tbl_ator" | "tbl_filme_ator" | "tbl_nacionalidade" | "tbl_diretor_nacionalidade" | "tbl_ator_nacionalidade" | "tbl_sexo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_classificacao: {
        payload: Prisma.$tbl_classificacaoPayload<ExtArgs>
        fields: Prisma.tbl_classificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_classificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_classificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>
          }
          findFirst: {
            args: Prisma.tbl_classificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_classificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>
          }
          findMany: {
            args: Prisma.tbl_classificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>[]
          }
          create: {
            args: Prisma.tbl_classificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>
          }
          createMany: {
            args: Prisma.tbl_classificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_classificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>[]
          }
          delete: {
            args: Prisma.tbl_classificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>
          }
          update: {
            args: Prisma.tbl_classificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_classificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_classificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_classificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>[]
          }
          upsert: {
            args: Prisma.tbl_classificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_classificacaoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_classificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_classificacao>
          }
          groupBy: {
            args: Prisma.tbl_classificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_classificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_classificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_classificacaoCountAggregateOutputType> | number
          }
        }
      }
      tbl_genero: {
        payload: Prisma.$tbl_generoPayload<ExtArgs>
        fields: Prisma.tbl_generoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_generoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_generoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>
          }
          findFirst: {
            args: Prisma.tbl_generoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_generoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>
          }
          findMany: {
            args: Prisma.tbl_generoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>[]
          }
          create: {
            args: Prisma.tbl_generoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>
          }
          createMany: {
            args: Prisma.tbl_generoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_generoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>[]
          }
          delete: {
            args: Prisma.tbl_generoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>
          }
          update: {
            args: Prisma.tbl_generoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_generoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_generoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_generoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>[]
          }
          upsert: {
            args: Prisma.tbl_generoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_generoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_generoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_genero>
          }
          groupBy: {
            args: Prisma.tbl_generoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_generoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_generoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_generoCountAggregateOutputType> | number
          }
        }
      }
      tbl_filme_genero: {
        payload: Prisma.$tbl_filme_generoPayload<ExtArgs>
        fields: Prisma.tbl_filme_generoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_filme_generoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_filme_generoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>
          }
          findFirst: {
            args: Prisma.tbl_filme_generoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_filme_generoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>
          }
          findMany: {
            args: Prisma.tbl_filme_generoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>[]
          }
          create: {
            args: Prisma.tbl_filme_generoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>
          }
          createMany: {
            args: Prisma.tbl_filme_generoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_filme_generoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>[]
          }
          delete: {
            args: Prisma.tbl_filme_generoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>
          }
          update: {
            args: Prisma.tbl_filme_generoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_filme_generoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_filme_generoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_filme_generoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>[]
          }
          upsert: {
            args: Prisma.tbl_filme_generoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_generoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_filme_generoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_filme_genero>
          }
          groupBy: {
            args: Prisma.tbl_filme_generoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filme_generoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_filme_generoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filme_generoCountAggregateOutputType> | number
          }
        }
      }
      tbl_filme: {
        payload: Prisma.$tbl_filmePayload<ExtArgs>
        fields: Prisma.tbl_filmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_filmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_filmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>
          }
          findFirst: {
            args: Prisma.tbl_filmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_filmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>
          }
          findMany: {
            args: Prisma.tbl_filmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>[]
          }
          create: {
            args: Prisma.tbl_filmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>
          }
          createMany: {
            args: Prisma.tbl_filmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_filmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>[]
          }
          delete: {
            args: Prisma.tbl_filmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>
          }
          update: {
            args: Prisma.tbl_filmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>
          }
          deleteMany: {
            args: Prisma.tbl_filmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_filmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_filmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>[]
          }
          upsert: {
            args: Prisma.tbl_filmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filmePayload>
          }
          aggregate: {
            args: Prisma.Tbl_filmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_filme>
          }
          groupBy: {
            args: Prisma.tbl_filmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_filmeCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filmeCountAggregateOutputType> | number
          }
        }
      }
      tbl_diretor: {
        payload: Prisma.$tbl_diretorPayload<ExtArgs>
        fields: Prisma.tbl_diretorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_diretorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_diretorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>
          }
          findFirst: {
            args: Prisma.tbl_diretorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_diretorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>
          }
          findMany: {
            args: Prisma.tbl_diretorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>[]
          }
          create: {
            args: Prisma.tbl_diretorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>
          }
          createMany: {
            args: Prisma.tbl_diretorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_diretorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>[]
          }
          delete: {
            args: Prisma.tbl_diretorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>
          }
          update: {
            args: Prisma.tbl_diretorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>
          }
          deleteMany: {
            args: Prisma.tbl_diretorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_diretorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_diretorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>[]
          }
          upsert: {
            args: Prisma.tbl_diretorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretorPayload>
          }
          aggregate: {
            args: Prisma.Tbl_diretorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_diretor>
          }
          groupBy: {
            args: Prisma.tbl_diretorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_diretorGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_diretorCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_diretorCountAggregateOutputType> | number
          }
        }
      }
      tbl_filme_diretor: {
        payload: Prisma.$tbl_filme_diretorPayload<ExtArgs>
        fields: Prisma.tbl_filme_diretorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_filme_diretorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_filme_diretorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>
          }
          findFirst: {
            args: Prisma.tbl_filme_diretorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_filme_diretorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>
          }
          findMany: {
            args: Prisma.tbl_filme_diretorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>[]
          }
          create: {
            args: Prisma.tbl_filme_diretorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>
          }
          createMany: {
            args: Prisma.tbl_filme_diretorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_filme_diretorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>[]
          }
          delete: {
            args: Prisma.tbl_filme_diretorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>
          }
          update: {
            args: Prisma.tbl_filme_diretorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>
          }
          deleteMany: {
            args: Prisma.tbl_filme_diretorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_filme_diretorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_filme_diretorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>[]
          }
          upsert: {
            args: Prisma.tbl_filme_diretorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_diretorPayload>
          }
          aggregate: {
            args: Prisma.Tbl_filme_diretorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_filme_diretor>
          }
          groupBy: {
            args: Prisma.tbl_filme_diretorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filme_diretorGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_filme_diretorCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filme_diretorCountAggregateOutputType> | number
          }
        }
      }
      tbl_ator: {
        payload: Prisma.$tbl_atorPayload<ExtArgs>
        fields: Prisma.tbl_atorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_atorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_atorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>
          }
          findFirst: {
            args: Prisma.tbl_atorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_atorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>
          }
          findMany: {
            args: Prisma.tbl_atorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>[]
          }
          create: {
            args: Prisma.tbl_atorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>
          }
          createMany: {
            args: Prisma.tbl_atorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_atorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>[]
          }
          delete: {
            args: Prisma.tbl_atorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>
          }
          update: {
            args: Prisma.tbl_atorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>
          }
          deleteMany: {
            args: Prisma.tbl_atorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_atorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_atorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>[]
          }
          upsert: {
            args: Prisma.tbl_atorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_atorPayload>
          }
          aggregate: {
            args: Prisma.Tbl_atorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_ator>
          }
          groupBy: {
            args: Prisma.tbl_atorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_atorGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_atorCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_atorCountAggregateOutputType> | number
          }
        }
      }
      tbl_filme_ator: {
        payload: Prisma.$tbl_filme_atorPayload<ExtArgs>
        fields: Prisma.tbl_filme_atorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_filme_atorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_filme_atorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>
          }
          findFirst: {
            args: Prisma.tbl_filme_atorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_filme_atorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>
          }
          findMany: {
            args: Prisma.tbl_filme_atorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>[]
          }
          create: {
            args: Prisma.tbl_filme_atorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>
          }
          createMany: {
            args: Prisma.tbl_filme_atorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_filme_atorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>[]
          }
          delete: {
            args: Prisma.tbl_filme_atorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>
          }
          update: {
            args: Prisma.tbl_filme_atorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>
          }
          deleteMany: {
            args: Prisma.tbl_filme_atorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_filme_atorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_filme_atorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>[]
          }
          upsert: {
            args: Prisma.tbl_filme_atorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_filme_atorPayload>
          }
          aggregate: {
            args: Prisma.Tbl_filme_atorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_filme_ator>
          }
          groupBy: {
            args: Prisma.tbl_filme_atorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filme_atorGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_filme_atorCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_filme_atorCountAggregateOutputType> | number
          }
        }
      }
      tbl_nacionalidade: {
        payload: Prisma.$tbl_nacionalidadePayload<ExtArgs>
        fields: Prisma.tbl_nacionalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_nacionalidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_nacionalidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>
          }
          findFirst: {
            args: Prisma.tbl_nacionalidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_nacionalidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>
          }
          findMany: {
            args: Prisma.tbl_nacionalidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>[]
          }
          create: {
            args: Prisma.tbl_nacionalidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>
          }
          createMany: {
            args: Prisma.tbl_nacionalidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_nacionalidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>[]
          }
          delete: {
            args: Prisma.tbl_nacionalidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>
          }
          update: {
            args: Prisma.tbl_nacionalidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>
          }
          deleteMany: {
            args: Prisma.tbl_nacionalidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_nacionalidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_nacionalidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>[]
          }
          upsert: {
            args: Prisma.tbl_nacionalidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_nacionalidadePayload>
          }
          aggregate: {
            args: Prisma.Tbl_nacionalidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_nacionalidade>
          }
          groupBy: {
            args: Prisma.tbl_nacionalidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_nacionalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_nacionalidadeCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_nacionalidadeCountAggregateOutputType> | number
          }
        }
      }
      tbl_diretor_nacionalidade: {
        payload: Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>
        fields: Prisma.tbl_diretor_nacionalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_diretor_nacionalidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_diretor_nacionalidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>
          }
          findFirst: {
            args: Prisma.tbl_diretor_nacionalidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_diretor_nacionalidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>
          }
          findMany: {
            args: Prisma.tbl_diretor_nacionalidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>[]
          }
          create: {
            args: Prisma.tbl_diretor_nacionalidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>
          }
          createMany: {
            args: Prisma.tbl_diretor_nacionalidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_diretor_nacionalidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>[]
          }
          delete: {
            args: Prisma.tbl_diretor_nacionalidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>
          }
          update: {
            args: Prisma.tbl_diretor_nacionalidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>
          }
          deleteMany: {
            args: Prisma.tbl_diretor_nacionalidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_diretor_nacionalidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_diretor_nacionalidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>[]
          }
          upsert: {
            args: Prisma.tbl_diretor_nacionalidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_diretor_nacionalidadePayload>
          }
          aggregate: {
            args: Prisma.Tbl_diretor_nacionalidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_diretor_nacionalidade>
          }
          groupBy: {
            args: Prisma.tbl_diretor_nacionalidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_diretor_nacionalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_diretor_nacionalidadeCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_diretor_nacionalidadeCountAggregateOutputType> | number
          }
        }
      }
      tbl_ator_nacionalidade: {
        payload: Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>
        fields: Prisma.tbl_ator_nacionalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_ator_nacionalidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_ator_nacionalidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>
          }
          findFirst: {
            args: Prisma.tbl_ator_nacionalidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_ator_nacionalidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>
          }
          findMany: {
            args: Prisma.tbl_ator_nacionalidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>[]
          }
          create: {
            args: Prisma.tbl_ator_nacionalidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>
          }
          createMany: {
            args: Prisma.tbl_ator_nacionalidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_ator_nacionalidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>[]
          }
          delete: {
            args: Prisma.tbl_ator_nacionalidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>
          }
          update: {
            args: Prisma.tbl_ator_nacionalidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>
          }
          deleteMany: {
            args: Prisma.tbl_ator_nacionalidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_ator_nacionalidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_ator_nacionalidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>[]
          }
          upsert: {
            args: Prisma.tbl_ator_nacionalidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_ator_nacionalidadePayload>
          }
          aggregate: {
            args: Prisma.Tbl_ator_nacionalidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_ator_nacionalidade>
          }
          groupBy: {
            args: Prisma.tbl_ator_nacionalidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_ator_nacionalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_ator_nacionalidadeCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_ator_nacionalidadeCountAggregateOutputType> | number
          }
        }
      }
      tbl_sexo: {
        payload: Prisma.$tbl_sexoPayload<ExtArgs>
        fields: Prisma.tbl_sexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_sexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_sexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          findFirst: {
            args: Prisma.tbl_sexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_sexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          findMany: {
            args: Prisma.tbl_sexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>[]
          }
          create: {
            args: Prisma.tbl_sexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          createMany: {
            args: Prisma.tbl_sexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_sexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>[]
          }
          delete: {
            args: Prisma.tbl_sexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          update: {
            args: Prisma.tbl_sexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_sexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_sexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_sexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>[]
          }
          upsert: {
            args: Prisma.tbl_sexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_sexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_sexo>
          }
          groupBy: {
            args: Prisma.tbl_sexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_sexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_sexoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_sexoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tbl_classificacao?: tbl_classificacaoOmit
    tbl_genero?: tbl_generoOmit
    tbl_filme_genero?: tbl_filme_generoOmit
    tbl_filme?: tbl_filmeOmit
    tbl_diretor?: tbl_diretorOmit
    tbl_filme_diretor?: tbl_filme_diretorOmit
    tbl_ator?: tbl_atorOmit
    tbl_filme_ator?: tbl_filme_atorOmit
    tbl_nacionalidade?: tbl_nacionalidadeOmit
    tbl_diretor_nacionalidade?: tbl_diretor_nacionalidadeOmit
    tbl_ator_nacionalidade?: tbl_ator_nacionalidadeOmit
    tbl_sexo?: tbl_sexoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tbl_classificacaoCountOutputType
   */

  export type Tbl_classificacaoCountOutputType = {
    filmes: number
  }

  export type Tbl_classificacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filmes?: boolean | Tbl_classificacaoCountOutputTypeCountFilmesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_classificacaoCountOutputType without action
   */
  export type Tbl_classificacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_classificacaoCountOutputType
     */
    select?: Tbl_classificacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_classificacaoCountOutputType without action
   */
  export type Tbl_classificacaoCountOutputTypeCountFilmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filmeWhereInput
  }


  /**
   * Count Type Tbl_generoCountOutputType
   */

  export type Tbl_generoCountOutputType = {
    filmes: number
  }

  export type Tbl_generoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filmes?: boolean | Tbl_generoCountOutputTypeCountFilmesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_generoCountOutputType without action
   */
  export type Tbl_generoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_generoCountOutputType
     */
    select?: Tbl_generoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_generoCountOutputType without action
   */
  export type Tbl_generoCountOutputTypeCountFilmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_generoWhereInput
  }


  /**
   * Count Type Tbl_filmeCountOutputType
   */

  export type Tbl_filmeCountOutputType = {
    generos: number
    diretores: number
    atores: number
  }

  export type Tbl_filmeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | Tbl_filmeCountOutputTypeCountGenerosArgs
    diretores?: boolean | Tbl_filmeCountOutputTypeCountDiretoresArgs
    atores?: boolean | Tbl_filmeCountOutputTypeCountAtoresArgs
  }

  // Custom InputTypes
  /**
   * Tbl_filmeCountOutputType without action
   */
  export type Tbl_filmeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_filmeCountOutputType
     */
    select?: Tbl_filmeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_filmeCountOutputType without action
   */
  export type Tbl_filmeCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_generoWhereInput
  }

  /**
   * Tbl_filmeCountOutputType without action
   */
  export type Tbl_filmeCountOutputTypeCountDiretoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_diretorWhereInput
  }

  /**
   * Tbl_filmeCountOutputType without action
   */
  export type Tbl_filmeCountOutputTypeCountAtoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_atorWhereInput
  }


  /**
   * Count Type Tbl_diretorCountOutputType
   */

  export type Tbl_diretorCountOutputType = {
    nacionalidades: number
    filmes: number
  }

  export type Tbl_diretorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nacionalidades?: boolean | Tbl_diretorCountOutputTypeCountNacionalidadesArgs
    filmes?: boolean | Tbl_diretorCountOutputTypeCountFilmesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_diretorCountOutputType without action
   */
  export type Tbl_diretorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_diretorCountOutputType
     */
    select?: Tbl_diretorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_diretorCountOutputType without action
   */
  export type Tbl_diretorCountOutputTypeCountNacionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_diretor_nacionalidadeWhereInput
  }

  /**
   * Tbl_diretorCountOutputType without action
   */
  export type Tbl_diretorCountOutputTypeCountFilmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_diretorWhereInput
  }


  /**
   * Count Type Tbl_atorCountOutputType
   */

  export type Tbl_atorCountOutputType = {
    nacionalidades: number
    filmes: number
  }

  export type Tbl_atorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nacionalidades?: boolean | Tbl_atorCountOutputTypeCountNacionalidadesArgs
    filmes?: boolean | Tbl_atorCountOutputTypeCountFilmesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_atorCountOutputType without action
   */
  export type Tbl_atorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_atorCountOutputType
     */
    select?: Tbl_atorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_atorCountOutputType without action
   */
  export type Tbl_atorCountOutputTypeCountNacionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_ator_nacionalidadeWhereInput
  }

  /**
   * Tbl_atorCountOutputType without action
   */
  export type Tbl_atorCountOutputTypeCountFilmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_atorWhereInput
  }


  /**
   * Count Type Tbl_nacionalidadeCountOutputType
   */

  export type Tbl_nacionalidadeCountOutputType = {
    diretores: number
    atores: number
  }

  export type Tbl_nacionalidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretores?: boolean | Tbl_nacionalidadeCountOutputTypeCountDiretoresArgs
    atores?: boolean | Tbl_nacionalidadeCountOutputTypeCountAtoresArgs
  }

  // Custom InputTypes
  /**
   * Tbl_nacionalidadeCountOutputType without action
   */
  export type Tbl_nacionalidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_nacionalidadeCountOutputType
     */
    select?: Tbl_nacionalidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_nacionalidadeCountOutputType without action
   */
  export type Tbl_nacionalidadeCountOutputTypeCountDiretoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_diretor_nacionalidadeWhereInput
  }

  /**
   * Tbl_nacionalidadeCountOutputType without action
   */
  export type Tbl_nacionalidadeCountOutputTypeCountAtoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_ator_nacionalidadeWhereInput
  }


  /**
   * Count Type Tbl_sexoCountOutputType
   */

  export type Tbl_sexoCountOutputType = {
    diretores: number
    atores: number
  }

  export type Tbl_sexoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretores?: boolean | Tbl_sexoCountOutputTypeCountDiretoresArgs
    atores?: boolean | Tbl_sexoCountOutputTypeCountAtoresArgs
  }

  // Custom InputTypes
  /**
   * Tbl_sexoCountOutputType without action
   */
  export type Tbl_sexoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_sexoCountOutputType
     */
    select?: Tbl_sexoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_sexoCountOutputType without action
   */
  export type Tbl_sexoCountOutputTypeCountDiretoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_diretorWhereInput
  }

  /**
   * Tbl_sexoCountOutputType without action
   */
  export type Tbl_sexoCountOutputTypeCountAtoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_atorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tbl_classificacao
   */

  export type AggregateTbl_classificacao = {
    _count: Tbl_classificacaoCountAggregateOutputType | null
    _avg: Tbl_classificacaoAvgAggregateOutputType | null
    _sum: Tbl_classificacaoSumAggregateOutputType | null
    _min: Tbl_classificacaoMinAggregateOutputType | null
    _max: Tbl_classificacaoMaxAggregateOutputType | null
  }

  export type Tbl_classificacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_classificacaoSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_classificacaoMinAggregateOutputType = {
    id: number | null
    sigla: string | null
    nome: string | null
    descricao: string | null
  }

  export type Tbl_classificacaoMaxAggregateOutputType = {
    id: number | null
    sigla: string | null
    nome: string | null
    descricao: string | null
  }

  export type Tbl_classificacaoCountAggregateOutputType = {
    id: number
    sigla: number
    nome: number
    descricao: number
    _all: number
  }


  export type Tbl_classificacaoAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_classificacaoSumAggregateInputType = {
    id?: true
  }

  export type Tbl_classificacaoMinAggregateInputType = {
    id?: true
    sigla?: true
    nome?: true
    descricao?: true
  }

  export type Tbl_classificacaoMaxAggregateInputType = {
    id?: true
    sigla?: true
    nome?: true
    descricao?: true
  }

  export type Tbl_classificacaoCountAggregateInputType = {
    id?: true
    sigla?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type Tbl_classificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_classificacao to aggregate.
     */
    where?: tbl_classificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_classificacaos to fetch.
     */
    orderBy?: tbl_classificacaoOrderByWithRelationInput | tbl_classificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_classificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_classificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_classificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_classificacaos
    **/
    _count?: true | Tbl_classificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_classificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_classificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_classificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_classificacaoMaxAggregateInputType
  }

  export type GetTbl_classificacaoAggregateType<T extends Tbl_classificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_classificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_classificacao[P]>
      : GetScalarType<T[P], AggregateTbl_classificacao[P]>
  }




  export type tbl_classificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_classificacaoWhereInput
    orderBy?: tbl_classificacaoOrderByWithAggregationInput | tbl_classificacaoOrderByWithAggregationInput[]
    by: Tbl_classificacaoScalarFieldEnum[] | Tbl_classificacaoScalarFieldEnum
    having?: tbl_classificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_classificacaoCountAggregateInputType | true
    _avg?: Tbl_classificacaoAvgAggregateInputType
    _sum?: Tbl_classificacaoSumAggregateInputType
    _min?: Tbl_classificacaoMinAggregateInputType
    _max?: Tbl_classificacaoMaxAggregateInputType
  }

  export type Tbl_classificacaoGroupByOutputType = {
    id: number
    sigla: string
    nome: string
    descricao: string
    _count: Tbl_classificacaoCountAggregateOutputType | null
    _avg: Tbl_classificacaoAvgAggregateOutputType | null
    _sum: Tbl_classificacaoSumAggregateOutputType | null
    _min: Tbl_classificacaoMinAggregateOutputType | null
    _max: Tbl_classificacaoMaxAggregateOutputType | null
  }

  type GetTbl_classificacaoGroupByPayload<T extends tbl_classificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_classificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_classificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_classificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_classificacaoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_classificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    nome?: boolean
    descricao?: boolean
    filmes?: boolean | tbl_classificacao$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_classificacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_classificacao"]>

  export type tbl_classificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tbl_classificacao"]>

  export type tbl_classificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tbl_classificacao"]>

  export type tbl_classificacaoSelectScalar = {
    id?: boolean
    sigla?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type tbl_classificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sigla" | "nome" | "descricao", ExtArgs["result"]["tbl_classificacao"]>
  export type tbl_classificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filmes?: boolean | tbl_classificacao$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_classificacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_classificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_classificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_classificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_classificacao"
    objects: {
      filmes: Prisma.$tbl_filmePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sigla: string
      nome: string
      descricao: string
    }, ExtArgs["result"]["tbl_classificacao"]>
    composites: {}
  }

  type tbl_classificacaoGetPayload<S extends boolean | null | undefined | tbl_classificacaoDefaultArgs> = $Result.GetResult<Prisma.$tbl_classificacaoPayload, S>

  type tbl_classificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_classificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_classificacaoCountAggregateInputType | true
    }

  export interface tbl_classificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_classificacao'], meta: { name: 'tbl_classificacao' } }
    /**
     * Find zero or one Tbl_classificacao that matches the filter.
     * @param {tbl_classificacaoFindUniqueArgs} args - Arguments to find a Tbl_classificacao
     * @example
     * // Get one Tbl_classificacao
     * const tbl_classificacao = await prisma.tbl_classificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_classificacaoFindUniqueArgs>(args: SelectSubset<T, tbl_classificacaoFindUniqueArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_classificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_classificacaoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_classificacao
     * @example
     * // Get one Tbl_classificacao
     * const tbl_classificacao = await prisma.tbl_classificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_classificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_classificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_classificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_classificacaoFindFirstArgs} args - Arguments to find a Tbl_classificacao
     * @example
     * // Get one Tbl_classificacao
     * const tbl_classificacao = await prisma.tbl_classificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_classificacaoFindFirstArgs>(args?: SelectSubset<T, tbl_classificacaoFindFirstArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_classificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_classificacaoFindFirstOrThrowArgs} args - Arguments to find a Tbl_classificacao
     * @example
     * // Get one Tbl_classificacao
     * const tbl_classificacao = await prisma.tbl_classificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_classificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_classificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_classificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_classificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_classificacaos
     * const tbl_classificacaos = await prisma.tbl_classificacao.findMany()
     * 
     * // Get first 10 Tbl_classificacaos
     * const tbl_classificacaos = await prisma.tbl_classificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_classificacaoWithIdOnly = await prisma.tbl_classificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_classificacaoFindManyArgs>(args?: SelectSubset<T, tbl_classificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_classificacao.
     * @param {tbl_classificacaoCreateArgs} args - Arguments to create a Tbl_classificacao.
     * @example
     * // Create one Tbl_classificacao
     * const Tbl_classificacao = await prisma.tbl_classificacao.create({
     *   data: {
     *     // ... data to create a Tbl_classificacao
     *   }
     * })
     * 
     */
    create<T extends tbl_classificacaoCreateArgs>(args: SelectSubset<T, tbl_classificacaoCreateArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_classificacaos.
     * @param {tbl_classificacaoCreateManyArgs} args - Arguments to create many Tbl_classificacaos.
     * @example
     * // Create many Tbl_classificacaos
     * const tbl_classificacao = await prisma.tbl_classificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_classificacaoCreateManyArgs>(args?: SelectSubset<T, tbl_classificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_classificacaos and returns the data saved in the database.
     * @param {tbl_classificacaoCreateManyAndReturnArgs} args - Arguments to create many Tbl_classificacaos.
     * @example
     * // Create many Tbl_classificacaos
     * const tbl_classificacao = await prisma.tbl_classificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_classificacaos and only return the `id`
     * const tbl_classificacaoWithIdOnly = await prisma.tbl_classificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_classificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_classificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_classificacao.
     * @param {tbl_classificacaoDeleteArgs} args - Arguments to delete one Tbl_classificacao.
     * @example
     * // Delete one Tbl_classificacao
     * const Tbl_classificacao = await prisma.tbl_classificacao.delete({
     *   where: {
     *     // ... filter to delete one Tbl_classificacao
     *   }
     * })
     * 
     */
    delete<T extends tbl_classificacaoDeleteArgs>(args: SelectSubset<T, tbl_classificacaoDeleteArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_classificacao.
     * @param {tbl_classificacaoUpdateArgs} args - Arguments to update one Tbl_classificacao.
     * @example
     * // Update one Tbl_classificacao
     * const tbl_classificacao = await prisma.tbl_classificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_classificacaoUpdateArgs>(args: SelectSubset<T, tbl_classificacaoUpdateArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_classificacaos.
     * @param {tbl_classificacaoDeleteManyArgs} args - Arguments to filter Tbl_classificacaos to delete.
     * @example
     * // Delete a few Tbl_classificacaos
     * const { count } = await prisma.tbl_classificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_classificacaoDeleteManyArgs>(args?: SelectSubset<T, tbl_classificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_classificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_classificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_classificacaos
     * const tbl_classificacao = await prisma.tbl_classificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_classificacaoUpdateManyArgs>(args: SelectSubset<T, tbl_classificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_classificacaos and returns the data updated in the database.
     * @param {tbl_classificacaoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_classificacaos.
     * @example
     * // Update many Tbl_classificacaos
     * const tbl_classificacao = await prisma.tbl_classificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_classificacaos and only return the `id`
     * const tbl_classificacaoWithIdOnly = await prisma.tbl_classificacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_classificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_classificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_classificacao.
     * @param {tbl_classificacaoUpsertArgs} args - Arguments to update or create a Tbl_classificacao.
     * @example
     * // Update or create a Tbl_classificacao
     * const tbl_classificacao = await prisma.tbl_classificacao.upsert({
     *   create: {
     *     // ... data to create a Tbl_classificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_classificacao we want to update
     *   }
     * })
     */
    upsert<T extends tbl_classificacaoUpsertArgs>(args: SelectSubset<T, tbl_classificacaoUpsertArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_classificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_classificacaoCountArgs} args - Arguments to filter Tbl_classificacaos to count.
     * @example
     * // Count the number of Tbl_classificacaos
     * const count = await prisma.tbl_classificacao.count({
     *   where: {
     *     // ... the filter for the Tbl_classificacaos we want to count
     *   }
     * })
    **/
    count<T extends tbl_classificacaoCountArgs>(
      args?: Subset<T, tbl_classificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_classificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_classificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_classificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_classificacaoAggregateArgs>(args: Subset<T, Tbl_classificacaoAggregateArgs>): Prisma.PrismaPromise<GetTbl_classificacaoAggregateType<T>>

    /**
     * Group by Tbl_classificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_classificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_classificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_classificacaoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_classificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_classificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_classificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_classificacao model
   */
  readonly fields: tbl_classificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_classificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_classificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filmes<T extends tbl_classificacao$filmesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_classificacao$filmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_classificacao model
   */
  interface tbl_classificacaoFieldRefs {
    readonly id: FieldRef<"tbl_classificacao", 'Int'>
    readonly sigla: FieldRef<"tbl_classificacao", 'String'>
    readonly nome: FieldRef<"tbl_classificacao", 'String'>
    readonly descricao: FieldRef<"tbl_classificacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_classificacao findUnique
   */
  export type tbl_classificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_classificacao to fetch.
     */
    where: tbl_classificacaoWhereUniqueInput
  }

  /**
   * tbl_classificacao findUniqueOrThrow
   */
  export type tbl_classificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_classificacao to fetch.
     */
    where: tbl_classificacaoWhereUniqueInput
  }

  /**
   * tbl_classificacao findFirst
   */
  export type tbl_classificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_classificacao to fetch.
     */
    where?: tbl_classificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_classificacaos to fetch.
     */
    orderBy?: tbl_classificacaoOrderByWithRelationInput | tbl_classificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_classificacaos.
     */
    cursor?: tbl_classificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_classificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_classificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_classificacaos.
     */
    distinct?: Tbl_classificacaoScalarFieldEnum | Tbl_classificacaoScalarFieldEnum[]
  }

  /**
   * tbl_classificacao findFirstOrThrow
   */
  export type tbl_classificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_classificacao to fetch.
     */
    where?: tbl_classificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_classificacaos to fetch.
     */
    orderBy?: tbl_classificacaoOrderByWithRelationInput | tbl_classificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_classificacaos.
     */
    cursor?: tbl_classificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_classificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_classificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_classificacaos.
     */
    distinct?: Tbl_classificacaoScalarFieldEnum | Tbl_classificacaoScalarFieldEnum[]
  }

  /**
   * tbl_classificacao findMany
   */
  export type tbl_classificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_classificacaos to fetch.
     */
    where?: tbl_classificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_classificacaos to fetch.
     */
    orderBy?: tbl_classificacaoOrderByWithRelationInput | tbl_classificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_classificacaos.
     */
    cursor?: tbl_classificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_classificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_classificacaos.
     */
    skip?: number
    distinct?: Tbl_classificacaoScalarFieldEnum | Tbl_classificacaoScalarFieldEnum[]
  }

  /**
   * tbl_classificacao create
   */
  export type tbl_classificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_classificacao.
     */
    data: XOR<tbl_classificacaoCreateInput, tbl_classificacaoUncheckedCreateInput>
  }

  /**
   * tbl_classificacao createMany
   */
  export type tbl_classificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_classificacaos.
     */
    data: tbl_classificacaoCreateManyInput | tbl_classificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_classificacao createManyAndReturn
   */
  export type tbl_classificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_classificacaos.
     */
    data: tbl_classificacaoCreateManyInput | tbl_classificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_classificacao update
   */
  export type tbl_classificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_classificacao.
     */
    data: XOR<tbl_classificacaoUpdateInput, tbl_classificacaoUncheckedUpdateInput>
    /**
     * Choose, which tbl_classificacao to update.
     */
    where: tbl_classificacaoWhereUniqueInput
  }

  /**
   * tbl_classificacao updateMany
   */
  export type tbl_classificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_classificacaos.
     */
    data: XOR<tbl_classificacaoUpdateManyMutationInput, tbl_classificacaoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_classificacaos to update
     */
    where?: tbl_classificacaoWhereInput
    /**
     * Limit how many tbl_classificacaos to update.
     */
    limit?: number
  }

  /**
   * tbl_classificacao updateManyAndReturn
   */
  export type tbl_classificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * The data used to update tbl_classificacaos.
     */
    data: XOR<tbl_classificacaoUpdateManyMutationInput, tbl_classificacaoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_classificacaos to update
     */
    where?: tbl_classificacaoWhereInput
    /**
     * Limit how many tbl_classificacaos to update.
     */
    limit?: number
  }

  /**
   * tbl_classificacao upsert
   */
  export type tbl_classificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_classificacao to update in case it exists.
     */
    where: tbl_classificacaoWhereUniqueInput
    /**
     * In case the tbl_classificacao found by the `where` argument doesn't exist, create a new tbl_classificacao with this data.
     */
    create: XOR<tbl_classificacaoCreateInput, tbl_classificacaoUncheckedCreateInput>
    /**
     * In case the tbl_classificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_classificacaoUpdateInput, tbl_classificacaoUncheckedUpdateInput>
  }

  /**
   * tbl_classificacao delete
   */
  export type tbl_classificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
    /**
     * Filter which tbl_classificacao to delete.
     */
    where: tbl_classificacaoWhereUniqueInput
  }

  /**
   * tbl_classificacao deleteMany
   */
  export type tbl_classificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_classificacaos to delete
     */
    where?: tbl_classificacaoWhereInput
    /**
     * Limit how many tbl_classificacaos to delete.
     */
    limit?: number
  }

  /**
   * tbl_classificacao.filmes
   */
  export type tbl_classificacao$filmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    where?: tbl_filmeWhereInput
    orderBy?: tbl_filmeOrderByWithRelationInput | tbl_filmeOrderByWithRelationInput[]
    cursor?: tbl_filmeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filmeScalarFieldEnum | Tbl_filmeScalarFieldEnum[]
  }

  /**
   * tbl_classificacao without action
   */
  export type tbl_classificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_classificacao
     */
    select?: tbl_classificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_classificacao
     */
    omit?: tbl_classificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_classificacaoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_genero
   */

  export type AggregateTbl_genero = {
    _count: Tbl_generoCountAggregateOutputType | null
    _avg: Tbl_generoAvgAggregateOutputType | null
    _sum: Tbl_generoSumAggregateOutputType | null
    _min: Tbl_generoMinAggregateOutputType | null
    _max: Tbl_generoMaxAggregateOutputType | null
  }

  export type Tbl_generoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_generoSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_generoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Tbl_generoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Tbl_generoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type Tbl_generoAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_generoSumAggregateInputType = {
    id?: true
  }

  export type Tbl_generoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Tbl_generoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Tbl_generoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type Tbl_generoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_genero to aggregate.
     */
    where?: tbl_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_generos to fetch.
     */
    orderBy?: tbl_generoOrderByWithRelationInput | tbl_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_generos
    **/
    _count?: true | Tbl_generoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_generoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_generoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_generoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_generoMaxAggregateInputType
  }

  export type GetTbl_generoAggregateType<T extends Tbl_generoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_genero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_genero[P]>
      : GetScalarType<T[P], AggregateTbl_genero[P]>
  }




  export type tbl_generoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_generoWhereInput
    orderBy?: tbl_generoOrderByWithAggregationInput | tbl_generoOrderByWithAggregationInput[]
    by: Tbl_generoScalarFieldEnum[] | Tbl_generoScalarFieldEnum
    having?: tbl_generoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_generoCountAggregateInputType | true
    _avg?: Tbl_generoAvgAggregateInputType
    _sum?: Tbl_generoSumAggregateInputType
    _min?: Tbl_generoMinAggregateInputType
    _max?: Tbl_generoMaxAggregateInputType
  }

  export type Tbl_generoGroupByOutputType = {
    id: number
    nome: string
    _count: Tbl_generoCountAggregateOutputType | null
    _avg: Tbl_generoAvgAggregateOutputType | null
    _sum: Tbl_generoSumAggregateOutputType | null
    _min: Tbl_generoMinAggregateOutputType | null
    _max: Tbl_generoMaxAggregateOutputType | null
  }

  type GetTbl_generoGroupByPayload<T extends tbl_generoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_generoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_generoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_generoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_generoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_generoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    filmes?: boolean | tbl_genero$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_generoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_genero"]>

  export type tbl_generoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tbl_genero"]>

  export type tbl_generoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tbl_genero"]>

  export type tbl_generoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type tbl_generoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["tbl_genero"]>
  export type tbl_generoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filmes?: boolean | tbl_genero$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_generoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_generoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_generoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_generoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_genero"
    objects: {
      filmes: Prisma.$tbl_filme_generoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["tbl_genero"]>
    composites: {}
  }

  type tbl_generoGetPayload<S extends boolean | null | undefined | tbl_generoDefaultArgs> = $Result.GetResult<Prisma.$tbl_generoPayload, S>

  type tbl_generoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_generoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_generoCountAggregateInputType | true
    }

  export interface tbl_generoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_genero'], meta: { name: 'tbl_genero' } }
    /**
     * Find zero or one Tbl_genero that matches the filter.
     * @param {tbl_generoFindUniqueArgs} args - Arguments to find a Tbl_genero
     * @example
     * // Get one Tbl_genero
     * const tbl_genero = await prisma.tbl_genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_generoFindUniqueArgs>(args: SelectSubset<T, tbl_generoFindUniqueArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_generoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_genero
     * @example
     * // Get one Tbl_genero
     * const tbl_genero = await prisma.tbl_genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_generoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_generoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_generoFindFirstArgs} args - Arguments to find a Tbl_genero
     * @example
     * // Get one Tbl_genero
     * const tbl_genero = await prisma.tbl_genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_generoFindFirstArgs>(args?: SelectSubset<T, tbl_generoFindFirstArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_generoFindFirstOrThrowArgs} args - Arguments to find a Tbl_genero
     * @example
     * // Get one Tbl_genero
     * const tbl_genero = await prisma.tbl_genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_generoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_generoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_generoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_generos
     * const tbl_generos = await prisma.tbl_genero.findMany()
     * 
     * // Get first 10 Tbl_generos
     * const tbl_generos = await prisma.tbl_genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_generoWithIdOnly = await prisma.tbl_genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_generoFindManyArgs>(args?: SelectSubset<T, tbl_generoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_genero.
     * @param {tbl_generoCreateArgs} args - Arguments to create a Tbl_genero.
     * @example
     * // Create one Tbl_genero
     * const Tbl_genero = await prisma.tbl_genero.create({
     *   data: {
     *     // ... data to create a Tbl_genero
     *   }
     * })
     * 
     */
    create<T extends tbl_generoCreateArgs>(args: SelectSubset<T, tbl_generoCreateArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_generos.
     * @param {tbl_generoCreateManyArgs} args - Arguments to create many Tbl_generos.
     * @example
     * // Create many Tbl_generos
     * const tbl_genero = await prisma.tbl_genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_generoCreateManyArgs>(args?: SelectSubset<T, tbl_generoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_generos and returns the data saved in the database.
     * @param {tbl_generoCreateManyAndReturnArgs} args - Arguments to create many Tbl_generos.
     * @example
     * // Create many Tbl_generos
     * const tbl_genero = await prisma.tbl_genero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_generos and only return the `id`
     * const tbl_generoWithIdOnly = await prisma.tbl_genero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_generoCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_generoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_genero.
     * @param {tbl_generoDeleteArgs} args - Arguments to delete one Tbl_genero.
     * @example
     * // Delete one Tbl_genero
     * const Tbl_genero = await prisma.tbl_genero.delete({
     *   where: {
     *     // ... filter to delete one Tbl_genero
     *   }
     * })
     * 
     */
    delete<T extends tbl_generoDeleteArgs>(args: SelectSubset<T, tbl_generoDeleteArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_genero.
     * @param {tbl_generoUpdateArgs} args - Arguments to update one Tbl_genero.
     * @example
     * // Update one Tbl_genero
     * const tbl_genero = await prisma.tbl_genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_generoUpdateArgs>(args: SelectSubset<T, tbl_generoUpdateArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_generos.
     * @param {tbl_generoDeleteManyArgs} args - Arguments to filter Tbl_generos to delete.
     * @example
     * // Delete a few Tbl_generos
     * const { count } = await prisma.tbl_genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_generoDeleteManyArgs>(args?: SelectSubset<T, tbl_generoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_generoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_generos
     * const tbl_genero = await prisma.tbl_genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_generoUpdateManyArgs>(args: SelectSubset<T, tbl_generoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_generos and returns the data updated in the database.
     * @param {tbl_generoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_generos.
     * @example
     * // Update many Tbl_generos
     * const tbl_genero = await prisma.tbl_genero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_generos and only return the `id`
     * const tbl_generoWithIdOnly = await prisma.tbl_genero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_generoUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_generoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_genero.
     * @param {tbl_generoUpsertArgs} args - Arguments to update or create a Tbl_genero.
     * @example
     * // Update or create a Tbl_genero
     * const tbl_genero = await prisma.tbl_genero.upsert({
     *   create: {
     *     // ... data to create a Tbl_genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_genero we want to update
     *   }
     * })
     */
    upsert<T extends tbl_generoUpsertArgs>(args: SelectSubset<T, tbl_generoUpsertArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_generoCountArgs} args - Arguments to filter Tbl_generos to count.
     * @example
     * // Count the number of Tbl_generos
     * const count = await prisma.tbl_genero.count({
     *   where: {
     *     // ... the filter for the Tbl_generos we want to count
     *   }
     * })
    **/
    count<T extends tbl_generoCountArgs>(
      args?: Subset<T, tbl_generoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_generoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_generoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_generoAggregateArgs>(args: Subset<T, Tbl_generoAggregateArgs>): Prisma.PrismaPromise<GetTbl_generoAggregateType<T>>

    /**
     * Group by Tbl_genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_generoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_generoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_generoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_generoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_generoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_generoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_genero model
   */
  readonly fields: tbl_generoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_generoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filmes<T extends tbl_genero$filmesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_genero$filmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_genero model
   */
  interface tbl_generoFieldRefs {
    readonly id: FieldRef<"tbl_genero", 'Int'>
    readonly nome: FieldRef<"tbl_genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_genero findUnique
   */
  export type tbl_generoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_genero to fetch.
     */
    where: tbl_generoWhereUniqueInput
  }

  /**
   * tbl_genero findUniqueOrThrow
   */
  export type tbl_generoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_genero to fetch.
     */
    where: tbl_generoWhereUniqueInput
  }

  /**
   * tbl_genero findFirst
   */
  export type tbl_generoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_genero to fetch.
     */
    where?: tbl_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_generos to fetch.
     */
    orderBy?: tbl_generoOrderByWithRelationInput | tbl_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_generos.
     */
    cursor?: tbl_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_generos.
     */
    distinct?: Tbl_generoScalarFieldEnum | Tbl_generoScalarFieldEnum[]
  }

  /**
   * tbl_genero findFirstOrThrow
   */
  export type tbl_generoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_genero to fetch.
     */
    where?: tbl_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_generos to fetch.
     */
    orderBy?: tbl_generoOrderByWithRelationInput | tbl_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_generos.
     */
    cursor?: tbl_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_generos.
     */
    distinct?: Tbl_generoScalarFieldEnum | Tbl_generoScalarFieldEnum[]
  }

  /**
   * tbl_genero findMany
   */
  export type tbl_generoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_generos to fetch.
     */
    where?: tbl_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_generos to fetch.
     */
    orderBy?: tbl_generoOrderByWithRelationInput | tbl_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_generos.
     */
    cursor?: tbl_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_generos.
     */
    skip?: number
    distinct?: Tbl_generoScalarFieldEnum | Tbl_generoScalarFieldEnum[]
  }

  /**
   * tbl_genero create
   */
  export type tbl_generoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_genero.
     */
    data: XOR<tbl_generoCreateInput, tbl_generoUncheckedCreateInput>
  }

  /**
   * tbl_genero createMany
   */
  export type tbl_generoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_generos.
     */
    data: tbl_generoCreateManyInput | tbl_generoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_genero createManyAndReturn
   */
  export type tbl_generoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_generos.
     */
    data: tbl_generoCreateManyInput | tbl_generoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_genero update
   */
  export type tbl_generoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_genero.
     */
    data: XOR<tbl_generoUpdateInput, tbl_generoUncheckedUpdateInput>
    /**
     * Choose, which tbl_genero to update.
     */
    where: tbl_generoWhereUniqueInput
  }

  /**
   * tbl_genero updateMany
   */
  export type tbl_generoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_generos.
     */
    data: XOR<tbl_generoUpdateManyMutationInput, tbl_generoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_generos to update
     */
    where?: tbl_generoWhereInput
    /**
     * Limit how many tbl_generos to update.
     */
    limit?: number
  }

  /**
   * tbl_genero updateManyAndReturn
   */
  export type tbl_generoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * The data used to update tbl_generos.
     */
    data: XOR<tbl_generoUpdateManyMutationInput, tbl_generoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_generos to update
     */
    where?: tbl_generoWhereInput
    /**
     * Limit how many tbl_generos to update.
     */
    limit?: number
  }

  /**
   * tbl_genero upsert
   */
  export type tbl_generoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_genero to update in case it exists.
     */
    where: tbl_generoWhereUniqueInput
    /**
     * In case the tbl_genero found by the `where` argument doesn't exist, create a new tbl_genero with this data.
     */
    create: XOR<tbl_generoCreateInput, tbl_generoUncheckedCreateInput>
    /**
     * In case the tbl_genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_generoUpdateInput, tbl_generoUncheckedUpdateInput>
  }

  /**
   * tbl_genero delete
   */
  export type tbl_generoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
    /**
     * Filter which tbl_genero to delete.
     */
    where: tbl_generoWhereUniqueInput
  }

  /**
   * tbl_genero deleteMany
   */
  export type tbl_generoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_generos to delete
     */
    where?: tbl_generoWhereInput
    /**
     * Limit how many tbl_generos to delete.
     */
    limit?: number
  }

  /**
   * tbl_genero.filmes
   */
  export type tbl_genero$filmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    where?: tbl_filme_generoWhereInput
    orderBy?: tbl_filme_generoOrderByWithRelationInput | tbl_filme_generoOrderByWithRelationInput[]
    cursor?: tbl_filme_generoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filme_generoScalarFieldEnum | Tbl_filme_generoScalarFieldEnum[]
  }

  /**
   * tbl_genero without action
   */
  export type tbl_generoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_genero
     */
    select?: tbl_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_genero
     */
    omit?: tbl_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_generoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_filme_genero
   */

  export type AggregateTbl_filme_genero = {
    _count: Tbl_filme_generoCountAggregateOutputType | null
    _avg: Tbl_filme_generoAvgAggregateOutputType | null
    _sum: Tbl_filme_generoSumAggregateOutputType | null
    _min: Tbl_filme_generoMinAggregateOutputType | null
    _max: Tbl_filme_generoMaxAggregateOutputType | null
  }

  export type Tbl_filme_generoAvgAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_genero: number | null
  }

  export type Tbl_filme_generoSumAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_genero: number | null
  }

  export type Tbl_filme_generoMinAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_genero: number | null
  }

  export type Tbl_filme_generoMaxAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_genero: number | null
  }

  export type Tbl_filme_generoCountAggregateOutputType = {
    id: number
    id_filme: number
    id_genero: number
    _all: number
  }


  export type Tbl_filme_generoAvgAggregateInputType = {
    id?: true
    id_filme?: true
    id_genero?: true
  }

  export type Tbl_filme_generoSumAggregateInputType = {
    id?: true
    id_filme?: true
    id_genero?: true
  }

  export type Tbl_filme_generoMinAggregateInputType = {
    id?: true
    id_filme?: true
    id_genero?: true
  }

  export type Tbl_filme_generoMaxAggregateInputType = {
    id?: true
    id_filme?: true
    id_genero?: true
  }

  export type Tbl_filme_generoCountAggregateInputType = {
    id?: true
    id_filme?: true
    id_genero?: true
    _all?: true
  }

  export type Tbl_filme_generoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme_genero to aggregate.
     */
    where?: tbl_filme_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_generos to fetch.
     */
    orderBy?: tbl_filme_generoOrderByWithRelationInput | tbl_filme_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_filme_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_filme_generos
    **/
    _count?: true | Tbl_filme_generoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_filme_generoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_filme_generoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_filme_generoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_filme_generoMaxAggregateInputType
  }

  export type GetTbl_filme_generoAggregateType<T extends Tbl_filme_generoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_filme_genero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_filme_genero[P]>
      : GetScalarType<T[P], AggregateTbl_filme_genero[P]>
  }




  export type tbl_filme_generoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_generoWhereInput
    orderBy?: tbl_filme_generoOrderByWithAggregationInput | tbl_filme_generoOrderByWithAggregationInput[]
    by: Tbl_filme_generoScalarFieldEnum[] | Tbl_filme_generoScalarFieldEnum
    having?: tbl_filme_generoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_filme_generoCountAggregateInputType | true
    _avg?: Tbl_filme_generoAvgAggregateInputType
    _sum?: Tbl_filme_generoSumAggregateInputType
    _min?: Tbl_filme_generoMinAggregateInputType
    _max?: Tbl_filme_generoMaxAggregateInputType
  }

  export type Tbl_filme_generoGroupByOutputType = {
    id: number
    id_filme: number
    id_genero: number
    _count: Tbl_filme_generoCountAggregateOutputType | null
    _avg: Tbl_filme_generoAvgAggregateOutputType | null
    _sum: Tbl_filme_generoSumAggregateOutputType | null
    _min: Tbl_filme_generoMinAggregateOutputType | null
    _max: Tbl_filme_generoMaxAggregateOutputType | null
  }

  type GetTbl_filme_generoGroupByPayload<T extends tbl_filme_generoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_filme_generoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_filme_generoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_filme_generoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_filme_generoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_filme_generoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_genero?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    genero?: boolean | tbl_generoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_genero"]>

  export type tbl_filme_generoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_genero?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    genero?: boolean | tbl_generoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_genero"]>

  export type tbl_filme_generoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_genero?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    genero?: boolean | tbl_generoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_genero"]>

  export type tbl_filme_generoSelectScalar = {
    id?: boolean
    id_filme?: boolean
    id_genero?: boolean
  }

  export type tbl_filme_generoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_filme" | "id_genero", ExtArgs["result"]["tbl_filme_genero"]>
  export type tbl_filme_generoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    genero?: boolean | tbl_generoDefaultArgs<ExtArgs>
  }
  export type tbl_filme_generoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    genero?: boolean | tbl_generoDefaultArgs<ExtArgs>
  }
  export type tbl_filme_generoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    genero?: boolean | tbl_generoDefaultArgs<ExtArgs>
  }

  export type $tbl_filme_generoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_filme_genero"
    objects: {
      filme: Prisma.$tbl_filmePayload<ExtArgs>
      genero: Prisma.$tbl_generoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_filme: number
      id_genero: number
    }, ExtArgs["result"]["tbl_filme_genero"]>
    composites: {}
  }

  type tbl_filme_generoGetPayload<S extends boolean | null | undefined | tbl_filme_generoDefaultArgs> = $Result.GetResult<Prisma.$tbl_filme_generoPayload, S>

  type tbl_filme_generoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_filme_generoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_filme_generoCountAggregateInputType | true
    }

  export interface tbl_filme_generoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_filme_genero'], meta: { name: 'tbl_filme_genero' } }
    /**
     * Find zero or one Tbl_filme_genero that matches the filter.
     * @param {tbl_filme_generoFindUniqueArgs} args - Arguments to find a Tbl_filme_genero
     * @example
     * // Get one Tbl_filme_genero
     * const tbl_filme_genero = await prisma.tbl_filme_genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_filme_generoFindUniqueArgs>(args: SelectSubset<T, tbl_filme_generoFindUniqueArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_filme_genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_filme_generoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_filme_genero
     * @example
     * // Get one Tbl_filme_genero
     * const tbl_filme_genero = await prisma.tbl_filme_genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_filme_generoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_filme_generoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme_genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_generoFindFirstArgs} args - Arguments to find a Tbl_filme_genero
     * @example
     * // Get one Tbl_filme_genero
     * const tbl_filme_genero = await prisma.tbl_filme_genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_filme_generoFindFirstArgs>(args?: SelectSubset<T, tbl_filme_generoFindFirstArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme_genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_generoFindFirstOrThrowArgs} args - Arguments to find a Tbl_filme_genero
     * @example
     * // Get one Tbl_filme_genero
     * const tbl_filme_genero = await prisma.tbl_filme_genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_filme_generoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_filme_generoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_filme_generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_generoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_filme_generos
     * const tbl_filme_generos = await prisma.tbl_filme_genero.findMany()
     * 
     * // Get first 10 Tbl_filme_generos
     * const tbl_filme_generos = await prisma.tbl_filme_genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_filme_generoWithIdOnly = await prisma.tbl_filme_genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_filme_generoFindManyArgs>(args?: SelectSubset<T, tbl_filme_generoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_filme_genero.
     * @param {tbl_filme_generoCreateArgs} args - Arguments to create a Tbl_filme_genero.
     * @example
     * // Create one Tbl_filme_genero
     * const Tbl_filme_genero = await prisma.tbl_filme_genero.create({
     *   data: {
     *     // ... data to create a Tbl_filme_genero
     *   }
     * })
     * 
     */
    create<T extends tbl_filme_generoCreateArgs>(args: SelectSubset<T, tbl_filme_generoCreateArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_filme_generos.
     * @param {tbl_filme_generoCreateManyArgs} args - Arguments to create many Tbl_filme_generos.
     * @example
     * // Create many Tbl_filme_generos
     * const tbl_filme_genero = await prisma.tbl_filme_genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_filme_generoCreateManyArgs>(args?: SelectSubset<T, tbl_filme_generoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_filme_generos and returns the data saved in the database.
     * @param {tbl_filme_generoCreateManyAndReturnArgs} args - Arguments to create many Tbl_filme_generos.
     * @example
     * // Create many Tbl_filme_generos
     * const tbl_filme_genero = await prisma.tbl_filme_genero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_filme_generos and only return the `id`
     * const tbl_filme_generoWithIdOnly = await prisma.tbl_filme_genero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_filme_generoCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_filme_generoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_filme_genero.
     * @param {tbl_filme_generoDeleteArgs} args - Arguments to delete one Tbl_filme_genero.
     * @example
     * // Delete one Tbl_filme_genero
     * const Tbl_filme_genero = await prisma.tbl_filme_genero.delete({
     *   where: {
     *     // ... filter to delete one Tbl_filme_genero
     *   }
     * })
     * 
     */
    delete<T extends tbl_filme_generoDeleteArgs>(args: SelectSubset<T, tbl_filme_generoDeleteArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_filme_genero.
     * @param {tbl_filme_generoUpdateArgs} args - Arguments to update one Tbl_filme_genero.
     * @example
     * // Update one Tbl_filme_genero
     * const tbl_filme_genero = await prisma.tbl_filme_genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_filme_generoUpdateArgs>(args: SelectSubset<T, tbl_filme_generoUpdateArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_filme_generos.
     * @param {tbl_filme_generoDeleteManyArgs} args - Arguments to filter Tbl_filme_generos to delete.
     * @example
     * // Delete a few Tbl_filme_generos
     * const { count } = await prisma.tbl_filme_genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_filme_generoDeleteManyArgs>(args?: SelectSubset<T, tbl_filme_generoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filme_generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_generoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_filme_generos
     * const tbl_filme_genero = await prisma.tbl_filme_genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_filme_generoUpdateManyArgs>(args: SelectSubset<T, tbl_filme_generoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filme_generos and returns the data updated in the database.
     * @param {tbl_filme_generoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_filme_generos.
     * @example
     * // Update many Tbl_filme_generos
     * const tbl_filme_genero = await prisma.tbl_filme_genero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_filme_generos and only return the `id`
     * const tbl_filme_generoWithIdOnly = await prisma.tbl_filme_genero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_filme_generoUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_filme_generoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_filme_genero.
     * @param {tbl_filme_generoUpsertArgs} args - Arguments to update or create a Tbl_filme_genero.
     * @example
     * // Update or create a Tbl_filme_genero
     * const tbl_filme_genero = await prisma.tbl_filme_genero.upsert({
     *   create: {
     *     // ... data to create a Tbl_filme_genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_filme_genero we want to update
     *   }
     * })
     */
    upsert<T extends tbl_filme_generoUpsertArgs>(args: SelectSubset<T, tbl_filme_generoUpsertArgs<ExtArgs>>): Prisma__tbl_filme_generoClient<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_filme_generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_generoCountArgs} args - Arguments to filter Tbl_filme_generos to count.
     * @example
     * // Count the number of Tbl_filme_generos
     * const count = await prisma.tbl_filme_genero.count({
     *   where: {
     *     // ... the filter for the Tbl_filme_generos we want to count
     *   }
     * })
    **/
    count<T extends tbl_filme_generoCountArgs>(
      args?: Subset<T, tbl_filme_generoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_filme_generoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_filme_genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_filme_generoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_filme_generoAggregateArgs>(args: Subset<T, Tbl_filme_generoAggregateArgs>): Prisma.PrismaPromise<GetTbl_filme_generoAggregateType<T>>

    /**
     * Group by Tbl_filme_genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_generoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_filme_generoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_filme_generoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_filme_generoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_filme_generoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_filme_generoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_filme_genero model
   */
  readonly fields: tbl_filme_generoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_filme_genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_filme_generoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filme<T extends tbl_filmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filmeDefaultArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genero<T extends tbl_generoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_generoDefaultArgs<ExtArgs>>): Prisma__tbl_generoClient<$Result.GetResult<Prisma.$tbl_generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_filme_genero model
   */
  interface tbl_filme_generoFieldRefs {
    readonly id: FieldRef<"tbl_filme_genero", 'Int'>
    readonly id_filme: FieldRef<"tbl_filme_genero", 'Int'>
    readonly id_genero: FieldRef<"tbl_filme_genero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_filme_genero findUnique
   */
  export type tbl_filme_generoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_genero to fetch.
     */
    where: tbl_filme_generoWhereUniqueInput
  }

  /**
   * tbl_filme_genero findUniqueOrThrow
   */
  export type tbl_filme_generoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_genero to fetch.
     */
    where: tbl_filme_generoWhereUniqueInput
  }

  /**
   * tbl_filme_genero findFirst
   */
  export type tbl_filme_generoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_genero to fetch.
     */
    where?: tbl_filme_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_generos to fetch.
     */
    orderBy?: tbl_filme_generoOrderByWithRelationInput | tbl_filme_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filme_generos.
     */
    cursor?: tbl_filme_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filme_generos.
     */
    distinct?: Tbl_filme_generoScalarFieldEnum | Tbl_filme_generoScalarFieldEnum[]
  }

  /**
   * tbl_filme_genero findFirstOrThrow
   */
  export type tbl_filme_generoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_genero to fetch.
     */
    where?: tbl_filme_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_generos to fetch.
     */
    orderBy?: tbl_filme_generoOrderByWithRelationInput | tbl_filme_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filme_generos.
     */
    cursor?: tbl_filme_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filme_generos.
     */
    distinct?: Tbl_filme_generoScalarFieldEnum | Tbl_filme_generoScalarFieldEnum[]
  }

  /**
   * tbl_filme_genero findMany
   */
  export type tbl_filme_generoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_generos to fetch.
     */
    where?: tbl_filme_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_generos to fetch.
     */
    orderBy?: tbl_filme_generoOrderByWithRelationInput | tbl_filme_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_filme_generos.
     */
    cursor?: tbl_filme_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_generos.
     */
    skip?: number
    distinct?: Tbl_filme_generoScalarFieldEnum | Tbl_filme_generoScalarFieldEnum[]
  }

  /**
   * tbl_filme_genero create
   */
  export type tbl_filme_generoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_filme_genero.
     */
    data: XOR<tbl_filme_generoCreateInput, tbl_filme_generoUncheckedCreateInput>
  }

  /**
   * tbl_filme_genero createMany
   */
  export type tbl_filme_generoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_filme_generos.
     */
    data: tbl_filme_generoCreateManyInput | tbl_filme_generoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_filme_genero createManyAndReturn
   */
  export type tbl_filme_generoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_filme_generos.
     */
    data: tbl_filme_generoCreateManyInput | tbl_filme_generoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme_genero update
   */
  export type tbl_filme_generoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_filme_genero.
     */
    data: XOR<tbl_filme_generoUpdateInput, tbl_filme_generoUncheckedUpdateInput>
    /**
     * Choose, which tbl_filme_genero to update.
     */
    where: tbl_filme_generoWhereUniqueInput
  }

  /**
   * tbl_filme_genero updateMany
   */
  export type tbl_filme_generoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_filme_generos.
     */
    data: XOR<tbl_filme_generoUpdateManyMutationInput, tbl_filme_generoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filme_generos to update
     */
    where?: tbl_filme_generoWhereInput
    /**
     * Limit how many tbl_filme_generos to update.
     */
    limit?: number
  }

  /**
   * tbl_filme_genero updateManyAndReturn
   */
  export type tbl_filme_generoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * The data used to update tbl_filme_generos.
     */
    data: XOR<tbl_filme_generoUpdateManyMutationInput, tbl_filme_generoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filme_generos to update
     */
    where?: tbl_filme_generoWhereInput
    /**
     * Limit how many tbl_filme_generos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme_genero upsert
   */
  export type tbl_filme_generoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_filme_genero to update in case it exists.
     */
    where: tbl_filme_generoWhereUniqueInput
    /**
     * In case the tbl_filme_genero found by the `where` argument doesn't exist, create a new tbl_filme_genero with this data.
     */
    create: XOR<tbl_filme_generoCreateInput, tbl_filme_generoUncheckedCreateInput>
    /**
     * In case the tbl_filme_genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_filme_generoUpdateInput, tbl_filme_generoUncheckedUpdateInput>
  }

  /**
   * tbl_filme_genero delete
   */
  export type tbl_filme_generoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    /**
     * Filter which tbl_filme_genero to delete.
     */
    where: tbl_filme_generoWhereUniqueInput
  }

  /**
   * tbl_filme_genero deleteMany
   */
  export type tbl_filme_generoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme_generos to delete
     */
    where?: tbl_filme_generoWhereInput
    /**
     * Limit how many tbl_filme_generos to delete.
     */
    limit?: number
  }

  /**
   * tbl_filme_genero without action
   */
  export type tbl_filme_generoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_filme
   */

  export type AggregateTbl_filme = {
    _count: Tbl_filmeCountAggregateOutputType | null
    _avg: Tbl_filmeAvgAggregateOutputType | null
    _sum: Tbl_filmeSumAggregateOutputType | null
    _min: Tbl_filmeMinAggregateOutputType | null
    _max: Tbl_filmeMaxAggregateOutputType | null
  }

  export type Tbl_filmeAvgAggregateOutputType = {
    id: number | null
    id_classificacao: number | null
  }

  export type Tbl_filmeSumAggregateOutputType = {
    id: number | null
    id_classificacao: number | null
  }

  export type Tbl_filmeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_original: string | null
    data_lancamento: Date | null
    data_relancamento: Date | null
    duracao: string | null
    sinopse: string | null
    foto_capa: string | null
    id_classificacao: number | null
  }

  export type Tbl_filmeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_original: string | null
    data_lancamento: Date | null
    data_relancamento: Date | null
    duracao: string | null
    sinopse: string | null
    foto_capa: string | null
    id_classificacao: number | null
  }

  export type Tbl_filmeCountAggregateOutputType = {
    id: number
    nome: number
    nome_original: number
    data_lancamento: number
    data_relancamento: number
    duracao: number
    sinopse: number
    foto_capa: number
    id_classificacao: number
    _all: number
  }


  export type Tbl_filmeAvgAggregateInputType = {
    id?: true
    id_classificacao?: true
  }

  export type Tbl_filmeSumAggregateInputType = {
    id?: true
    id_classificacao?: true
  }

  export type Tbl_filmeMinAggregateInputType = {
    id?: true
    nome?: true
    nome_original?: true
    data_lancamento?: true
    data_relancamento?: true
    duracao?: true
    sinopse?: true
    foto_capa?: true
    id_classificacao?: true
  }

  export type Tbl_filmeMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_original?: true
    data_lancamento?: true
    data_relancamento?: true
    duracao?: true
    sinopse?: true
    foto_capa?: true
    id_classificacao?: true
  }

  export type Tbl_filmeCountAggregateInputType = {
    id?: true
    nome?: true
    nome_original?: true
    data_lancamento?: true
    data_relancamento?: true
    duracao?: true
    sinopse?: true
    foto_capa?: true
    id_classificacao?: true
    _all?: true
  }

  export type Tbl_filmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme to aggregate.
     */
    where?: tbl_filmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filmes to fetch.
     */
    orderBy?: tbl_filmeOrderByWithRelationInput | tbl_filmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_filmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_filmes
    **/
    _count?: true | Tbl_filmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_filmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_filmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_filmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_filmeMaxAggregateInputType
  }

  export type GetTbl_filmeAggregateType<T extends Tbl_filmeAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_filme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_filme[P]>
      : GetScalarType<T[P], AggregateTbl_filme[P]>
  }




  export type tbl_filmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filmeWhereInput
    orderBy?: tbl_filmeOrderByWithAggregationInput | tbl_filmeOrderByWithAggregationInput[]
    by: Tbl_filmeScalarFieldEnum[] | Tbl_filmeScalarFieldEnum
    having?: tbl_filmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_filmeCountAggregateInputType | true
    _avg?: Tbl_filmeAvgAggregateInputType
    _sum?: Tbl_filmeSumAggregateInputType
    _min?: Tbl_filmeMinAggregateInputType
    _max?: Tbl_filmeMaxAggregateInputType
  }

  export type Tbl_filmeGroupByOutputType = {
    id: number
    nome: string
    nome_original: string
    data_lancamento: Date
    data_relancamento: Date | null
    duracao: string
    sinopse: string
    foto_capa: string
    id_classificacao: number
    _count: Tbl_filmeCountAggregateOutputType | null
    _avg: Tbl_filmeAvgAggregateOutputType | null
    _sum: Tbl_filmeSumAggregateOutputType | null
    _min: Tbl_filmeMinAggregateOutputType | null
    _max: Tbl_filmeMaxAggregateOutputType | null
  }

  type GetTbl_filmeGroupByPayload<T extends tbl_filmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_filmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_filmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_filmeGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_filmeGroupByOutputType[P]>
        }
      >
    >


  export type tbl_filmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_original?: boolean
    data_lancamento?: boolean
    data_relancamento?: boolean
    duracao?: boolean
    sinopse?: boolean
    foto_capa?: boolean
    id_classificacao?: boolean
    classificacao?: boolean | tbl_classificacaoDefaultArgs<ExtArgs>
    generos?: boolean | tbl_filme$generosArgs<ExtArgs>
    diretores?: boolean | tbl_filme$diretoresArgs<ExtArgs>
    atores?: boolean | tbl_filme$atoresArgs<ExtArgs>
    _count?: boolean | Tbl_filmeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme"]>

  export type tbl_filmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_original?: boolean
    data_lancamento?: boolean
    data_relancamento?: boolean
    duracao?: boolean
    sinopse?: boolean
    foto_capa?: boolean
    id_classificacao?: boolean
    classificacao?: boolean | tbl_classificacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme"]>

  export type tbl_filmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_original?: boolean
    data_lancamento?: boolean
    data_relancamento?: boolean
    duracao?: boolean
    sinopse?: boolean
    foto_capa?: boolean
    id_classificacao?: boolean
    classificacao?: boolean | tbl_classificacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme"]>

  export type tbl_filmeSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_original?: boolean
    data_lancamento?: boolean
    data_relancamento?: boolean
    duracao?: boolean
    sinopse?: boolean
    foto_capa?: boolean
    id_classificacao?: boolean
  }

  export type tbl_filmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nome_original" | "data_lancamento" | "data_relancamento" | "duracao" | "sinopse" | "foto_capa" | "id_classificacao", ExtArgs["result"]["tbl_filme"]>
  export type tbl_filmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classificacao?: boolean | tbl_classificacaoDefaultArgs<ExtArgs>
    generos?: boolean | tbl_filme$generosArgs<ExtArgs>
    diretores?: boolean | tbl_filme$diretoresArgs<ExtArgs>
    atores?: boolean | tbl_filme$atoresArgs<ExtArgs>
    _count?: boolean | Tbl_filmeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_filmeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classificacao?: boolean | tbl_classificacaoDefaultArgs<ExtArgs>
  }
  export type tbl_filmeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classificacao?: boolean | tbl_classificacaoDefaultArgs<ExtArgs>
  }

  export type $tbl_filmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_filme"
    objects: {
      classificacao: Prisma.$tbl_classificacaoPayload<ExtArgs>
      generos: Prisma.$tbl_filme_generoPayload<ExtArgs>[]
      diretores: Prisma.$tbl_filme_diretorPayload<ExtArgs>[]
      atores: Prisma.$tbl_filme_atorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_original: string
      data_lancamento: Date
      data_relancamento: Date | null
      duracao: string
      sinopse: string
      foto_capa: string
      id_classificacao: number
    }, ExtArgs["result"]["tbl_filme"]>
    composites: {}
  }

  type tbl_filmeGetPayload<S extends boolean | null | undefined | tbl_filmeDefaultArgs> = $Result.GetResult<Prisma.$tbl_filmePayload, S>

  type tbl_filmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_filmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_filmeCountAggregateInputType | true
    }

  export interface tbl_filmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_filme'], meta: { name: 'tbl_filme' } }
    /**
     * Find zero or one Tbl_filme that matches the filter.
     * @param {tbl_filmeFindUniqueArgs} args - Arguments to find a Tbl_filme
     * @example
     * // Get one Tbl_filme
     * const tbl_filme = await prisma.tbl_filme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_filmeFindUniqueArgs>(args: SelectSubset<T, tbl_filmeFindUniqueArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_filme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_filmeFindUniqueOrThrowArgs} args - Arguments to find a Tbl_filme
     * @example
     * // Get one Tbl_filme
     * const tbl_filme = await prisma.tbl_filme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_filmeFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_filmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filmeFindFirstArgs} args - Arguments to find a Tbl_filme
     * @example
     * // Get one Tbl_filme
     * const tbl_filme = await prisma.tbl_filme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_filmeFindFirstArgs>(args?: SelectSubset<T, tbl_filmeFindFirstArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filmeFindFirstOrThrowArgs} args - Arguments to find a Tbl_filme
     * @example
     * // Get one Tbl_filme
     * const tbl_filme = await prisma.tbl_filme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_filmeFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_filmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_filmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_filmes
     * const tbl_filmes = await prisma.tbl_filme.findMany()
     * 
     * // Get first 10 Tbl_filmes
     * const tbl_filmes = await prisma.tbl_filme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_filmeWithIdOnly = await prisma.tbl_filme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_filmeFindManyArgs>(args?: SelectSubset<T, tbl_filmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_filme.
     * @param {tbl_filmeCreateArgs} args - Arguments to create a Tbl_filme.
     * @example
     * // Create one Tbl_filme
     * const Tbl_filme = await prisma.tbl_filme.create({
     *   data: {
     *     // ... data to create a Tbl_filme
     *   }
     * })
     * 
     */
    create<T extends tbl_filmeCreateArgs>(args: SelectSubset<T, tbl_filmeCreateArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_filmes.
     * @param {tbl_filmeCreateManyArgs} args - Arguments to create many Tbl_filmes.
     * @example
     * // Create many Tbl_filmes
     * const tbl_filme = await prisma.tbl_filme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_filmeCreateManyArgs>(args?: SelectSubset<T, tbl_filmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_filmes and returns the data saved in the database.
     * @param {tbl_filmeCreateManyAndReturnArgs} args - Arguments to create many Tbl_filmes.
     * @example
     * // Create many Tbl_filmes
     * const tbl_filme = await prisma.tbl_filme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_filmes and only return the `id`
     * const tbl_filmeWithIdOnly = await prisma.tbl_filme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_filmeCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_filmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_filme.
     * @param {tbl_filmeDeleteArgs} args - Arguments to delete one Tbl_filme.
     * @example
     * // Delete one Tbl_filme
     * const Tbl_filme = await prisma.tbl_filme.delete({
     *   where: {
     *     // ... filter to delete one Tbl_filme
     *   }
     * })
     * 
     */
    delete<T extends tbl_filmeDeleteArgs>(args: SelectSubset<T, tbl_filmeDeleteArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_filme.
     * @param {tbl_filmeUpdateArgs} args - Arguments to update one Tbl_filme.
     * @example
     * // Update one Tbl_filme
     * const tbl_filme = await prisma.tbl_filme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_filmeUpdateArgs>(args: SelectSubset<T, tbl_filmeUpdateArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_filmes.
     * @param {tbl_filmeDeleteManyArgs} args - Arguments to filter Tbl_filmes to delete.
     * @example
     * // Delete a few Tbl_filmes
     * const { count } = await prisma.tbl_filme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_filmeDeleteManyArgs>(args?: SelectSubset<T, tbl_filmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_filmes
     * const tbl_filme = await prisma.tbl_filme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_filmeUpdateManyArgs>(args: SelectSubset<T, tbl_filmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filmes and returns the data updated in the database.
     * @param {tbl_filmeUpdateManyAndReturnArgs} args - Arguments to update many Tbl_filmes.
     * @example
     * // Update many Tbl_filmes
     * const tbl_filme = await prisma.tbl_filme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_filmes and only return the `id`
     * const tbl_filmeWithIdOnly = await prisma.tbl_filme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_filmeUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_filmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_filme.
     * @param {tbl_filmeUpsertArgs} args - Arguments to update or create a Tbl_filme.
     * @example
     * // Update or create a Tbl_filme
     * const tbl_filme = await prisma.tbl_filme.upsert({
     *   create: {
     *     // ... data to create a Tbl_filme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_filme we want to update
     *   }
     * })
     */
    upsert<T extends tbl_filmeUpsertArgs>(args: SelectSubset<T, tbl_filmeUpsertArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filmeCountArgs} args - Arguments to filter Tbl_filmes to count.
     * @example
     * // Count the number of Tbl_filmes
     * const count = await prisma.tbl_filme.count({
     *   where: {
     *     // ... the filter for the Tbl_filmes we want to count
     *   }
     * })
    **/
    count<T extends tbl_filmeCountArgs>(
      args?: Subset<T, tbl_filmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_filmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_filmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_filmeAggregateArgs>(args: Subset<T, Tbl_filmeAggregateArgs>): Prisma.PrismaPromise<GetTbl_filmeAggregateType<T>>

    /**
     * Group by Tbl_filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filmeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_filmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_filmeGroupByArgs['orderBy'] }
        : { orderBy?: tbl_filmeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_filmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_filmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_filme model
   */
  readonly fields: tbl_filmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_filme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_filmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classificacao<T extends tbl_classificacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_classificacaoDefaultArgs<ExtArgs>>): Prisma__tbl_classificacaoClient<$Result.GetResult<Prisma.$tbl_classificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generos<T extends tbl_filme$generosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filme$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diretores<T extends tbl_filme$diretoresArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filme$diretoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atores<T extends tbl_filme$atoresArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filme$atoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_filme model
   */
  interface tbl_filmeFieldRefs {
    readonly id: FieldRef<"tbl_filme", 'Int'>
    readonly nome: FieldRef<"tbl_filme", 'String'>
    readonly nome_original: FieldRef<"tbl_filme", 'String'>
    readonly data_lancamento: FieldRef<"tbl_filme", 'DateTime'>
    readonly data_relancamento: FieldRef<"tbl_filme", 'DateTime'>
    readonly duracao: FieldRef<"tbl_filme", 'String'>
    readonly sinopse: FieldRef<"tbl_filme", 'String'>
    readonly foto_capa: FieldRef<"tbl_filme", 'String'>
    readonly id_classificacao: FieldRef<"tbl_filme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_filme findUnique
   */
  export type tbl_filmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme to fetch.
     */
    where: tbl_filmeWhereUniqueInput
  }

  /**
   * tbl_filme findUniqueOrThrow
   */
  export type tbl_filmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme to fetch.
     */
    where: tbl_filmeWhereUniqueInput
  }

  /**
   * tbl_filme findFirst
   */
  export type tbl_filmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme to fetch.
     */
    where?: tbl_filmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filmes to fetch.
     */
    orderBy?: tbl_filmeOrderByWithRelationInput | tbl_filmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filmes.
     */
    cursor?: tbl_filmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filmes.
     */
    distinct?: Tbl_filmeScalarFieldEnum | Tbl_filmeScalarFieldEnum[]
  }

  /**
   * tbl_filme findFirstOrThrow
   */
  export type tbl_filmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme to fetch.
     */
    where?: tbl_filmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filmes to fetch.
     */
    orderBy?: tbl_filmeOrderByWithRelationInput | tbl_filmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filmes.
     */
    cursor?: tbl_filmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filmes.
     */
    distinct?: Tbl_filmeScalarFieldEnum | Tbl_filmeScalarFieldEnum[]
  }

  /**
   * tbl_filme findMany
   */
  export type tbl_filmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filmes to fetch.
     */
    where?: tbl_filmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filmes to fetch.
     */
    orderBy?: tbl_filmeOrderByWithRelationInput | tbl_filmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_filmes.
     */
    cursor?: tbl_filmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filmes.
     */
    skip?: number
    distinct?: Tbl_filmeScalarFieldEnum | Tbl_filmeScalarFieldEnum[]
  }

  /**
   * tbl_filme create
   */
  export type tbl_filmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_filme.
     */
    data: XOR<tbl_filmeCreateInput, tbl_filmeUncheckedCreateInput>
  }

  /**
   * tbl_filme createMany
   */
  export type tbl_filmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_filmes.
     */
    data: tbl_filmeCreateManyInput | tbl_filmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_filme createManyAndReturn
   */
  export type tbl_filmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_filmes.
     */
    data: tbl_filmeCreateManyInput | tbl_filmeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme update
   */
  export type tbl_filmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_filme.
     */
    data: XOR<tbl_filmeUpdateInput, tbl_filmeUncheckedUpdateInput>
    /**
     * Choose, which tbl_filme to update.
     */
    where: tbl_filmeWhereUniqueInput
  }

  /**
   * tbl_filme updateMany
   */
  export type tbl_filmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_filmes.
     */
    data: XOR<tbl_filmeUpdateManyMutationInput, tbl_filmeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filmes to update
     */
    where?: tbl_filmeWhereInput
    /**
     * Limit how many tbl_filmes to update.
     */
    limit?: number
  }

  /**
   * tbl_filme updateManyAndReturn
   */
  export type tbl_filmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * The data used to update tbl_filmes.
     */
    data: XOR<tbl_filmeUpdateManyMutationInput, tbl_filmeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filmes to update
     */
    where?: tbl_filmeWhereInput
    /**
     * Limit how many tbl_filmes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme upsert
   */
  export type tbl_filmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_filme to update in case it exists.
     */
    where: tbl_filmeWhereUniqueInput
    /**
     * In case the tbl_filme found by the `where` argument doesn't exist, create a new tbl_filme with this data.
     */
    create: XOR<tbl_filmeCreateInput, tbl_filmeUncheckedCreateInput>
    /**
     * In case the tbl_filme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_filmeUpdateInput, tbl_filmeUncheckedUpdateInput>
  }

  /**
   * tbl_filme delete
   */
  export type tbl_filmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
    /**
     * Filter which tbl_filme to delete.
     */
    where: tbl_filmeWhereUniqueInput
  }

  /**
   * tbl_filme deleteMany
   */
  export type tbl_filmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filmes to delete
     */
    where?: tbl_filmeWhereInput
    /**
     * Limit how many tbl_filmes to delete.
     */
    limit?: number
  }

  /**
   * tbl_filme.generos
   */
  export type tbl_filme$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_genero
     */
    select?: tbl_filme_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_genero
     */
    omit?: tbl_filme_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_generoInclude<ExtArgs> | null
    where?: tbl_filme_generoWhereInput
    orderBy?: tbl_filme_generoOrderByWithRelationInput | tbl_filme_generoOrderByWithRelationInput[]
    cursor?: tbl_filme_generoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filme_generoScalarFieldEnum | Tbl_filme_generoScalarFieldEnum[]
  }

  /**
   * tbl_filme.diretores
   */
  export type tbl_filme$diretoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    where?: tbl_filme_diretorWhereInput
    orderBy?: tbl_filme_diretorOrderByWithRelationInput | tbl_filme_diretorOrderByWithRelationInput[]
    cursor?: tbl_filme_diretorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filme_diretorScalarFieldEnum | Tbl_filme_diretorScalarFieldEnum[]
  }

  /**
   * tbl_filme.atores
   */
  export type tbl_filme$atoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    where?: tbl_filme_atorWhereInput
    orderBy?: tbl_filme_atorOrderByWithRelationInput | tbl_filme_atorOrderByWithRelationInput[]
    cursor?: tbl_filme_atorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filme_atorScalarFieldEnum | Tbl_filme_atorScalarFieldEnum[]
  }

  /**
   * tbl_filme without action
   */
  export type tbl_filmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme
     */
    select?: tbl_filmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme
     */
    omit?: tbl_filmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filmeInclude<ExtArgs> | null
  }


  /**
   * Model tbl_diretor
   */

  export type AggregateTbl_diretor = {
    _count: Tbl_diretorCountAggregateOutputType | null
    _avg: Tbl_diretorAvgAggregateOutputType | null
    _sum: Tbl_diretorSumAggregateOutputType | null
    _min: Tbl_diretorMinAggregateOutputType | null
    _max: Tbl_diretorMaxAggregateOutputType | null
  }

  export type Tbl_diretorAvgAggregateOutputType = {
    id: number | null
    id_sexo: number | null
  }

  export type Tbl_diretorSumAggregateOutputType = {
    id: number | null
    id_sexo: number | null
  }

  export type Tbl_diretorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_artistico: string | null
    data_nascimento: Date | null
    data_falecimento: Date | null
    biografia: string | null
    foto: string | null
    id_sexo: number | null
  }

  export type Tbl_diretorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_artistico: string | null
    data_nascimento: Date | null
    data_falecimento: Date | null
    biografia: string | null
    foto: string | null
    id_sexo: number | null
  }

  export type Tbl_diretorCountAggregateOutputType = {
    id: number
    nome: number
    nome_artistico: number
    data_nascimento: number
    data_falecimento: number
    biografia: number
    foto: number
    id_sexo: number
    _all: number
  }


  export type Tbl_diretorAvgAggregateInputType = {
    id?: true
    id_sexo?: true
  }

  export type Tbl_diretorSumAggregateInputType = {
    id?: true
    id_sexo?: true
  }

  export type Tbl_diretorMinAggregateInputType = {
    id?: true
    nome?: true
    nome_artistico?: true
    data_nascimento?: true
    data_falecimento?: true
    biografia?: true
    foto?: true
    id_sexo?: true
  }

  export type Tbl_diretorMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_artistico?: true
    data_nascimento?: true
    data_falecimento?: true
    biografia?: true
    foto?: true
    id_sexo?: true
  }

  export type Tbl_diretorCountAggregateInputType = {
    id?: true
    nome?: true
    nome_artistico?: true
    data_nascimento?: true
    data_falecimento?: true
    biografia?: true
    foto?: true
    id_sexo?: true
    _all?: true
  }

  export type Tbl_diretorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_diretor to aggregate.
     */
    where?: tbl_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretors to fetch.
     */
    orderBy?: tbl_diretorOrderByWithRelationInput | tbl_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_diretors
    **/
    _count?: true | Tbl_diretorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_diretorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_diretorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_diretorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_diretorMaxAggregateInputType
  }

  export type GetTbl_diretorAggregateType<T extends Tbl_diretorAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_diretor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_diretor[P]>
      : GetScalarType<T[P], AggregateTbl_diretor[P]>
  }




  export type tbl_diretorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_diretorWhereInput
    orderBy?: tbl_diretorOrderByWithAggregationInput | tbl_diretorOrderByWithAggregationInput[]
    by: Tbl_diretorScalarFieldEnum[] | Tbl_diretorScalarFieldEnum
    having?: tbl_diretorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_diretorCountAggregateInputType | true
    _avg?: Tbl_diretorAvgAggregateInputType
    _sum?: Tbl_diretorSumAggregateInputType
    _min?: Tbl_diretorMinAggregateInputType
    _max?: Tbl_diretorMaxAggregateInputType
  }

  export type Tbl_diretorGroupByOutputType = {
    id: number
    nome: string
    nome_artistico: string
    data_nascimento: Date
    data_falecimento: Date | null
    biografia: string
    foto: string
    id_sexo: number
    _count: Tbl_diretorCountAggregateOutputType | null
    _avg: Tbl_diretorAvgAggregateOutputType | null
    _sum: Tbl_diretorSumAggregateOutputType | null
    _min: Tbl_diretorMinAggregateOutputType | null
    _max: Tbl_diretorMaxAggregateOutputType | null
  }

  type GetTbl_diretorGroupByPayload<T extends tbl_diretorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_diretorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_diretorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_diretorGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_diretorGroupByOutputType[P]>
        }
      >
    >


  export type tbl_diretorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
    nacionalidades?: boolean | tbl_diretor$nacionalidadesArgs<ExtArgs>
    filmes?: boolean | tbl_diretor$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_diretorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_diretor"]>

  export type tbl_diretorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_diretor"]>

  export type tbl_diretorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_diretor"]>

  export type tbl_diretorSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
  }

  export type tbl_diretorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nome_artistico" | "data_nascimento" | "data_falecimento" | "biografia" | "foto" | "id_sexo", ExtArgs["result"]["tbl_diretor"]>
  export type tbl_diretorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
    nacionalidades?: boolean | tbl_diretor$nacionalidadesArgs<ExtArgs>
    filmes?: boolean | tbl_diretor$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_diretorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_diretorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }
  export type tbl_diretorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }

  export type $tbl_diretorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_diretor"
    objects: {
      sexo: Prisma.$tbl_sexoPayload<ExtArgs>
      nacionalidades: Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>[]
      filmes: Prisma.$tbl_filme_diretorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_artistico: string
      data_nascimento: Date
      data_falecimento: Date | null
      biografia: string
      foto: string
      id_sexo: number
    }, ExtArgs["result"]["tbl_diretor"]>
    composites: {}
  }

  type tbl_diretorGetPayload<S extends boolean | null | undefined | tbl_diretorDefaultArgs> = $Result.GetResult<Prisma.$tbl_diretorPayload, S>

  type tbl_diretorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_diretorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_diretorCountAggregateInputType | true
    }

  export interface tbl_diretorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_diretor'], meta: { name: 'tbl_diretor' } }
    /**
     * Find zero or one Tbl_diretor that matches the filter.
     * @param {tbl_diretorFindUniqueArgs} args - Arguments to find a Tbl_diretor
     * @example
     * // Get one Tbl_diretor
     * const tbl_diretor = await prisma.tbl_diretor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_diretorFindUniqueArgs>(args: SelectSubset<T, tbl_diretorFindUniqueArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_diretor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_diretorFindUniqueOrThrowArgs} args - Arguments to find a Tbl_diretor
     * @example
     * // Get one Tbl_diretor
     * const tbl_diretor = await prisma.tbl_diretor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_diretorFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_diretorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_diretor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretorFindFirstArgs} args - Arguments to find a Tbl_diretor
     * @example
     * // Get one Tbl_diretor
     * const tbl_diretor = await prisma.tbl_diretor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_diretorFindFirstArgs>(args?: SelectSubset<T, tbl_diretorFindFirstArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_diretor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretorFindFirstOrThrowArgs} args - Arguments to find a Tbl_diretor
     * @example
     * // Get one Tbl_diretor
     * const tbl_diretor = await prisma.tbl_diretor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_diretorFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_diretorFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_diretors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_diretors
     * const tbl_diretors = await prisma.tbl_diretor.findMany()
     * 
     * // Get first 10 Tbl_diretors
     * const tbl_diretors = await prisma.tbl_diretor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_diretorWithIdOnly = await prisma.tbl_diretor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_diretorFindManyArgs>(args?: SelectSubset<T, tbl_diretorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_diretor.
     * @param {tbl_diretorCreateArgs} args - Arguments to create a Tbl_diretor.
     * @example
     * // Create one Tbl_diretor
     * const Tbl_diretor = await prisma.tbl_diretor.create({
     *   data: {
     *     // ... data to create a Tbl_diretor
     *   }
     * })
     * 
     */
    create<T extends tbl_diretorCreateArgs>(args: SelectSubset<T, tbl_diretorCreateArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_diretors.
     * @param {tbl_diretorCreateManyArgs} args - Arguments to create many Tbl_diretors.
     * @example
     * // Create many Tbl_diretors
     * const tbl_diretor = await prisma.tbl_diretor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_diretorCreateManyArgs>(args?: SelectSubset<T, tbl_diretorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_diretors and returns the data saved in the database.
     * @param {tbl_diretorCreateManyAndReturnArgs} args - Arguments to create many Tbl_diretors.
     * @example
     * // Create many Tbl_diretors
     * const tbl_diretor = await prisma.tbl_diretor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_diretors and only return the `id`
     * const tbl_diretorWithIdOnly = await prisma.tbl_diretor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_diretorCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_diretorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_diretor.
     * @param {tbl_diretorDeleteArgs} args - Arguments to delete one Tbl_diretor.
     * @example
     * // Delete one Tbl_diretor
     * const Tbl_diretor = await prisma.tbl_diretor.delete({
     *   where: {
     *     // ... filter to delete one Tbl_diretor
     *   }
     * })
     * 
     */
    delete<T extends tbl_diretorDeleteArgs>(args: SelectSubset<T, tbl_diretorDeleteArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_diretor.
     * @param {tbl_diretorUpdateArgs} args - Arguments to update one Tbl_diretor.
     * @example
     * // Update one Tbl_diretor
     * const tbl_diretor = await prisma.tbl_diretor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_diretorUpdateArgs>(args: SelectSubset<T, tbl_diretorUpdateArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_diretors.
     * @param {tbl_diretorDeleteManyArgs} args - Arguments to filter Tbl_diretors to delete.
     * @example
     * // Delete a few Tbl_diretors
     * const { count } = await prisma.tbl_diretor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_diretorDeleteManyArgs>(args?: SelectSubset<T, tbl_diretorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_diretors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_diretors
     * const tbl_diretor = await prisma.tbl_diretor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_diretorUpdateManyArgs>(args: SelectSubset<T, tbl_diretorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_diretors and returns the data updated in the database.
     * @param {tbl_diretorUpdateManyAndReturnArgs} args - Arguments to update many Tbl_diretors.
     * @example
     * // Update many Tbl_diretors
     * const tbl_diretor = await prisma.tbl_diretor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_diretors and only return the `id`
     * const tbl_diretorWithIdOnly = await prisma.tbl_diretor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_diretorUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_diretorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_diretor.
     * @param {tbl_diretorUpsertArgs} args - Arguments to update or create a Tbl_diretor.
     * @example
     * // Update or create a Tbl_diretor
     * const tbl_diretor = await prisma.tbl_diretor.upsert({
     *   create: {
     *     // ... data to create a Tbl_diretor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_diretor we want to update
     *   }
     * })
     */
    upsert<T extends tbl_diretorUpsertArgs>(args: SelectSubset<T, tbl_diretorUpsertArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_diretors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretorCountArgs} args - Arguments to filter Tbl_diretors to count.
     * @example
     * // Count the number of Tbl_diretors
     * const count = await prisma.tbl_diretor.count({
     *   where: {
     *     // ... the filter for the Tbl_diretors we want to count
     *   }
     * })
    **/
    count<T extends tbl_diretorCountArgs>(
      args?: Subset<T, tbl_diretorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_diretorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_diretor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_diretorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_diretorAggregateArgs>(args: Subset<T, Tbl_diretorAggregateArgs>): Prisma.PrismaPromise<GetTbl_diretorAggregateType<T>>

    /**
     * Group by Tbl_diretor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_diretorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_diretorGroupByArgs['orderBy'] }
        : { orderBy?: tbl_diretorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_diretorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_diretorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_diretor model
   */
  readonly fields: tbl_diretorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_diretor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_diretorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sexo<T extends tbl_sexoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_sexoDefaultArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nacionalidades<T extends tbl_diretor$nacionalidadesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_diretor$nacionalidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filmes<T extends tbl_diretor$filmesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_diretor$filmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_diretor model
   */
  interface tbl_diretorFieldRefs {
    readonly id: FieldRef<"tbl_diretor", 'Int'>
    readonly nome: FieldRef<"tbl_diretor", 'String'>
    readonly nome_artistico: FieldRef<"tbl_diretor", 'String'>
    readonly data_nascimento: FieldRef<"tbl_diretor", 'DateTime'>
    readonly data_falecimento: FieldRef<"tbl_diretor", 'DateTime'>
    readonly biografia: FieldRef<"tbl_diretor", 'String'>
    readonly foto: FieldRef<"tbl_diretor", 'String'>
    readonly id_sexo: FieldRef<"tbl_diretor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_diretor findUnique
   */
  export type tbl_diretorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor to fetch.
     */
    where: tbl_diretorWhereUniqueInput
  }

  /**
   * tbl_diretor findUniqueOrThrow
   */
  export type tbl_diretorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor to fetch.
     */
    where: tbl_diretorWhereUniqueInput
  }

  /**
   * tbl_diretor findFirst
   */
  export type tbl_diretorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor to fetch.
     */
    where?: tbl_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretors to fetch.
     */
    orderBy?: tbl_diretorOrderByWithRelationInput | tbl_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_diretors.
     */
    cursor?: tbl_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_diretors.
     */
    distinct?: Tbl_diretorScalarFieldEnum | Tbl_diretorScalarFieldEnum[]
  }

  /**
   * tbl_diretor findFirstOrThrow
   */
  export type tbl_diretorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor to fetch.
     */
    where?: tbl_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretors to fetch.
     */
    orderBy?: tbl_diretorOrderByWithRelationInput | tbl_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_diretors.
     */
    cursor?: tbl_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_diretors.
     */
    distinct?: Tbl_diretorScalarFieldEnum | Tbl_diretorScalarFieldEnum[]
  }

  /**
   * tbl_diretor findMany
   */
  export type tbl_diretorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretors to fetch.
     */
    where?: tbl_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretors to fetch.
     */
    orderBy?: tbl_diretorOrderByWithRelationInput | tbl_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_diretors.
     */
    cursor?: tbl_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretors.
     */
    skip?: number
    distinct?: Tbl_diretorScalarFieldEnum | Tbl_diretorScalarFieldEnum[]
  }

  /**
   * tbl_diretor create
   */
  export type tbl_diretorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_diretor.
     */
    data: XOR<tbl_diretorCreateInput, tbl_diretorUncheckedCreateInput>
  }

  /**
   * tbl_diretor createMany
   */
  export type tbl_diretorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_diretors.
     */
    data: tbl_diretorCreateManyInput | tbl_diretorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_diretor createManyAndReturn
   */
  export type tbl_diretorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_diretors.
     */
    data: tbl_diretorCreateManyInput | tbl_diretorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_diretor update
   */
  export type tbl_diretorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_diretor.
     */
    data: XOR<tbl_diretorUpdateInput, tbl_diretorUncheckedUpdateInput>
    /**
     * Choose, which tbl_diretor to update.
     */
    where: tbl_diretorWhereUniqueInput
  }

  /**
   * tbl_diretor updateMany
   */
  export type tbl_diretorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_diretors.
     */
    data: XOR<tbl_diretorUpdateManyMutationInput, tbl_diretorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_diretors to update
     */
    where?: tbl_diretorWhereInput
    /**
     * Limit how many tbl_diretors to update.
     */
    limit?: number
  }

  /**
   * tbl_diretor updateManyAndReturn
   */
  export type tbl_diretorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * The data used to update tbl_diretors.
     */
    data: XOR<tbl_diretorUpdateManyMutationInput, tbl_diretorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_diretors to update
     */
    where?: tbl_diretorWhereInput
    /**
     * Limit how many tbl_diretors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_diretor upsert
   */
  export type tbl_diretorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_diretor to update in case it exists.
     */
    where: tbl_diretorWhereUniqueInput
    /**
     * In case the tbl_diretor found by the `where` argument doesn't exist, create a new tbl_diretor with this data.
     */
    create: XOR<tbl_diretorCreateInput, tbl_diretorUncheckedCreateInput>
    /**
     * In case the tbl_diretor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_diretorUpdateInput, tbl_diretorUncheckedUpdateInput>
  }

  /**
   * tbl_diretor delete
   */
  export type tbl_diretorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    /**
     * Filter which tbl_diretor to delete.
     */
    where: tbl_diretorWhereUniqueInput
  }

  /**
   * tbl_diretor deleteMany
   */
  export type tbl_diretorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_diretors to delete
     */
    where?: tbl_diretorWhereInput
    /**
     * Limit how many tbl_diretors to delete.
     */
    limit?: number
  }

  /**
   * tbl_diretor.nacionalidades
   */
  export type tbl_diretor$nacionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    where?: tbl_diretor_nacionalidadeWhereInput
    orderBy?: tbl_diretor_nacionalidadeOrderByWithRelationInput | tbl_diretor_nacionalidadeOrderByWithRelationInput[]
    cursor?: tbl_diretor_nacionalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_diretor_nacionalidadeScalarFieldEnum | Tbl_diretor_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_diretor.filmes
   */
  export type tbl_diretor$filmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    where?: tbl_filme_diretorWhereInput
    orderBy?: tbl_filme_diretorOrderByWithRelationInput | tbl_filme_diretorOrderByWithRelationInput[]
    cursor?: tbl_filme_diretorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filme_diretorScalarFieldEnum | Tbl_filme_diretorScalarFieldEnum[]
  }

  /**
   * tbl_diretor without action
   */
  export type tbl_diretorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
  }


  /**
   * Model tbl_filme_diretor
   */

  export type AggregateTbl_filme_diretor = {
    _count: Tbl_filme_diretorCountAggregateOutputType | null
    _avg: Tbl_filme_diretorAvgAggregateOutputType | null
    _sum: Tbl_filme_diretorSumAggregateOutputType | null
    _min: Tbl_filme_diretorMinAggregateOutputType | null
    _max: Tbl_filme_diretorMaxAggregateOutputType | null
  }

  export type Tbl_filme_diretorAvgAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_diretor: number | null
  }

  export type Tbl_filme_diretorSumAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_diretor: number | null
  }

  export type Tbl_filme_diretorMinAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_diretor: number | null
  }

  export type Tbl_filme_diretorMaxAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_diretor: number | null
  }

  export type Tbl_filme_diretorCountAggregateOutputType = {
    id: number
    id_filme: number
    id_diretor: number
    _all: number
  }


  export type Tbl_filme_diretorAvgAggregateInputType = {
    id?: true
    id_filme?: true
    id_diretor?: true
  }

  export type Tbl_filme_diretorSumAggregateInputType = {
    id?: true
    id_filme?: true
    id_diretor?: true
  }

  export type Tbl_filme_diretorMinAggregateInputType = {
    id?: true
    id_filme?: true
    id_diretor?: true
  }

  export type Tbl_filme_diretorMaxAggregateInputType = {
    id?: true
    id_filme?: true
    id_diretor?: true
  }

  export type Tbl_filme_diretorCountAggregateInputType = {
    id?: true
    id_filme?: true
    id_diretor?: true
    _all?: true
  }

  export type Tbl_filme_diretorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme_diretor to aggregate.
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_diretors to fetch.
     */
    orderBy?: tbl_filme_diretorOrderByWithRelationInput | tbl_filme_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_filme_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_diretors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_filme_diretors
    **/
    _count?: true | Tbl_filme_diretorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_filme_diretorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_filme_diretorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_filme_diretorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_filme_diretorMaxAggregateInputType
  }

  export type GetTbl_filme_diretorAggregateType<T extends Tbl_filme_diretorAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_filme_diretor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_filme_diretor[P]>
      : GetScalarType<T[P], AggregateTbl_filme_diretor[P]>
  }




  export type tbl_filme_diretorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_diretorWhereInput
    orderBy?: tbl_filme_diretorOrderByWithAggregationInput | tbl_filme_diretorOrderByWithAggregationInput[]
    by: Tbl_filme_diretorScalarFieldEnum[] | Tbl_filme_diretorScalarFieldEnum
    having?: tbl_filme_diretorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_filme_diretorCountAggregateInputType | true
    _avg?: Tbl_filme_diretorAvgAggregateInputType
    _sum?: Tbl_filme_diretorSumAggregateInputType
    _min?: Tbl_filme_diretorMinAggregateInputType
    _max?: Tbl_filme_diretorMaxAggregateInputType
  }

  export type Tbl_filme_diretorGroupByOutputType = {
    id: number
    id_filme: number
    id_diretor: number
    _count: Tbl_filme_diretorCountAggregateOutputType | null
    _avg: Tbl_filme_diretorAvgAggregateOutputType | null
    _sum: Tbl_filme_diretorSumAggregateOutputType | null
    _min: Tbl_filme_diretorMinAggregateOutputType | null
    _max: Tbl_filme_diretorMaxAggregateOutputType | null
  }

  type GetTbl_filme_diretorGroupByPayload<T extends tbl_filme_diretorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_filme_diretorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_filme_diretorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_filme_diretorGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_filme_diretorGroupByOutputType[P]>
        }
      >
    >


  export type tbl_filme_diretorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_diretor?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_diretor"]>

  export type tbl_filme_diretorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_diretor?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_diretor"]>

  export type tbl_filme_diretorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_diretor?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_diretor"]>

  export type tbl_filme_diretorSelectScalar = {
    id?: boolean
    id_filme?: boolean
    id_diretor?: boolean
  }

  export type tbl_filme_diretorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_filme" | "id_diretor", ExtArgs["result"]["tbl_filme_diretor"]>
  export type tbl_filme_diretorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
  }
  export type tbl_filme_diretorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
  }
  export type tbl_filme_diretorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
  }

  export type $tbl_filme_diretorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_filme_diretor"
    objects: {
      filme: Prisma.$tbl_filmePayload<ExtArgs>
      diretor: Prisma.$tbl_diretorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_filme: number
      id_diretor: number
    }, ExtArgs["result"]["tbl_filme_diretor"]>
    composites: {}
  }

  type tbl_filme_diretorGetPayload<S extends boolean | null | undefined | tbl_filme_diretorDefaultArgs> = $Result.GetResult<Prisma.$tbl_filme_diretorPayload, S>

  type tbl_filme_diretorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_filme_diretorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_filme_diretorCountAggregateInputType | true
    }

  export interface tbl_filme_diretorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_filme_diretor'], meta: { name: 'tbl_filme_diretor' } }
    /**
     * Find zero or one Tbl_filme_diretor that matches the filter.
     * @param {tbl_filme_diretorFindUniqueArgs} args - Arguments to find a Tbl_filme_diretor
     * @example
     * // Get one Tbl_filme_diretor
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_filme_diretorFindUniqueArgs>(args: SelectSubset<T, tbl_filme_diretorFindUniqueArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_filme_diretor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_filme_diretorFindUniqueOrThrowArgs} args - Arguments to find a Tbl_filme_diretor
     * @example
     * // Get one Tbl_filme_diretor
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_filme_diretorFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_filme_diretorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme_diretor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_diretorFindFirstArgs} args - Arguments to find a Tbl_filme_diretor
     * @example
     * // Get one Tbl_filme_diretor
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_filme_diretorFindFirstArgs>(args?: SelectSubset<T, tbl_filme_diretorFindFirstArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme_diretor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_diretorFindFirstOrThrowArgs} args - Arguments to find a Tbl_filme_diretor
     * @example
     * // Get one Tbl_filme_diretor
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_filme_diretorFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_filme_diretorFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_filme_diretors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_diretorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_filme_diretors
     * const tbl_filme_diretors = await prisma.tbl_filme_diretor.findMany()
     * 
     * // Get first 10 Tbl_filme_diretors
     * const tbl_filme_diretors = await prisma.tbl_filme_diretor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_filme_diretorWithIdOnly = await prisma.tbl_filme_diretor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_filme_diretorFindManyArgs>(args?: SelectSubset<T, tbl_filme_diretorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_filme_diretor.
     * @param {tbl_filme_diretorCreateArgs} args - Arguments to create a Tbl_filme_diretor.
     * @example
     * // Create one Tbl_filme_diretor
     * const Tbl_filme_diretor = await prisma.tbl_filme_diretor.create({
     *   data: {
     *     // ... data to create a Tbl_filme_diretor
     *   }
     * })
     * 
     */
    create<T extends tbl_filme_diretorCreateArgs>(args: SelectSubset<T, tbl_filme_diretorCreateArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_filme_diretors.
     * @param {tbl_filme_diretorCreateManyArgs} args - Arguments to create many Tbl_filme_diretors.
     * @example
     * // Create many Tbl_filme_diretors
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_filme_diretorCreateManyArgs>(args?: SelectSubset<T, tbl_filme_diretorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_filme_diretors and returns the data saved in the database.
     * @param {tbl_filme_diretorCreateManyAndReturnArgs} args - Arguments to create many Tbl_filme_diretors.
     * @example
     * // Create many Tbl_filme_diretors
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_filme_diretors and only return the `id`
     * const tbl_filme_diretorWithIdOnly = await prisma.tbl_filme_diretor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_filme_diretorCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_filme_diretorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_filme_diretor.
     * @param {tbl_filme_diretorDeleteArgs} args - Arguments to delete one Tbl_filme_diretor.
     * @example
     * // Delete one Tbl_filme_diretor
     * const Tbl_filme_diretor = await prisma.tbl_filme_diretor.delete({
     *   where: {
     *     // ... filter to delete one Tbl_filme_diretor
     *   }
     * })
     * 
     */
    delete<T extends tbl_filme_diretorDeleteArgs>(args: SelectSubset<T, tbl_filme_diretorDeleteArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_filme_diretor.
     * @param {tbl_filme_diretorUpdateArgs} args - Arguments to update one Tbl_filme_diretor.
     * @example
     * // Update one Tbl_filme_diretor
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_filme_diretorUpdateArgs>(args: SelectSubset<T, tbl_filme_diretorUpdateArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_filme_diretors.
     * @param {tbl_filme_diretorDeleteManyArgs} args - Arguments to filter Tbl_filme_diretors to delete.
     * @example
     * // Delete a few Tbl_filme_diretors
     * const { count } = await prisma.tbl_filme_diretor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_filme_diretorDeleteManyArgs>(args?: SelectSubset<T, tbl_filme_diretorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filme_diretors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_diretorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_filme_diretors
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_filme_diretorUpdateManyArgs>(args: SelectSubset<T, tbl_filme_diretorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filme_diretors and returns the data updated in the database.
     * @param {tbl_filme_diretorUpdateManyAndReturnArgs} args - Arguments to update many Tbl_filme_diretors.
     * @example
     * // Update many Tbl_filme_diretors
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_filme_diretors and only return the `id`
     * const tbl_filme_diretorWithIdOnly = await prisma.tbl_filme_diretor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_filme_diretorUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_filme_diretorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_filme_diretor.
     * @param {tbl_filme_diretorUpsertArgs} args - Arguments to update or create a Tbl_filme_diretor.
     * @example
     * // Update or create a Tbl_filme_diretor
     * const tbl_filme_diretor = await prisma.tbl_filme_diretor.upsert({
     *   create: {
     *     // ... data to create a Tbl_filme_diretor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_filme_diretor we want to update
     *   }
     * })
     */
    upsert<T extends tbl_filme_diretorUpsertArgs>(args: SelectSubset<T, tbl_filme_diretorUpsertArgs<ExtArgs>>): Prisma__tbl_filme_diretorClient<$Result.GetResult<Prisma.$tbl_filme_diretorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_filme_diretors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_diretorCountArgs} args - Arguments to filter Tbl_filme_diretors to count.
     * @example
     * // Count the number of Tbl_filme_diretors
     * const count = await prisma.tbl_filme_diretor.count({
     *   where: {
     *     // ... the filter for the Tbl_filme_diretors we want to count
     *   }
     * })
    **/
    count<T extends tbl_filme_diretorCountArgs>(
      args?: Subset<T, tbl_filme_diretorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_filme_diretorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_filme_diretor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_filme_diretorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_filme_diretorAggregateArgs>(args: Subset<T, Tbl_filme_diretorAggregateArgs>): Prisma.PrismaPromise<GetTbl_filme_diretorAggregateType<T>>

    /**
     * Group by Tbl_filme_diretor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_diretorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_filme_diretorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_filme_diretorGroupByArgs['orderBy'] }
        : { orderBy?: tbl_filme_diretorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_filme_diretorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_filme_diretorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_filme_diretor model
   */
  readonly fields: tbl_filme_diretorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_filme_diretor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_filme_diretorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filme<T extends tbl_filmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filmeDefaultArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diretor<T extends tbl_diretorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_diretorDefaultArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_filme_diretor model
   */
  interface tbl_filme_diretorFieldRefs {
    readonly id: FieldRef<"tbl_filme_diretor", 'Int'>
    readonly id_filme: FieldRef<"tbl_filme_diretor", 'Int'>
    readonly id_diretor: FieldRef<"tbl_filme_diretor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_filme_diretor findUnique
   */
  export type tbl_filme_diretorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_diretor to fetch.
     */
    where: tbl_filme_diretorWhereUniqueInput
  }

  /**
   * tbl_filme_diretor findUniqueOrThrow
   */
  export type tbl_filme_diretorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_diretor to fetch.
     */
    where: tbl_filme_diretorWhereUniqueInput
  }

  /**
   * tbl_filme_diretor findFirst
   */
  export type tbl_filme_diretorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_diretor to fetch.
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_diretors to fetch.
     */
    orderBy?: tbl_filme_diretorOrderByWithRelationInput | tbl_filme_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filme_diretors.
     */
    cursor?: tbl_filme_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_diretors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filme_diretors.
     */
    distinct?: Tbl_filme_diretorScalarFieldEnum | Tbl_filme_diretorScalarFieldEnum[]
  }

  /**
   * tbl_filme_diretor findFirstOrThrow
   */
  export type tbl_filme_diretorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_diretor to fetch.
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_diretors to fetch.
     */
    orderBy?: tbl_filme_diretorOrderByWithRelationInput | tbl_filme_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filme_diretors.
     */
    cursor?: tbl_filme_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_diretors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filme_diretors.
     */
    distinct?: Tbl_filme_diretorScalarFieldEnum | Tbl_filme_diretorScalarFieldEnum[]
  }

  /**
   * tbl_filme_diretor findMany
   */
  export type tbl_filme_diretorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_diretors to fetch.
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_diretors to fetch.
     */
    orderBy?: tbl_filme_diretorOrderByWithRelationInput | tbl_filme_diretorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_filme_diretors.
     */
    cursor?: tbl_filme_diretorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_diretors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_diretors.
     */
    skip?: number
    distinct?: Tbl_filme_diretorScalarFieldEnum | Tbl_filme_diretorScalarFieldEnum[]
  }

  /**
   * tbl_filme_diretor create
   */
  export type tbl_filme_diretorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_filme_diretor.
     */
    data: XOR<tbl_filme_diretorCreateInput, tbl_filme_diretorUncheckedCreateInput>
  }

  /**
   * tbl_filme_diretor createMany
   */
  export type tbl_filme_diretorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_filme_diretors.
     */
    data: tbl_filme_diretorCreateManyInput | tbl_filme_diretorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_filme_diretor createManyAndReturn
   */
  export type tbl_filme_diretorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_filme_diretors.
     */
    data: tbl_filme_diretorCreateManyInput | tbl_filme_diretorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme_diretor update
   */
  export type tbl_filme_diretorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_filme_diretor.
     */
    data: XOR<tbl_filme_diretorUpdateInput, tbl_filme_diretorUncheckedUpdateInput>
    /**
     * Choose, which tbl_filme_diretor to update.
     */
    where: tbl_filme_diretorWhereUniqueInput
  }

  /**
   * tbl_filme_diretor updateMany
   */
  export type tbl_filme_diretorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_filme_diretors.
     */
    data: XOR<tbl_filme_diretorUpdateManyMutationInput, tbl_filme_diretorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filme_diretors to update
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * Limit how many tbl_filme_diretors to update.
     */
    limit?: number
  }

  /**
   * tbl_filme_diretor updateManyAndReturn
   */
  export type tbl_filme_diretorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * The data used to update tbl_filme_diretors.
     */
    data: XOR<tbl_filme_diretorUpdateManyMutationInput, tbl_filme_diretorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filme_diretors to update
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * Limit how many tbl_filme_diretors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme_diretor upsert
   */
  export type tbl_filme_diretorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_filme_diretor to update in case it exists.
     */
    where: tbl_filme_diretorWhereUniqueInput
    /**
     * In case the tbl_filme_diretor found by the `where` argument doesn't exist, create a new tbl_filme_diretor with this data.
     */
    create: XOR<tbl_filme_diretorCreateInput, tbl_filme_diretorUncheckedCreateInput>
    /**
     * In case the tbl_filme_diretor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_filme_diretorUpdateInput, tbl_filme_diretorUncheckedUpdateInput>
  }

  /**
   * tbl_filme_diretor delete
   */
  export type tbl_filme_diretorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
    /**
     * Filter which tbl_filme_diretor to delete.
     */
    where: tbl_filme_diretorWhereUniqueInput
  }

  /**
   * tbl_filme_diretor deleteMany
   */
  export type tbl_filme_diretorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme_diretors to delete
     */
    where?: tbl_filme_diretorWhereInput
    /**
     * Limit how many tbl_filme_diretors to delete.
     */
    limit?: number
  }

  /**
   * tbl_filme_diretor without action
   */
  export type tbl_filme_diretorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_diretor
     */
    select?: tbl_filme_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_diretor
     */
    omit?: tbl_filme_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_diretorInclude<ExtArgs> | null
  }


  /**
   * Model tbl_ator
   */

  export type AggregateTbl_ator = {
    _count: Tbl_atorCountAggregateOutputType | null
    _avg: Tbl_atorAvgAggregateOutputType | null
    _sum: Tbl_atorSumAggregateOutputType | null
    _min: Tbl_atorMinAggregateOutputType | null
    _max: Tbl_atorMaxAggregateOutputType | null
  }

  export type Tbl_atorAvgAggregateOutputType = {
    id: number | null
    id_sexo: number | null
  }

  export type Tbl_atorSumAggregateOutputType = {
    id: number | null
    id_sexo: number | null
  }

  export type Tbl_atorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_artistico: string | null
    data_nascimento: Date | null
    data_falecimento: Date | null
    biografia: string | null
    foto: string | null
    id_sexo: number | null
  }

  export type Tbl_atorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_artistico: string | null
    data_nascimento: Date | null
    data_falecimento: Date | null
    biografia: string | null
    foto: string | null
    id_sexo: number | null
  }

  export type Tbl_atorCountAggregateOutputType = {
    id: number
    nome: number
    nome_artistico: number
    data_nascimento: number
    data_falecimento: number
    biografia: number
    foto: number
    id_sexo: number
    _all: number
  }


  export type Tbl_atorAvgAggregateInputType = {
    id?: true
    id_sexo?: true
  }

  export type Tbl_atorSumAggregateInputType = {
    id?: true
    id_sexo?: true
  }

  export type Tbl_atorMinAggregateInputType = {
    id?: true
    nome?: true
    nome_artistico?: true
    data_nascimento?: true
    data_falecimento?: true
    biografia?: true
    foto?: true
    id_sexo?: true
  }

  export type Tbl_atorMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_artistico?: true
    data_nascimento?: true
    data_falecimento?: true
    biografia?: true
    foto?: true
    id_sexo?: true
  }

  export type Tbl_atorCountAggregateInputType = {
    id?: true
    nome?: true
    nome_artistico?: true
    data_nascimento?: true
    data_falecimento?: true
    biografia?: true
    foto?: true
    id_sexo?: true
    _all?: true
  }

  export type Tbl_atorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ator to aggregate.
     */
    where?: tbl_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ators to fetch.
     */
    orderBy?: tbl_atorOrderByWithRelationInput | tbl_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_ators
    **/
    _count?: true | Tbl_atorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_atorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_atorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_atorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_atorMaxAggregateInputType
  }

  export type GetTbl_atorAggregateType<T extends Tbl_atorAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_ator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_ator[P]>
      : GetScalarType<T[P], AggregateTbl_ator[P]>
  }




  export type tbl_atorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_atorWhereInput
    orderBy?: tbl_atorOrderByWithAggregationInput | tbl_atorOrderByWithAggregationInput[]
    by: Tbl_atorScalarFieldEnum[] | Tbl_atorScalarFieldEnum
    having?: tbl_atorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_atorCountAggregateInputType | true
    _avg?: Tbl_atorAvgAggregateInputType
    _sum?: Tbl_atorSumAggregateInputType
    _min?: Tbl_atorMinAggregateInputType
    _max?: Tbl_atorMaxAggregateInputType
  }

  export type Tbl_atorGroupByOutputType = {
    id: number
    nome: string
    nome_artistico: string
    data_nascimento: Date
    data_falecimento: Date | null
    biografia: string
    foto: string
    id_sexo: number
    _count: Tbl_atorCountAggregateOutputType | null
    _avg: Tbl_atorAvgAggregateOutputType | null
    _sum: Tbl_atorSumAggregateOutputType | null
    _min: Tbl_atorMinAggregateOutputType | null
    _max: Tbl_atorMaxAggregateOutputType | null
  }

  type GetTbl_atorGroupByPayload<T extends tbl_atorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_atorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_atorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_atorGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_atorGroupByOutputType[P]>
        }
      >
    >


  export type tbl_atorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
    nacionalidades?: boolean | tbl_ator$nacionalidadesArgs<ExtArgs>
    filmes?: boolean | tbl_ator$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_atorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ator"]>

  export type tbl_atorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ator"]>

  export type tbl_atorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ator"]>

  export type tbl_atorSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_artistico?: boolean
    data_nascimento?: boolean
    data_falecimento?: boolean
    biografia?: boolean
    foto?: boolean
    id_sexo?: boolean
  }

  export type tbl_atorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nome_artistico" | "data_nascimento" | "data_falecimento" | "biografia" | "foto" | "id_sexo", ExtArgs["result"]["tbl_ator"]>
  export type tbl_atorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
    nacionalidades?: boolean | tbl_ator$nacionalidadesArgs<ExtArgs>
    filmes?: boolean | tbl_ator$filmesArgs<ExtArgs>
    _count?: boolean | Tbl_atorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_atorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }
  export type tbl_atorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sexo?: boolean | tbl_sexoDefaultArgs<ExtArgs>
  }

  export type $tbl_atorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_ator"
    objects: {
      sexo: Prisma.$tbl_sexoPayload<ExtArgs>
      nacionalidades: Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>[]
      filmes: Prisma.$tbl_filme_atorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_artistico: string
      data_nascimento: Date
      data_falecimento: Date | null
      biografia: string
      foto: string
      id_sexo: number
    }, ExtArgs["result"]["tbl_ator"]>
    composites: {}
  }

  type tbl_atorGetPayload<S extends boolean | null | undefined | tbl_atorDefaultArgs> = $Result.GetResult<Prisma.$tbl_atorPayload, S>

  type tbl_atorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_atorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_atorCountAggregateInputType | true
    }

  export interface tbl_atorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_ator'], meta: { name: 'tbl_ator' } }
    /**
     * Find zero or one Tbl_ator that matches the filter.
     * @param {tbl_atorFindUniqueArgs} args - Arguments to find a Tbl_ator
     * @example
     * // Get one Tbl_ator
     * const tbl_ator = await prisma.tbl_ator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_atorFindUniqueArgs>(args: SelectSubset<T, tbl_atorFindUniqueArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_ator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_atorFindUniqueOrThrowArgs} args - Arguments to find a Tbl_ator
     * @example
     * // Get one Tbl_ator
     * const tbl_ator = await prisma.tbl_ator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_atorFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_atorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_ator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_atorFindFirstArgs} args - Arguments to find a Tbl_ator
     * @example
     * // Get one Tbl_ator
     * const tbl_ator = await prisma.tbl_ator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_atorFindFirstArgs>(args?: SelectSubset<T, tbl_atorFindFirstArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_ator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_atorFindFirstOrThrowArgs} args - Arguments to find a Tbl_ator
     * @example
     * // Get one Tbl_ator
     * const tbl_ator = await prisma.tbl_ator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_atorFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_atorFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_ators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_atorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_ators
     * const tbl_ators = await prisma.tbl_ator.findMany()
     * 
     * // Get first 10 Tbl_ators
     * const tbl_ators = await prisma.tbl_ator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_atorWithIdOnly = await prisma.tbl_ator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_atorFindManyArgs>(args?: SelectSubset<T, tbl_atorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_ator.
     * @param {tbl_atorCreateArgs} args - Arguments to create a Tbl_ator.
     * @example
     * // Create one Tbl_ator
     * const Tbl_ator = await prisma.tbl_ator.create({
     *   data: {
     *     // ... data to create a Tbl_ator
     *   }
     * })
     * 
     */
    create<T extends tbl_atorCreateArgs>(args: SelectSubset<T, tbl_atorCreateArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_ators.
     * @param {tbl_atorCreateManyArgs} args - Arguments to create many Tbl_ators.
     * @example
     * // Create many Tbl_ators
     * const tbl_ator = await prisma.tbl_ator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_atorCreateManyArgs>(args?: SelectSubset<T, tbl_atorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_ators and returns the data saved in the database.
     * @param {tbl_atorCreateManyAndReturnArgs} args - Arguments to create many Tbl_ators.
     * @example
     * // Create many Tbl_ators
     * const tbl_ator = await prisma.tbl_ator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_ators and only return the `id`
     * const tbl_atorWithIdOnly = await prisma.tbl_ator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_atorCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_atorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_ator.
     * @param {tbl_atorDeleteArgs} args - Arguments to delete one Tbl_ator.
     * @example
     * // Delete one Tbl_ator
     * const Tbl_ator = await prisma.tbl_ator.delete({
     *   where: {
     *     // ... filter to delete one Tbl_ator
     *   }
     * })
     * 
     */
    delete<T extends tbl_atorDeleteArgs>(args: SelectSubset<T, tbl_atorDeleteArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_ator.
     * @param {tbl_atorUpdateArgs} args - Arguments to update one Tbl_ator.
     * @example
     * // Update one Tbl_ator
     * const tbl_ator = await prisma.tbl_ator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_atorUpdateArgs>(args: SelectSubset<T, tbl_atorUpdateArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_ators.
     * @param {tbl_atorDeleteManyArgs} args - Arguments to filter Tbl_ators to delete.
     * @example
     * // Delete a few Tbl_ators
     * const { count } = await prisma.tbl_ator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_atorDeleteManyArgs>(args?: SelectSubset<T, tbl_atorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_ators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_atorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_ators
     * const tbl_ator = await prisma.tbl_ator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_atorUpdateManyArgs>(args: SelectSubset<T, tbl_atorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_ators and returns the data updated in the database.
     * @param {tbl_atorUpdateManyAndReturnArgs} args - Arguments to update many Tbl_ators.
     * @example
     * // Update many Tbl_ators
     * const tbl_ator = await prisma.tbl_ator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_ators and only return the `id`
     * const tbl_atorWithIdOnly = await prisma.tbl_ator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_atorUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_atorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_ator.
     * @param {tbl_atorUpsertArgs} args - Arguments to update or create a Tbl_ator.
     * @example
     * // Update or create a Tbl_ator
     * const tbl_ator = await prisma.tbl_ator.upsert({
     *   create: {
     *     // ... data to create a Tbl_ator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_ator we want to update
     *   }
     * })
     */
    upsert<T extends tbl_atorUpsertArgs>(args: SelectSubset<T, tbl_atorUpsertArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_ators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_atorCountArgs} args - Arguments to filter Tbl_ators to count.
     * @example
     * // Count the number of Tbl_ators
     * const count = await prisma.tbl_ator.count({
     *   where: {
     *     // ... the filter for the Tbl_ators we want to count
     *   }
     * })
    **/
    count<T extends tbl_atorCountArgs>(
      args?: Subset<T, tbl_atorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_atorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_ator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_atorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_atorAggregateArgs>(args: Subset<T, Tbl_atorAggregateArgs>): Prisma.PrismaPromise<GetTbl_atorAggregateType<T>>

    /**
     * Group by Tbl_ator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_atorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_atorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_atorGroupByArgs['orderBy'] }
        : { orderBy?: tbl_atorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_atorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_atorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_ator model
   */
  readonly fields: tbl_atorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_ator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_atorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sexo<T extends tbl_sexoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_sexoDefaultArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nacionalidades<T extends tbl_ator$nacionalidadesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_ator$nacionalidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filmes<T extends tbl_ator$filmesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_ator$filmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_ator model
   */
  interface tbl_atorFieldRefs {
    readonly id: FieldRef<"tbl_ator", 'Int'>
    readonly nome: FieldRef<"tbl_ator", 'String'>
    readonly nome_artistico: FieldRef<"tbl_ator", 'String'>
    readonly data_nascimento: FieldRef<"tbl_ator", 'DateTime'>
    readonly data_falecimento: FieldRef<"tbl_ator", 'DateTime'>
    readonly biografia: FieldRef<"tbl_ator", 'String'>
    readonly foto: FieldRef<"tbl_ator", 'String'>
    readonly id_sexo: FieldRef<"tbl_ator", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_ator findUnique
   */
  export type tbl_atorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator to fetch.
     */
    where: tbl_atorWhereUniqueInput
  }

  /**
   * tbl_ator findUniqueOrThrow
   */
  export type tbl_atorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator to fetch.
     */
    where: tbl_atorWhereUniqueInput
  }

  /**
   * tbl_ator findFirst
   */
  export type tbl_atorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator to fetch.
     */
    where?: tbl_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ators to fetch.
     */
    orderBy?: tbl_atorOrderByWithRelationInput | tbl_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_ators.
     */
    cursor?: tbl_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_ators.
     */
    distinct?: Tbl_atorScalarFieldEnum | Tbl_atorScalarFieldEnum[]
  }

  /**
   * tbl_ator findFirstOrThrow
   */
  export type tbl_atorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator to fetch.
     */
    where?: tbl_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ators to fetch.
     */
    orderBy?: tbl_atorOrderByWithRelationInput | tbl_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_ators.
     */
    cursor?: tbl_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_ators.
     */
    distinct?: Tbl_atorScalarFieldEnum | Tbl_atorScalarFieldEnum[]
  }

  /**
   * tbl_ator findMany
   */
  export type tbl_atorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ators to fetch.
     */
    where?: tbl_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ators to fetch.
     */
    orderBy?: tbl_atorOrderByWithRelationInput | tbl_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_ators.
     */
    cursor?: tbl_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ators.
     */
    skip?: number
    distinct?: Tbl_atorScalarFieldEnum | Tbl_atorScalarFieldEnum[]
  }

  /**
   * tbl_ator create
   */
  export type tbl_atorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_ator.
     */
    data: XOR<tbl_atorCreateInput, tbl_atorUncheckedCreateInput>
  }

  /**
   * tbl_ator createMany
   */
  export type tbl_atorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_ators.
     */
    data: tbl_atorCreateManyInput | tbl_atorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_ator createManyAndReturn
   */
  export type tbl_atorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_ators.
     */
    data: tbl_atorCreateManyInput | tbl_atorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_ator update
   */
  export type tbl_atorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_ator.
     */
    data: XOR<tbl_atorUpdateInput, tbl_atorUncheckedUpdateInput>
    /**
     * Choose, which tbl_ator to update.
     */
    where: tbl_atorWhereUniqueInput
  }

  /**
   * tbl_ator updateMany
   */
  export type tbl_atorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_ators.
     */
    data: XOR<tbl_atorUpdateManyMutationInput, tbl_atorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_ators to update
     */
    where?: tbl_atorWhereInput
    /**
     * Limit how many tbl_ators to update.
     */
    limit?: number
  }

  /**
   * tbl_ator updateManyAndReturn
   */
  export type tbl_atorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * The data used to update tbl_ators.
     */
    data: XOR<tbl_atorUpdateManyMutationInput, tbl_atorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_ators to update
     */
    where?: tbl_atorWhereInput
    /**
     * Limit how many tbl_ators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_ator upsert
   */
  export type tbl_atorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_ator to update in case it exists.
     */
    where: tbl_atorWhereUniqueInput
    /**
     * In case the tbl_ator found by the `where` argument doesn't exist, create a new tbl_ator with this data.
     */
    create: XOR<tbl_atorCreateInput, tbl_atorUncheckedCreateInput>
    /**
     * In case the tbl_ator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_atorUpdateInput, tbl_atorUncheckedUpdateInput>
  }

  /**
   * tbl_ator delete
   */
  export type tbl_atorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    /**
     * Filter which tbl_ator to delete.
     */
    where: tbl_atorWhereUniqueInput
  }

  /**
   * tbl_ator deleteMany
   */
  export type tbl_atorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ators to delete
     */
    where?: tbl_atorWhereInput
    /**
     * Limit how many tbl_ators to delete.
     */
    limit?: number
  }

  /**
   * tbl_ator.nacionalidades
   */
  export type tbl_ator$nacionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    where?: tbl_ator_nacionalidadeWhereInput
    orderBy?: tbl_ator_nacionalidadeOrderByWithRelationInput | tbl_ator_nacionalidadeOrderByWithRelationInput[]
    cursor?: tbl_ator_nacionalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_ator_nacionalidadeScalarFieldEnum | Tbl_ator_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_ator.filmes
   */
  export type tbl_ator$filmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    where?: tbl_filme_atorWhereInput
    orderBy?: tbl_filme_atorOrderByWithRelationInput | tbl_filme_atorOrderByWithRelationInput[]
    cursor?: tbl_filme_atorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_filme_atorScalarFieldEnum | Tbl_filme_atorScalarFieldEnum[]
  }

  /**
   * tbl_ator without action
   */
  export type tbl_atorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
  }


  /**
   * Model tbl_filme_ator
   */

  export type AggregateTbl_filme_ator = {
    _count: Tbl_filme_atorCountAggregateOutputType | null
    _avg: Tbl_filme_atorAvgAggregateOutputType | null
    _sum: Tbl_filme_atorSumAggregateOutputType | null
    _min: Tbl_filme_atorMinAggregateOutputType | null
    _max: Tbl_filme_atorMaxAggregateOutputType | null
  }

  export type Tbl_filme_atorAvgAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_ator: number | null
  }

  export type Tbl_filme_atorSumAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_ator: number | null
  }

  export type Tbl_filme_atorMinAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_ator: number | null
  }

  export type Tbl_filme_atorMaxAggregateOutputType = {
    id: number | null
    id_filme: number | null
    id_ator: number | null
  }

  export type Tbl_filme_atorCountAggregateOutputType = {
    id: number
    id_filme: number
    id_ator: number
    _all: number
  }


  export type Tbl_filme_atorAvgAggregateInputType = {
    id?: true
    id_filme?: true
    id_ator?: true
  }

  export type Tbl_filme_atorSumAggregateInputType = {
    id?: true
    id_filme?: true
    id_ator?: true
  }

  export type Tbl_filme_atorMinAggregateInputType = {
    id?: true
    id_filme?: true
    id_ator?: true
  }

  export type Tbl_filme_atorMaxAggregateInputType = {
    id?: true
    id_filme?: true
    id_ator?: true
  }

  export type Tbl_filme_atorCountAggregateInputType = {
    id?: true
    id_filme?: true
    id_ator?: true
    _all?: true
  }

  export type Tbl_filme_atorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme_ator to aggregate.
     */
    where?: tbl_filme_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_ators to fetch.
     */
    orderBy?: tbl_filme_atorOrderByWithRelationInput | tbl_filme_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_filme_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_ators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_filme_ators
    **/
    _count?: true | Tbl_filme_atorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_filme_atorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_filme_atorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_filme_atorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_filme_atorMaxAggregateInputType
  }

  export type GetTbl_filme_atorAggregateType<T extends Tbl_filme_atorAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_filme_ator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_filme_ator[P]>
      : GetScalarType<T[P], AggregateTbl_filme_ator[P]>
  }




  export type tbl_filme_atorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filme_atorWhereInput
    orderBy?: tbl_filme_atorOrderByWithAggregationInput | tbl_filme_atorOrderByWithAggregationInput[]
    by: Tbl_filme_atorScalarFieldEnum[] | Tbl_filme_atorScalarFieldEnum
    having?: tbl_filme_atorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_filme_atorCountAggregateInputType | true
    _avg?: Tbl_filme_atorAvgAggregateInputType
    _sum?: Tbl_filme_atorSumAggregateInputType
    _min?: Tbl_filme_atorMinAggregateInputType
    _max?: Tbl_filme_atorMaxAggregateInputType
  }

  export type Tbl_filme_atorGroupByOutputType = {
    id: number
    id_filme: number
    id_ator: number
    _count: Tbl_filme_atorCountAggregateOutputType | null
    _avg: Tbl_filme_atorAvgAggregateOutputType | null
    _sum: Tbl_filme_atorSumAggregateOutputType | null
    _min: Tbl_filme_atorMinAggregateOutputType | null
    _max: Tbl_filme_atorMaxAggregateOutputType | null
  }

  type GetTbl_filme_atorGroupByPayload<T extends tbl_filme_atorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_filme_atorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_filme_atorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_filme_atorGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_filme_atorGroupByOutputType[P]>
        }
      >
    >


  export type tbl_filme_atorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_ator?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_ator"]>

  export type tbl_filme_atorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_ator?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_ator"]>

  export type tbl_filme_atorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_filme?: boolean
    id_ator?: boolean
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filme_ator"]>

  export type tbl_filme_atorSelectScalar = {
    id?: boolean
    id_filme?: boolean
    id_ator?: boolean
  }

  export type tbl_filme_atorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_filme" | "id_ator", ExtArgs["result"]["tbl_filme_ator"]>
  export type tbl_filme_atorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
  }
  export type tbl_filme_atorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
  }
  export type tbl_filme_atorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | tbl_filmeDefaultArgs<ExtArgs>
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
  }

  export type $tbl_filme_atorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_filme_ator"
    objects: {
      filme: Prisma.$tbl_filmePayload<ExtArgs>
      ator: Prisma.$tbl_atorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_filme: number
      id_ator: number
    }, ExtArgs["result"]["tbl_filme_ator"]>
    composites: {}
  }

  type tbl_filme_atorGetPayload<S extends boolean | null | undefined | tbl_filme_atorDefaultArgs> = $Result.GetResult<Prisma.$tbl_filme_atorPayload, S>

  type tbl_filme_atorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_filme_atorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_filme_atorCountAggregateInputType | true
    }

  export interface tbl_filme_atorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_filme_ator'], meta: { name: 'tbl_filme_ator' } }
    /**
     * Find zero or one Tbl_filme_ator that matches the filter.
     * @param {tbl_filme_atorFindUniqueArgs} args - Arguments to find a Tbl_filme_ator
     * @example
     * // Get one Tbl_filme_ator
     * const tbl_filme_ator = await prisma.tbl_filme_ator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_filme_atorFindUniqueArgs>(args: SelectSubset<T, tbl_filme_atorFindUniqueArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_filme_ator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_filme_atorFindUniqueOrThrowArgs} args - Arguments to find a Tbl_filme_ator
     * @example
     * // Get one Tbl_filme_ator
     * const tbl_filme_ator = await prisma.tbl_filme_ator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_filme_atorFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_filme_atorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme_ator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_atorFindFirstArgs} args - Arguments to find a Tbl_filme_ator
     * @example
     * // Get one Tbl_filme_ator
     * const tbl_filme_ator = await prisma.tbl_filme_ator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_filme_atorFindFirstArgs>(args?: SelectSubset<T, tbl_filme_atorFindFirstArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_filme_ator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_atorFindFirstOrThrowArgs} args - Arguments to find a Tbl_filme_ator
     * @example
     * // Get one Tbl_filme_ator
     * const tbl_filme_ator = await prisma.tbl_filme_ator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_filme_atorFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_filme_atorFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_filme_ators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_atorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_filme_ators
     * const tbl_filme_ators = await prisma.tbl_filme_ator.findMany()
     * 
     * // Get first 10 Tbl_filme_ators
     * const tbl_filme_ators = await prisma.tbl_filme_ator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_filme_atorWithIdOnly = await prisma.tbl_filme_ator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_filme_atorFindManyArgs>(args?: SelectSubset<T, tbl_filme_atorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_filme_ator.
     * @param {tbl_filme_atorCreateArgs} args - Arguments to create a Tbl_filme_ator.
     * @example
     * // Create one Tbl_filme_ator
     * const Tbl_filme_ator = await prisma.tbl_filme_ator.create({
     *   data: {
     *     // ... data to create a Tbl_filme_ator
     *   }
     * })
     * 
     */
    create<T extends tbl_filme_atorCreateArgs>(args: SelectSubset<T, tbl_filme_atorCreateArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_filme_ators.
     * @param {tbl_filme_atorCreateManyArgs} args - Arguments to create many Tbl_filme_ators.
     * @example
     * // Create many Tbl_filme_ators
     * const tbl_filme_ator = await prisma.tbl_filme_ator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_filme_atorCreateManyArgs>(args?: SelectSubset<T, tbl_filme_atorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_filme_ators and returns the data saved in the database.
     * @param {tbl_filme_atorCreateManyAndReturnArgs} args - Arguments to create many Tbl_filme_ators.
     * @example
     * // Create many Tbl_filme_ators
     * const tbl_filme_ator = await prisma.tbl_filme_ator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_filme_ators and only return the `id`
     * const tbl_filme_atorWithIdOnly = await prisma.tbl_filme_ator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_filme_atorCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_filme_atorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_filme_ator.
     * @param {tbl_filme_atorDeleteArgs} args - Arguments to delete one Tbl_filme_ator.
     * @example
     * // Delete one Tbl_filme_ator
     * const Tbl_filme_ator = await prisma.tbl_filme_ator.delete({
     *   where: {
     *     // ... filter to delete one Tbl_filme_ator
     *   }
     * })
     * 
     */
    delete<T extends tbl_filme_atorDeleteArgs>(args: SelectSubset<T, tbl_filme_atorDeleteArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_filme_ator.
     * @param {tbl_filme_atorUpdateArgs} args - Arguments to update one Tbl_filme_ator.
     * @example
     * // Update one Tbl_filme_ator
     * const tbl_filme_ator = await prisma.tbl_filme_ator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_filme_atorUpdateArgs>(args: SelectSubset<T, tbl_filme_atorUpdateArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_filme_ators.
     * @param {tbl_filme_atorDeleteManyArgs} args - Arguments to filter Tbl_filme_ators to delete.
     * @example
     * // Delete a few Tbl_filme_ators
     * const { count } = await prisma.tbl_filme_ator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_filme_atorDeleteManyArgs>(args?: SelectSubset<T, tbl_filme_atorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filme_ators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_atorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_filme_ators
     * const tbl_filme_ator = await prisma.tbl_filme_ator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_filme_atorUpdateManyArgs>(args: SelectSubset<T, tbl_filme_atorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filme_ators and returns the data updated in the database.
     * @param {tbl_filme_atorUpdateManyAndReturnArgs} args - Arguments to update many Tbl_filme_ators.
     * @example
     * // Update many Tbl_filme_ators
     * const tbl_filme_ator = await prisma.tbl_filme_ator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_filme_ators and only return the `id`
     * const tbl_filme_atorWithIdOnly = await prisma.tbl_filme_ator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_filme_atorUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_filme_atorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_filme_ator.
     * @param {tbl_filme_atorUpsertArgs} args - Arguments to update or create a Tbl_filme_ator.
     * @example
     * // Update or create a Tbl_filme_ator
     * const tbl_filme_ator = await prisma.tbl_filme_ator.upsert({
     *   create: {
     *     // ... data to create a Tbl_filme_ator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_filme_ator we want to update
     *   }
     * })
     */
    upsert<T extends tbl_filme_atorUpsertArgs>(args: SelectSubset<T, tbl_filme_atorUpsertArgs<ExtArgs>>): Prisma__tbl_filme_atorClient<$Result.GetResult<Prisma.$tbl_filme_atorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_filme_ators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_atorCountArgs} args - Arguments to filter Tbl_filme_ators to count.
     * @example
     * // Count the number of Tbl_filme_ators
     * const count = await prisma.tbl_filme_ator.count({
     *   where: {
     *     // ... the filter for the Tbl_filme_ators we want to count
     *   }
     * })
    **/
    count<T extends tbl_filme_atorCountArgs>(
      args?: Subset<T, tbl_filme_atorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_filme_atorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_filme_ator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_filme_atorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_filme_atorAggregateArgs>(args: Subset<T, Tbl_filme_atorAggregateArgs>): Prisma.PrismaPromise<GetTbl_filme_atorAggregateType<T>>

    /**
     * Group by Tbl_filme_ator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filme_atorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_filme_atorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_filme_atorGroupByArgs['orderBy'] }
        : { orderBy?: tbl_filme_atorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_filme_atorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_filme_atorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_filme_ator model
   */
  readonly fields: tbl_filme_atorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_filme_ator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_filme_atorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filme<T extends tbl_filmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filmeDefaultArgs<ExtArgs>>): Prisma__tbl_filmeClient<$Result.GetResult<Prisma.$tbl_filmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ator<T extends tbl_atorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_atorDefaultArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_filme_ator model
   */
  interface tbl_filme_atorFieldRefs {
    readonly id: FieldRef<"tbl_filme_ator", 'Int'>
    readonly id_filme: FieldRef<"tbl_filme_ator", 'Int'>
    readonly id_ator: FieldRef<"tbl_filme_ator", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_filme_ator findUnique
   */
  export type tbl_filme_atorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_ator to fetch.
     */
    where: tbl_filme_atorWhereUniqueInput
  }

  /**
   * tbl_filme_ator findUniqueOrThrow
   */
  export type tbl_filme_atorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_ator to fetch.
     */
    where: tbl_filme_atorWhereUniqueInput
  }

  /**
   * tbl_filme_ator findFirst
   */
  export type tbl_filme_atorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_ator to fetch.
     */
    where?: tbl_filme_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_ators to fetch.
     */
    orderBy?: tbl_filme_atorOrderByWithRelationInput | tbl_filme_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filme_ators.
     */
    cursor?: tbl_filme_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_ators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filme_ators.
     */
    distinct?: Tbl_filme_atorScalarFieldEnum | Tbl_filme_atorScalarFieldEnum[]
  }

  /**
   * tbl_filme_ator findFirstOrThrow
   */
  export type tbl_filme_atorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_ator to fetch.
     */
    where?: tbl_filme_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_ators to fetch.
     */
    orderBy?: tbl_filme_atorOrderByWithRelationInput | tbl_filme_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filme_ators.
     */
    cursor?: tbl_filme_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_ators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filme_ators.
     */
    distinct?: Tbl_filme_atorScalarFieldEnum | Tbl_filme_atorScalarFieldEnum[]
  }

  /**
   * tbl_filme_ator findMany
   */
  export type tbl_filme_atorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filme_ators to fetch.
     */
    where?: tbl_filme_atorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filme_ators to fetch.
     */
    orderBy?: tbl_filme_atorOrderByWithRelationInput | tbl_filme_atorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_filme_ators.
     */
    cursor?: tbl_filme_atorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filme_ators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filme_ators.
     */
    skip?: number
    distinct?: Tbl_filme_atorScalarFieldEnum | Tbl_filme_atorScalarFieldEnum[]
  }

  /**
   * tbl_filme_ator create
   */
  export type tbl_filme_atorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_filme_ator.
     */
    data: XOR<tbl_filme_atorCreateInput, tbl_filme_atorUncheckedCreateInput>
  }

  /**
   * tbl_filme_ator createMany
   */
  export type tbl_filme_atorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_filme_ators.
     */
    data: tbl_filme_atorCreateManyInput | tbl_filme_atorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_filme_ator createManyAndReturn
   */
  export type tbl_filme_atorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_filme_ators.
     */
    data: tbl_filme_atorCreateManyInput | tbl_filme_atorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme_ator update
   */
  export type tbl_filme_atorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_filme_ator.
     */
    data: XOR<tbl_filme_atorUpdateInput, tbl_filme_atorUncheckedUpdateInput>
    /**
     * Choose, which tbl_filme_ator to update.
     */
    where: tbl_filme_atorWhereUniqueInput
  }

  /**
   * tbl_filme_ator updateMany
   */
  export type tbl_filme_atorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_filme_ators.
     */
    data: XOR<tbl_filme_atorUpdateManyMutationInput, tbl_filme_atorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filme_ators to update
     */
    where?: tbl_filme_atorWhereInput
    /**
     * Limit how many tbl_filme_ators to update.
     */
    limit?: number
  }

  /**
   * tbl_filme_ator updateManyAndReturn
   */
  export type tbl_filme_atorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * The data used to update tbl_filme_ators.
     */
    data: XOR<tbl_filme_atorUpdateManyMutationInput, tbl_filme_atorUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filme_ators to update
     */
    where?: tbl_filme_atorWhereInput
    /**
     * Limit how many tbl_filme_ators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_filme_ator upsert
   */
  export type tbl_filme_atorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_filme_ator to update in case it exists.
     */
    where: tbl_filme_atorWhereUniqueInput
    /**
     * In case the tbl_filme_ator found by the `where` argument doesn't exist, create a new tbl_filme_ator with this data.
     */
    create: XOR<tbl_filme_atorCreateInput, tbl_filme_atorUncheckedCreateInput>
    /**
     * In case the tbl_filme_ator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_filme_atorUpdateInput, tbl_filme_atorUncheckedUpdateInput>
  }

  /**
   * tbl_filme_ator delete
   */
  export type tbl_filme_atorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
    /**
     * Filter which tbl_filme_ator to delete.
     */
    where: tbl_filme_atorWhereUniqueInput
  }

  /**
   * tbl_filme_ator deleteMany
   */
  export type tbl_filme_atorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filme_ators to delete
     */
    where?: tbl_filme_atorWhereInput
    /**
     * Limit how many tbl_filme_ators to delete.
     */
    limit?: number
  }

  /**
   * tbl_filme_ator without action
   */
  export type tbl_filme_atorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filme_ator
     */
    select?: tbl_filme_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_filme_ator
     */
    omit?: tbl_filme_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_filme_atorInclude<ExtArgs> | null
  }


  /**
   * Model tbl_nacionalidade
   */

  export type AggregateTbl_nacionalidade = {
    _count: Tbl_nacionalidadeCountAggregateOutputType | null
    _avg: Tbl_nacionalidadeAvgAggregateOutputType | null
    _sum: Tbl_nacionalidadeSumAggregateOutputType | null
    _min: Tbl_nacionalidadeMinAggregateOutputType | null
    _max: Tbl_nacionalidadeMaxAggregateOutputType | null
  }

  export type Tbl_nacionalidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_nacionalidadeSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_nacionalidadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Tbl_nacionalidadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Tbl_nacionalidadeCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type Tbl_nacionalidadeAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_nacionalidadeSumAggregateInputType = {
    id?: true
  }

  export type Tbl_nacionalidadeMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Tbl_nacionalidadeMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Tbl_nacionalidadeCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type Tbl_nacionalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_nacionalidade to aggregate.
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_nacionalidades to fetch.
     */
    orderBy?: tbl_nacionalidadeOrderByWithRelationInput | tbl_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_nacionalidades
    **/
    _count?: true | Tbl_nacionalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_nacionalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_nacionalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_nacionalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_nacionalidadeMaxAggregateInputType
  }

  export type GetTbl_nacionalidadeAggregateType<T extends Tbl_nacionalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_nacionalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_nacionalidade[P]>
      : GetScalarType<T[P], AggregateTbl_nacionalidade[P]>
  }




  export type tbl_nacionalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_nacionalidadeWhereInput
    orderBy?: tbl_nacionalidadeOrderByWithAggregationInput | tbl_nacionalidadeOrderByWithAggregationInput[]
    by: Tbl_nacionalidadeScalarFieldEnum[] | Tbl_nacionalidadeScalarFieldEnum
    having?: tbl_nacionalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_nacionalidadeCountAggregateInputType | true
    _avg?: Tbl_nacionalidadeAvgAggregateInputType
    _sum?: Tbl_nacionalidadeSumAggregateInputType
    _min?: Tbl_nacionalidadeMinAggregateInputType
    _max?: Tbl_nacionalidadeMaxAggregateInputType
  }

  export type Tbl_nacionalidadeGroupByOutputType = {
    id: number
    nome: string
    _count: Tbl_nacionalidadeCountAggregateOutputType | null
    _avg: Tbl_nacionalidadeAvgAggregateOutputType | null
    _sum: Tbl_nacionalidadeSumAggregateOutputType | null
    _min: Tbl_nacionalidadeMinAggregateOutputType | null
    _max: Tbl_nacionalidadeMaxAggregateOutputType | null
  }

  type GetTbl_nacionalidadeGroupByPayload<T extends tbl_nacionalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_nacionalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_nacionalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_nacionalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_nacionalidadeGroupByOutputType[P]>
        }
      >
    >


  export type tbl_nacionalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    diretores?: boolean | tbl_nacionalidade$diretoresArgs<ExtArgs>
    atores?: boolean | tbl_nacionalidade$atoresArgs<ExtArgs>
    _count?: boolean | Tbl_nacionalidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_nacionalidade"]>

  export type tbl_nacionalidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tbl_nacionalidade"]>

  export type tbl_nacionalidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tbl_nacionalidade"]>

  export type tbl_nacionalidadeSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type tbl_nacionalidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["tbl_nacionalidade"]>
  export type tbl_nacionalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretores?: boolean | tbl_nacionalidade$diretoresArgs<ExtArgs>
    atores?: boolean | tbl_nacionalidade$atoresArgs<ExtArgs>
    _count?: boolean | Tbl_nacionalidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_nacionalidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_nacionalidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_nacionalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_nacionalidade"
    objects: {
      diretores: Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>[]
      atores: Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["tbl_nacionalidade"]>
    composites: {}
  }

  type tbl_nacionalidadeGetPayload<S extends boolean | null | undefined | tbl_nacionalidadeDefaultArgs> = $Result.GetResult<Prisma.$tbl_nacionalidadePayload, S>

  type tbl_nacionalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_nacionalidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_nacionalidadeCountAggregateInputType | true
    }

  export interface tbl_nacionalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_nacionalidade'], meta: { name: 'tbl_nacionalidade' } }
    /**
     * Find zero or one Tbl_nacionalidade that matches the filter.
     * @param {tbl_nacionalidadeFindUniqueArgs} args - Arguments to find a Tbl_nacionalidade
     * @example
     * // Get one Tbl_nacionalidade
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_nacionalidadeFindUniqueArgs>(args: SelectSubset<T, tbl_nacionalidadeFindUniqueArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_nacionalidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_nacionalidadeFindUniqueOrThrowArgs} args - Arguments to find a Tbl_nacionalidade
     * @example
     * // Get one Tbl_nacionalidade
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_nacionalidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_nacionalidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_nacionalidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_nacionalidadeFindFirstArgs} args - Arguments to find a Tbl_nacionalidade
     * @example
     * // Get one Tbl_nacionalidade
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_nacionalidadeFindFirstArgs>(args?: SelectSubset<T, tbl_nacionalidadeFindFirstArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_nacionalidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_nacionalidadeFindFirstOrThrowArgs} args - Arguments to find a Tbl_nacionalidade
     * @example
     * // Get one Tbl_nacionalidade
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_nacionalidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_nacionalidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_nacionalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_nacionalidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_nacionalidades
     * const tbl_nacionalidades = await prisma.tbl_nacionalidade.findMany()
     * 
     * // Get first 10 Tbl_nacionalidades
     * const tbl_nacionalidades = await prisma.tbl_nacionalidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_nacionalidadeWithIdOnly = await prisma.tbl_nacionalidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_nacionalidadeFindManyArgs>(args?: SelectSubset<T, tbl_nacionalidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_nacionalidade.
     * @param {tbl_nacionalidadeCreateArgs} args - Arguments to create a Tbl_nacionalidade.
     * @example
     * // Create one Tbl_nacionalidade
     * const Tbl_nacionalidade = await prisma.tbl_nacionalidade.create({
     *   data: {
     *     // ... data to create a Tbl_nacionalidade
     *   }
     * })
     * 
     */
    create<T extends tbl_nacionalidadeCreateArgs>(args: SelectSubset<T, tbl_nacionalidadeCreateArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_nacionalidades.
     * @param {tbl_nacionalidadeCreateManyArgs} args - Arguments to create many Tbl_nacionalidades.
     * @example
     * // Create many Tbl_nacionalidades
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_nacionalidadeCreateManyArgs>(args?: SelectSubset<T, tbl_nacionalidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_nacionalidades and returns the data saved in the database.
     * @param {tbl_nacionalidadeCreateManyAndReturnArgs} args - Arguments to create many Tbl_nacionalidades.
     * @example
     * // Create many Tbl_nacionalidades
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_nacionalidades and only return the `id`
     * const tbl_nacionalidadeWithIdOnly = await prisma.tbl_nacionalidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_nacionalidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_nacionalidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_nacionalidade.
     * @param {tbl_nacionalidadeDeleteArgs} args - Arguments to delete one Tbl_nacionalidade.
     * @example
     * // Delete one Tbl_nacionalidade
     * const Tbl_nacionalidade = await prisma.tbl_nacionalidade.delete({
     *   where: {
     *     // ... filter to delete one Tbl_nacionalidade
     *   }
     * })
     * 
     */
    delete<T extends tbl_nacionalidadeDeleteArgs>(args: SelectSubset<T, tbl_nacionalidadeDeleteArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_nacionalidade.
     * @param {tbl_nacionalidadeUpdateArgs} args - Arguments to update one Tbl_nacionalidade.
     * @example
     * // Update one Tbl_nacionalidade
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_nacionalidadeUpdateArgs>(args: SelectSubset<T, tbl_nacionalidadeUpdateArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_nacionalidades.
     * @param {tbl_nacionalidadeDeleteManyArgs} args - Arguments to filter Tbl_nacionalidades to delete.
     * @example
     * // Delete a few Tbl_nacionalidades
     * const { count } = await prisma.tbl_nacionalidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_nacionalidadeDeleteManyArgs>(args?: SelectSubset<T, tbl_nacionalidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_nacionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_nacionalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_nacionalidades
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_nacionalidadeUpdateManyArgs>(args: SelectSubset<T, tbl_nacionalidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_nacionalidades and returns the data updated in the database.
     * @param {tbl_nacionalidadeUpdateManyAndReturnArgs} args - Arguments to update many Tbl_nacionalidades.
     * @example
     * // Update many Tbl_nacionalidades
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_nacionalidades and only return the `id`
     * const tbl_nacionalidadeWithIdOnly = await prisma.tbl_nacionalidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_nacionalidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_nacionalidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_nacionalidade.
     * @param {tbl_nacionalidadeUpsertArgs} args - Arguments to update or create a Tbl_nacionalidade.
     * @example
     * // Update or create a Tbl_nacionalidade
     * const tbl_nacionalidade = await prisma.tbl_nacionalidade.upsert({
     *   create: {
     *     // ... data to create a Tbl_nacionalidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_nacionalidade we want to update
     *   }
     * })
     */
    upsert<T extends tbl_nacionalidadeUpsertArgs>(args: SelectSubset<T, tbl_nacionalidadeUpsertArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_nacionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_nacionalidadeCountArgs} args - Arguments to filter Tbl_nacionalidades to count.
     * @example
     * // Count the number of Tbl_nacionalidades
     * const count = await prisma.tbl_nacionalidade.count({
     *   where: {
     *     // ... the filter for the Tbl_nacionalidades we want to count
     *   }
     * })
    **/
    count<T extends tbl_nacionalidadeCountArgs>(
      args?: Subset<T, tbl_nacionalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_nacionalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_nacionalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_nacionalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_nacionalidadeAggregateArgs>(args: Subset<T, Tbl_nacionalidadeAggregateArgs>): Prisma.PrismaPromise<GetTbl_nacionalidadeAggregateType<T>>

    /**
     * Group by Tbl_nacionalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_nacionalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_nacionalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_nacionalidadeGroupByArgs['orderBy'] }
        : { orderBy?: tbl_nacionalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_nacionalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_nacionalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_nacionalidade model
   */
  readonly fields: tbl_nacionalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_nacionalidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_nacionalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diretores<T extends tbl_nacionalidade$diretoresArgs<ExtArgs> = {}>(args?: Subset<T, tbl_nacionalidade$diretoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atores<T extends tbl_nacionalidade$atoresArgs<ExtArgs> = {}>(args?: Subset<T, tbl_nacionalidade$atoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_nacionalidade model
   */
  interface tbl_nacionalidadeFieldRefs {
    readonly id: FieldRef<"tbl_nacionalidade", 'Int'>
    readonly nome: FieldRef<"tbl_nacionalidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_nacionalidade findUnique
   */
  export type tbl_nacionalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_nacionalidade to fetch.
     */
    where: tbl_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_nacionalidade findUniqueOrThrow
   */
  export type tbl_nacionalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_nacionalidade to fetch.
     */
    where: tbl_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_nacionalidade findFirst
   */
  export type tbl_nacionalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_nacionalidade to fetch.
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_nacionalidades to fetch.
     */
    orderBy?: tbl_nacionalidadeOrderByWithRelationInput | tbl_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_nacionalidades.
     */
    cursor?: tbl_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_nacionalidades.
     */
    distinct?: Tbl_nacionalidadeScalarFieldEnum | Tbl_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_nacionalidade findFirstOrThrow
   */
  export type tbl_nacionalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_nacionalidade to fetch.
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_nacionalidades to fetch.
     */
    orderBy?: tbl_nacionalidadeOrderByWithRelationInput | tbl_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_nacionalidades.
     */
    cursor?: tbl_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_nacionalidades.
     */
    distinct?: Tbl_nacionalidadeScalarFieldEnum | Tbl_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_nacionalidade findMany
   */
  export type tbl_nacionalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_nacionalidades to fetch.
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_nacionalidades to fetch.
     */
    orderBy?: tbl_nacionalidadeOrderByWithRelationInput | tbl_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_nacionalidades.
     */
    cursor?: tbl_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_nacionalidades.
     */
    skip?: number
    distinct?: Tbl_nacionalidadeScalarFieldEnum | Tbl_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_nacionalidade create
   */
  export type tbl_nacionalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_nacionalidade.
     */
    data: XOR<tbl_nacionalidadeCreateInput, tbl_nacionalidadeUncheckedCreateInput>
  }

  /**
   * tbl_nacionalidade createMany
   */
  export type tbl_nacionalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_nacionalidades.
     */
    data: tbl_nacionalidadeCreateManyInput | tbl_nacionalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_nacionalidade createManyAndReturn
   */
  export type tbl_nacionalidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_nacionalidades.
     */
    data: tbl_nacionalidadeCreateManyInput | tbl_nacionalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_nacionalidade update
   */
  export type tbl_nacionalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_nacionalidade.
     */
    data: XOR<tbl_nacionalidadeUpdateInput, tbl_nacionalidadeUncheckedUpdateInput>
    /**
     * Choose, which tbl_nacionalidade to update.
     */
    where: tbl_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_nacionalidade updateMany
   */
  export type tbl_nacionalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_nacionalidades.
     */
    data: XOR<tbl_nacionalidadeUpdateManyMutationInput, tbl_nacionalidadeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_nacionalidades to update
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * Limit how many tbl_nacionalidades to update.
     */
    limit?: number
  }

  /**
   * tbl_nacionalidade updateManyAndReturn
   */
  export type tbl_nacionalidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * The data used to update tbl_nacionalidades.
     */
    data: XOR<tbl_nacionalidadeUpdateManyMutationInput, tbl_nacionalidadeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_nacionalidades to update
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * Limit how many tbl_nacionalidades to update.
     */
    limit?: number
  }

  /**
   * tbl_nacionalidade upsert
   */
  export type tbl_nacionalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_nacionalidade to update in case it exists.
     */
    where: tbl_nacionalidadeWhereUniqueInput
    /**
     * In case the tbl_nacionalidade found by the `where` argument doesn't exist, create a new tbl_nacionalidade with this data.
     */
    create: XOR<tbl_nacionalidadeCreateInput, tbl_nacionalidadeUncheckedCreateInput>
    /**
     * In case the tbl_nacionalidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_nacionalidadeUpdateInput, tbl_nacionalidadeUncheckedUpdateInput>
  }

  /**
   * tbl_nacionalidade delete
   */
  export type tbl_nacionalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter which tbl_nacionalidade to delete.
     */
    where: tbl_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_nacionalidade deleteMany
   */
  export type tbl_nacionalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_nacionalidades to delete
     */
    where?: tbl_nacionalidadeWhereInput
    /**
     * Limit how many tbl_nacionalidades to delete.
     */
    limit?: number
  }

  /**
   * tbl_nacionalidade.diretores
   */
  export type tbl_nacionalidade$diretoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    where?: tbl_diretor_nacionalidadeWhereInput
    orderBy?: tbl_diretor_nacionalidadeOrderByWithRelationInput | tbl_diretor_nacionalidadeOrderByWithRelationInput[]
    cursor?: tbl_diretor_nacionalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_diretor_nacionalidadeScalarFieldEnum | Tbl_diretor_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_nacionalidade.atores
   */
  export type tbl_nacionalidade$atoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    where?: tbl_ator_nacionalidadeWhereInput
    orderBy?: tbl_ator_nacionalidadeOrderByWithRelationInput | tbl_ator_nacionalidadeOrderByWithRelationInput[]
    cursor?: tbl_ator_nacionalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_ator_nacionalidadeScalarFieldEnum | Tbl_ator_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_nacionalidade without action
   */
  export type tbl_nacionalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_nacionalidade
     */
    select?: tbl_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_nacionalidade
     */
    omit?: tbl_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_nacionalidadeInclude<ExtArgs> | null
  }


  /**
   * Model tbl_diretor_nacionalidade
   */

  export type AggregateTbl_diretor_nacionalidade = {
    _count: Tbl_diretor_nacionalidadeCountAggregateOutputType | null
    _avg: Tbl_diretor_nacionalidadeAvgAggregateOutputType | null
    _sum: Tbl_diretor_nacionalidadeSumAggregateOutputType | null
    _min: Tbl_diretor_nacionalidadeMinAggregateOutputType | null
    _max: Tbl_diretor_nacionalidadeMaxAggregateOutputType | null
  }

  export type Tbl_diretor_nacionalidadeAvgAggregateOutputType = {
    id: number | null
    id_diretor: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_diretor_nacionalidadeSumAggregateOutputType = {
    id: number | null
    id_diretor: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_diretor_nacionalidadeMinAggregateOutputType = {
    id: number | null
    id_diretor: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_diretor_nacionalidadeMaxAggregateOutputType = {
    id: number | null
    id_diretor: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_diretor_nacionalidadeCountAggregateOutputType = {
    id: number
    id_diretor: number
    id_nacionalidade: number
    _all: number
  }


  export type Tbl_diretor_nacionalidadeAvgAggregateInputType = {
    id?: true
    id_diretor?: true
    id_nacionalidade?: true
  }

  export type Tbl_diretor_nacionalidadeSumAggregateInputType = {
    id?: true
    id_diretor?: true
    id_nacionalidade?: true
  }

  export type Tbl_diretor_nacionalidadeMinAggregateInputType = {
    id?: true
    id_diretor?: true
    id_nacionalidade?: true
  }

  export type Tbl_diretor_nacionalidadeMaxAggregateInputType = {
    id?: true
    id_diretor?: true
    id_nacionalidade?: true
  }

  export type Tbl_diretor_nacionalidadeCountAggregateInputType = {
    id?: true
    id_diretor?: true
    id_nacionalidade?: true
    _all?: true
  }

  export type Tbl_diretor_nacionalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_diretor_nacionalidade to aggregate.
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretor_nacionalidades to fetch.
     */
    orderBy?: tbl_diretor_nacionalidadeOrderByWithRelationInput | tbl_diretor_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_diretor_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretor_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretor_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_diretor_nacionalidades
    **/
    _count?: true | Tbl_diretor_nacionalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_diretor_nacionalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_diretor_nacionalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_diretor_nacionalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_diretor_nacionalidadeMaxAggregateInputType
  }

  export type GetTbl_diretor_nacionalidadeAggregateType<T extends Tbl_diretor_nacionalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_diretor_nacionalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_diretor_nacionalidade[P]>
      : GetScalarType<T[P], AggregateTbl_diretor_nacionalidade[P]>
  }




  export type tbl_diretor_nacionalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_diretor_nacionalidadeWhereInput
    orderBy?: tbl_diretor_nacionalidadeOrderByWithAggregationInput | tbl_diretor_nacionalidadeOrderByWithAggregationInput[]
    by: Tbl_diretor_nacionalidadeScalarFieldEnum[] | Tbl_diretor_nacionalidadeScalarFieldEnum
    having?: tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_diretor_nacionalidadeCountAggregateInputType | true
    _avg?: Tbl_diretor_nacionalidadeAvgAggregateInputType
    _sum?: Tbl_diretor_nacionalidadeSumAggregateInputType
    _min?: Tbl_diretor_nacionalidadeMinAggregateInputType
    _max?: Tbl_diretor_nacionalidadeMaxAggregateInputType
  }

  export type Tbl_diretor_nacionalidadeGroupByOutputType = {
    id: number
    id_diretor: number
    id_nacionalidade: number
    _count: Tbl_diretor_nacionalidadeCountAggregateOutputType | null
    _avg: Tbl_diretor_nacionalidadeAvgAggregateOutputType | null
    _sum: Tbl_diretor_nacionalidadeSumAggregateOutputType | null
    _min: Tbl_diretor_nacionalidadeMinAggregateOutputType | null
    _max: Tbl_diretor_nacionalidadeMaxAggregateOutputType | null
  }

  type GetTbl_diretor_nacionalidadeGroupByPayload<T extends tbl_diretor_nacionalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_diretor_nacionalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_diretor_nacionalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_diretor_nacionalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_diretor_nacionalidadeGroupByOutputType[P]>
        }
      >
    >


  export type tbl_diretor_nacionalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_diretor?: boolean
    id_nacionalidade?: boolean
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_diretor_nacionalidade"]>

  export type tbl_diretor_nacionalidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_diretor?: boolean
    id_nacionalidade?: boolean
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_diretor_nacionalidade"]>

  export type tbl_diretor_nacionalidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_diretor?: boolean
    id_nacionalidade?: boolean
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_diretor_nacionalidade"]>

  export type tbl_diretor_nacionalidadeSelectScalar = {
    id?: boolean
    id_diretor?: boolean
    id_nacionalidade?: boolean
  }

  export type tbl_diretor_nacionalidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_diretor" | "id_nacionalidade", ExtArgs["result"]["tbl_diretor_nacionalidade"]>
  export type tbl_diretor_nacionalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }
  export type tbl_diretor_nacionalidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }
  export type tbl_diretor_nacionalidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretor?: boolean | tbl_diretorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }

  export type $tbl_diretor_nacionalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_diretor_nacionalidade"
    objects: {
      diretor: Prisma.$tbl_diretorPayload<ExtArgs>
      nacionalidade: Prisma.$tbl_nacionalidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_diretor: number
      id_nacionalidade: number
    }, ExtArgs["result"]["tbl_diretor_nacionalidade"]>
    composites: {}
  }

  type tbl_diretor_nacionalidadeGetPayload<S extends boolean | null | undefined | tbl_diretor_nacionalidadeDefaultArgs> = $Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload, S>

  type tbl_diretor_nacionalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_diretor_nacionalidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_diretor_nacionalidadeCountAggregateInputType | true
    }

  export interface tbl_diretor_nacionalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_diretor_nacionalidade'], meta: { name: 'tbl_diretor_nacionalidade' } }
    /**
     * Find zero or one Tbl_diretor_nacionalidade that matches the filter.
     * @param {tbl_diretor_nacionalidadeFindUniqueArgs} args - Arguments to find a Tbl_diretor_nacionalidade
     * @example
     * // Get one Tbl_diretor_nacionalidade
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_diretor_nacionalidadeFindUniqueArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeFindUniqueArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_diretor_nacionalidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_diretor_nacionalidadeFindUniqueOrThrowArgs} args - Arguments to find a Tbl_diretor_nacionalidade
     * @example
     * // Get one Tbl_diretor_nacionalidade
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_diretor_nacionalidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_diretor_nacionalidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretor_nacionalidadeFindFirstArgs} args - Arguments to find a Tbl_diretor_nacionalidade
     * @example
     * // Get one Tbl_diretor_nacionalidade
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_diretor_nacionalidadeFindFirstArgs>(args?: SelectSubset<T, tbl_diretor_nacionalidadeFindFirstArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_diretor_nacionalidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretor_nacionalidadeFindFirstOrThrowArgs} args - Arguments to find a Tbl_diretor_nacionalidade
     * @example
     * // Get one Tbl_diretor_nacionalidade
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_diretor_nacionalidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_diretor_nacionalidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_diretor_nacionalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretor_nacionalidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_diretor_nacionalidades
     * const tbl_diretor_nacionalidades = await prisma.tbl_diretor_nacionalidade.findMany()
     * 
     * // Get first 10 Tbl_diretor_nacionalidades
     * const tbl_diretor_nacionalidades = await prisma.tbl_diretor_nacionalidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_diretor_nacionalidadeWithIdOnly = await prisma.tbl_diretor_nacionalidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_diretor_nacionalidadeFindManyArgs>(args?: SelectSubset<T, tbl_diretor_nacionalidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_diretor_nacionalidade.
     * @param {tbl_diretor_nacionalidadeCreateArgs} args - Arguments to create a Tbl_diretor_nacionalidade.
     * @example
     * // Create one Tbl_diretor_nacionalidade
     * const Tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.create({
     *   data: {
     *     // ... data to create a Tbl_diretor_nacionalidade
     *   }
     * })
     * 
     */
    create<T extends tbl_diretor_nacionalidadeCreateArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeCreateArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_diretor_nacionalidades.
     * @param {tbl_diretor_nacionalidadeCreateManyArgs} args - Arguments to create many Tbl_diretor_nacionalidades.
     * @example
     * // Create many Tbl_diretor_nacionalidades
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_diretor_nacionalidadeCreateManyArgs>(args?: SelectSubset<T, tbl_diretor_nacionalidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_diretor_nacionalidades and returns the data saved in the database.
     * @param {tbl_diretor_nacionalidadeCreateManyAndReturnArgs} args - Arguments to create many Tbl_diretor_nacionalidades.
     * @example
     * // Create many Tbl_diretor_nacionalidades
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_diretor_nacionalidades and only return the `id`
     * const tbl_diretor_nacionalidadeWithIdOnly = await prisma.tbl_diretor_nacionalidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_diretor_nacionalidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_diretor_nacionalidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_diretor_nacionalidade.
     * @param {tbl_diretor_nacionalidadeDeleteArgs} args - Arguments to delete one Tbl_diretor_nacionalidade.
     * @example
     * // Delete one Tbl_diretor_nacionalidade
     * const Tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.delete({
     *   where: {
     *     // ... filter to delete one Tbl_diretor_nacionalidade
     *   }
     * })
     * 
     */
    delete<T extends tbl_diretor_nacionalidadeDeleteArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeDeleteArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_diretor_nacionalidade.
     * @param {tbl_diretor_nacionalidadeUpdateArgs} args - Arguments to update one Tbl_diretor_nacionalidade.
     * @example
     * // Update one Tbl_diretor_nacionalidade
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_diretor_nacionalidadeUpdateArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeUpdateArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_diretor_nacionalidades.
     * @param {tbl_diretor_nacionalidadeDeleteManyArgs} args - Arguments to filter Tbl_diretor_nacionalidades to delete.
     * @example
     * // Delete a few Tbl_diretor_nacionalidades
     * const { count } = await prisma.tbl_diretor_nacionalidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_diretor_nacionalidadeDeleteManyArgs>(args?: SelectSubset<T, tbl_diretor_nacionalidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_diretor_nacionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretor_nacionalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_diretor_nacionalidades
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_diretor_nacionalidadeUpdateManyArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_diretor_nacionalidades and returns the data updated in the database.
     * @param {tbl_diretor_nacionalidadeUpdateManyAndReturnArgs} args - Arguments to update many Tbl_diretor_nacionalidades.
     * @example
     * // Update many Tbl_diretor_nacionalidades
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_diretor_nacionalidades and only return the `id`
     * const tbl_diretor_nacionalidadeWithIdOnly = await prisma.tbl_diretor_nacionalidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_diretor_nacionalidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_diretor_nacionalidade.
     * @param {tbl_diretor_nacionalidadeUpsertArgs} args - Arguments to update or create a Tbl_diretor_nacionalidade.
     * @example
     * // Update or create a Tbl_diretor_nacionalidade
     * const tbl_diretor_nacionalidade = await prisma.tbl_diretor_nacionalidade.upsert({
     *   create: {
     *     // ... data to create a Tbl_diretor_nacionalidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_diretor_nacionalidade we want to update
     *   }
     * })
     */
    upsert<T extends tbl_diretor_nacionalidadeUpsertArgs>(args: SelectSubset<T, tbl_diretor_nacionalidadeUpsertArgs<ExtArgs>>): Prisma__tbl_diretor_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_diretor_nacionalidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_diretor_nacionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretor_nacionalidadeCountArgs} args - Arguments to filter Tbl_diretor_nacionalidades to count.
     * @example
     * // Count the number of Tbl_diretor_nacionalidades
     * const count = await prisma.tbl_diretor_nacionalidade.count({
     *   where: {
     *     // ... the filter for the Tbl_diretor_nacionalidades we want to count
     *   }
     * })
    **/
    count<T extends tbl_diretor_nacionalidadeCountArgs>(
      args?: Subset<T, tbl_diretor_nacionalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_diretor_nacionalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_diretor_nacionalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_diretor_nacionalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_diretor_nacionalidadeAggregateArgs>(args: Subset<T, Tbl_diretor_nacionalidadeAggregateArgs>): Prisma.PrismaPromise<GetTbl_diretor_nacionalidadeAggregateType<T>>

    /**
     * Group by Tbl_diretor_nacionalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_diretor_nacionalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_diretor_nacionalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_diretor_nacionalidadeGroupByArgs['orderBy'] }
        : { orderBy?: tbl_diretor_nacionalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_diretor_nacionalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_diretor_nacionalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_diretor_nacionalidade model
   */
  readonly fields: tbl_diretor_nacionalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_diretor_nacionalidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_diretor_nacionalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diretor<T extends tbl_diretorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_diretorDefaultArgs<ExtArgs>>): Prisma__tbl_diretorClient<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nacionalidade<T extends tbl_nacionalidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_nacionalidadeDefaultArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_diretor_nacionalidade model
   */
  interface tbl_diretor_nacionalidadeFieldRefs {
    readonly id: FieldRef<"tbl_diretor_nacionalidade", 'Int'>
    readonly id_diretor: FieldRef<"tbl_diretor_nacionalidade", 'Int'>
    readonly id_nacionalidade: FieldRef<"tbl_diretor_nacionalidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_diretor_nacionalidade findUnique
   */
  export type tbl_diretor_nacionalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor_nacionalidade to fetch.
     */
    where: tbl_diretor_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_diretor_nacionalidade findUniqueOrThrow
   */
  export type tbl_diretor_nacionalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor_nacionalidade to fetch.
     */
    where: tbl_diretor_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_diretor_nacionalidade findFirst
   */
  export type tbl_diretor_nacionalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor_nacionalidade to fetch.
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretor_nacionalidades to fetch.
     */
    orderBy?: tbl_diretor_nacionalidadeOrderByWithRelationInput | tbl_diretor_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_diretor_nacionalidades.
     */
    cursor?: tbl_diretor_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretor_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretor_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_diretor_nacionalidades.
     */
    distinct?: Tbl_diretor_nacionalidadeScalarFieldEnum | Tbl_diretor_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_diretor_nacionalidade findFirstOrThrow
   */
  export type tbl_diretor_nacionalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor_nacionalidade to fetch.
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretor_nacionalidades to fetch.
     */
    orderBy?: tbl_diretor_nacionalidadeOrderByWithRelationInput | tbl_diretor_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_diretor_nacionalidades.
     */
    cursor?: tbl_diretor_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretor_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretor_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_diretor_nacionalidades.
     */
    distinct?: Tbl_diretor_nacionalidadeScalarFieldEnum | Tbl_diretor_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_diretor_nacionalidade findMany
   */
  export type tbl_diretor_nacionalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_diretor_nacionalidades to fetch.
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_diretor_nacionalidades to fetch.
     */
    orderBy?: tbl_diretor_nacionalidadeOrderByWithRelationInput | tbl_diretor_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_diretor_nacionalidades.
     */
    cursor?: tbl_diretor_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_diretor_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_diretor_nacionalidades.
     */
    skip?: number
    distinct?: Tbl_diretor_nacionalidadeScalarFieldEnum | Tbl_diretor_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_diretor_nacionalidade create
   */
  export type tbl_diretor_nacionalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_diretor_nacionalidade.
     */
    data: XOR<tbl_diretor_nacionalidadeCreateInput, tbl_diretor_nacionalidadeUncheckedCreateInput>
  }

  /**
   * tbl_diretor_nacionalidade createMany
   */
  export type tbl_diretor_nacionalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_diretor_nacionalidades.
     */
    data: tbl_diretor_nacionalidadeCreateManyInput | tbl_diretor_nacionalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_diretor_nacionalidade createManyAndReturn
   */
  export type tbl_diretor_nacionalidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_diretor_nacionalidades.
     */
    data: tbl_diretor_nacionalidadeCreateManyInput | tbl_diretor_nacionalidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_diretor_nacionalidade update
   */
  export type tbl_diretor_nacionalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_diretor_nacionalidade.
     */
    data: XOR<tbl_diretor_nacionalidadeUpdateInput, tbl_diretor_nacionalidadeUncheckedUpdateInput>
    /**
     * Choose, which tbl_diretor_nacionalidade to update.
     */
    where: tbl_diretor_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_diretor_nacionalidade updateMany
   */
  export type tbl_diretor_nacionalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_diretor_nacionalidades.
     */
    data: XOR<tbl_diretor_nacionalidadeUpdateManyMutationInput, tbl_diretor_nacionalidadeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_diretor_nacionalidades to update
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * Limit how many tbl_diretor_nacionalidades to update.
     */
    limit?: number
  }

  /**
   * tbl_diretor_nacionalidade updateManyAndReturn
   */
  export type tbl_diretor_nacionalidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * The data used to update tbl_diretor_nacionalidades.
     */
    data: XOR<tbl_diretor_nacionalidadeUpdateManyMutationInput, tbl_diretor_nacionalidadeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_diretor_nacionalidades to update
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * Limit how many tbl_diretor_nacionalidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_diretor_nacionalidade upsert
   */
  export type tbl_diretor_nacionalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_diretor_nacionalidade to update in case it exists.
     */
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    /**
     * In case the tbl_diretor_nacionalidade found by the `where` argument doesn't exist, create a new tbl_diretor_nacionalidade with this data.
     */
    create: XOR<tbl_diretor_nacionalidadeCreateInput, tbl_diretor_nacionalidadeUncheckedCreateInput>
    /**
     * In case the tbl_diretor_nacionalidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_diretor_nacionalidadeUpdateInput, tbl_diretor_nacionalidadeUncheckedUpdateInput>
  }

  /**
   * tbl_diretor_nacionalidade delete
   */
  export type tbl_diretor_nacionalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter which tbl_diretor_nacionalidade to delete.
     */
    where: tbl_diretor_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_diretor_nacionalidade deleteMany
   */
  export type tbl_diretor_nacionalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_diretor_nacionalidades to delete
     */
    where?: tbl_diretor_nacionalidadeWhereInput
    /**
     * Limit how many tbl_diretor_nacionalidades to delete.
     */
    limit?: number
  }

  /**
   * tbl_diretor_nacionalidade without action
   */
  export type tbl_diretor_nacionalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor_nacionalidade
     */
    select?: tbl_diretor_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor_nacionalidade
     */
    omit?: tbl_diretor_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretor_nacionalidadeInclude<ExtArgs> | null
  }


  /**
   * Model tbl_ator_nacionalidade
   */

  export type AggregateTbl_ator_nacionalidade = {
    _count: Tbl_ator_nacionalidadeCountAggregateOutputType | null
    _avg: Tbl_ator_nacionalidadeAvgAggregateOutputType | null
    _sum: Tbl_ator_nacionalidadeSumAggregateOutputType | null
    _min: Tbl_ator_nacionalidadeMinAggregateOutputType | null
    _max: Tbl_ator_nacionalidadeMaxAggregateOutputType | null
  }

  export type Tbl_ator_nacionalidadeAvgAggregateOutputType = {
    id: number | null
    id_ator: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_ator_nacionalidadeSumAggregateOutputType = {
    id: number | null
    id_ator: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_ator_nacionalidadeMinAggregateOutputType = {
    id: number | null
    id_ator: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_ator_nacionalidadeMaxAggregateOutputType = {
    id: number | null
    id_ator: number | null
    id_nacionalidade: number | null
  }

  export type Tbl_ator_nacionalidadeCountAggregateOutputType = {
    id: number
    id_ator: number
    id_nacionalidade: number
    _all: number
  }


  export type Tbl_ator_nacionalidadeAvgAggregateInputType = {
    id?: true
    id_ator?: true
    id_nacionalidade?: true
  }

  export type Tbl_ator_nacionalidadeSumAggregateInputType = {
    id?: true
    id_ator?: true
    id_nacionalidade?: true
  }

  export type Tbl_ator_nacionalidadeMinAggregateInputType = {
    id?: true
    id_ator?: true
    id_nacionalidade?: true
  }

  export type Tbl_ator_nacionalidadeMaxAggregateInputType = {
    id?: true
    id_ator?: true
    id_nacionalidade?: true
  }

  export type Tbl_ator_nacionalidadeCountAggregateInputType = {
    id?: true
    id_ator?: true
    id_nacionalidade?: true
    _all?: true
  }

  export type Tbl_ator_nacionalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ator_nacionalidade to aggregate.
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ator_nacionalidades to fetch.
     */
    orderBy?: tbl_ator_nacionalidadeOrderByWithRelationInput | tbl_ator_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_ator_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ator_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ator_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_ator_nacionalidades
    **/
    _count?: true | Tbl_ator_nacionalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_ator_nacionalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_ator_nacionalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_ator_nacionalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_ator_nacionalidadeMaxAggregateInputType
  }

  export type GetTbl_ator_nacionalidadeAggregateType<T extends Tbl_ator_nacionalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_ator_nacionalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_ator_nacionalidade[P]>
      : GetScalarType<T[P], AggregateTbl_ator_nacionalidade[P]>
  }




  export type tbl_ator_nacionalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_ator_nacionalidadeWhereInput
    orderBy?: tbl_ator_nacionalidadeOrderByWithAggregationInput | tbl_ator_nacionalidadeOrderByWithAggregationInput[]
    by: Tbl_ator_nacionalidadeScalarFieldEnum[] | Tbl_ator_nacionalidadeScalarFieldEnum
    having?: tbl_ator_nacionalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_ator_nacionalidadeCountAggregateInputType | true
    _avg?: Tbl_ator_nacionalidadeAvgAggregateInputType
    _sum?: Tbl_ator_nacionalidadeSumAggregateInputType
    _min?: Tbl_ator_nacionalidadeMinAggregateInputType
    _max?: Tbl_ator_nacionalidadeMaxAggregateInputType
  }

  export type Tbl_ator_nacionalidadeGroupByOutputType = {
    id: number
    id_ator: number
    id_nacionalidade: number
    _count: Tbl_ator_nacionalidadeCountAggregateOutputType | null
    _avg: Tbl_ator_nacionalidadeAvgAggregateOutputType | null
    _sum: Tbl_ator_nacionalidadeSumAggregateOutputType | null
    _min: Tbl_ator_nacionalidadeMinAggregateOutputType | null
    _max: Tbl_ator_nacionalidadeMaxAggregateOutputType | null
  }

  type GetTbl_ator_nacionalidadeGroupByPayload<T extends tbl_ator_nacionalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_ator_nacionalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_ator_nacionalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_ator_nacionalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_ator_nacionalidadeGroupByOutputType[P]>
        }
      >
    >


  export type tbl_ator_nacionalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ator?: boolean
    id_nacionalidade?: boolean
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ator_nacionalidade"]>

  export type tbl_ator_nacionalidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ator?: boolean
    id_nacionalidade?: boolean
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ator_nacionalidade"]>

  export type tbl_ator_nacionalidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ator?: boolean
    id_nacionalidade?: boolean
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ator_nacionalidade"]>

  export type tbl_ator_nacionalidadeSelectScalar = {
    id?: boolean
    id_ator?: boolean
    id_nacionalidade?: boolean
  }

  export type tbl_ator_nacionalidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ator" | "id_nacionalidade", ExtArgs["result"]["tbl_ator_nacionalidade"]>
  export type tbl_ator_nacionalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }
  export type tbl_ator_nacionalidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }
  export type tbl_ator_nacionalidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ator?: boolean | tbl_atorDefaultArgs<ExtArgs>
    nacionalidade?: boolean | tbl_nacionalidadeDefaultArgs<ExtArgs>
  }

  export type $tbl_ator_nacionalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_ator_nacionalidade"
    objects: {
      ator: Prisma.$tbl_atorPayload<ExtArgs>
      nacionalidade: Prisma.$tbl_nacionalidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_ator: number
      id_nacionalidade: number
    }, ExtArgs["result"]["tbl_ator_nacionalidade"]>
    composites: {}
  }

  type tbl_ator_nacionalidadeGetPayload<S extends boolean | null | undefined | tbl_ator_nacionalidadeDefaultArgs> = $Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload, S>

  type tbl_ator_nacionalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_ator_nacionalidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_ator_nacionalidadeCountAggregateInputType | true
    }

  export interface tbl_ator_nacionalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_ator_nacionalidade'], meta: { name: 'tbl_ator_nacionalidade' } }
    /**
     * Find zero or one Tbl_ator_nacionalidade that matches the filter.
     * @param {tbl_ator_nacionalidadeFindUniqueArgs} args - Arguments to find a Tbl_ator_nacionalidade
     * @example
     * // Get one Tbl_ator_nacionalidade
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_ator_nacionalidadeFindUniqueArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeFindUniqueArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_ator_nacionalidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_ator_nacionalidadeFindUniqueOrThrowArgs} args - Arguments to find a Tbl_ator_nacionalidade
     * @example
     * // Get one Tbl_ator_nacionalidade
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_ator_nacionalidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_ator_nacionalidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ator_nacionalidadeFindFirstArgs} args - Arguments to find a Tbl_ator_nacionalidade
     * @example
     * // Get one Tbl_ator_nacionalidade
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_ator_nacionalidadeFindFirstArgs>(args?: SelectSubset<T, tbl_ator_nacionalidadeFindFirstArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_ator_nacionalidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ator_nacionalidadeFindFirstOrThrowArgs} args - Arguments to find a Tbl_ator_nacionalidade
     * @example
     * // Get one Tbl_ator_nacionalidade
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_ator_nacionalidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_ator_nacionalidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_ator_nacionalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ator_nacionalidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_ator_nacionalidades
     * const tbl_ator_nacionalidades = await prisma.tbl_ator_nacionalidade.findMany()
     * 
     * // Get first 10 Tbl_ator_nacionalidades
     * const tbl_ator_nacionalidades = await prisma.tbl_ator_nacionalidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_ator_nacionalidadeWithIdOnly = await prisma.tbl_ator_nacionalidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_ator_nacionalidadeFindManyArgs>(args?: SelectSubset<T, tbl_ator_nacionalidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_ator_nacionalidade.
     * @param {tbl_ator_nacionalidadeCreateArgs} args - Arguments to create a Tbl_ator_nacionalidade.
     * @example
     * // Create one Tbl_ator_nacionalidade
     * const Tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.create({
     *   data: {
     *     // ... data to create a Tbl_ator_nacionalidade
     *   }
     * })
     * 
     */
    create<T extends tbl_ator_nacionalidadeCreateArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeCreateArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_ator_nacionalidades.
     * @param {tbl_ator_nacionalidadeCreateManyArgs} args - Arguments to create many Tbl_ator_nacionalidades.
     * @example
     * // Create many Tbl_ator_nacionalidades
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_ator_nacionalidadeCreateManyArgs>(args?: SelectSubset<T, tbl_ator_nacionalidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_ator_nacionalidades and returns the data saved in the database.
     * @param {tbl_ator_nacionalidadeCreateManyAndReturnArgs} args - Arguments to create many Tbl_ator_nacionalidades.
     * @example
     * // Create many Tbl_ator_nacionalidades
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_ator_nacionalidades and only return the `id`
     * const tbl_ator_nacionalidadeWithIdOnly = await prisma.tbl_ator_nacionalidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_ator_nacionalidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_ator_nacionalidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_ator_nacionalidade.
     * @param {tbl_ator_nacionalidadeDeleteArgs} args - Arguments to delete one Tbl_ator_nacionalidade.
     * @example
     * // Delete one Tbl_ator_nacionalidade
     * const Tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.delete({
     *   where: {
     *     // ... filter to delete one Tbl_ator_nacionalidade
     *   }
     * })
     * 
     */
    delete<T extends tbl_ator_nacionalidadeDeleteArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeDeleteArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_ator_nacionalidade.
     * @param {tbl_ator_nacionalidadeUpdateArgs} args - Arguments to update one Tbl_ator_nacionalidade.
     * @example
     * // Update one Tbl_ator_nacionalidade
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_ator_nacionalidadeUpdateArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeUpdateArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_ator_nacionalidades.
     * @param {tbl_ator_nacionalidadeDeleteManyArgs} args - Arguments to filter Tbl_ator_nacionalidades to delete.
     * @example
     * // Delete a few Tbl_ator_nacionalidades
     * const { count } = await prisma.tbl_ator_nacionalidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_ator_nacionalidadeDeleteManyArgs>(args?: SelectSubset<T, tbl_ator_nacionalidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_ator_nacionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ator_nacionalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_ator_nacionalidades
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_ator_nacionalidadeUpdateManyArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_ator_nacionalidades and returns the data updated in the database.
     * @param {tbl_ator_nacionalidadeUpdateManyAndReturnArgs} args - Arguments to update many Tbl_ator_nacionalidades.
     * @example
     * // Update many Tbl_ator_nacionalidades
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_ator_nacionalidades and only return the `id`
     * const tbl_ator_nacionalidadeWithIdOnly = await prisma.tbl_ator_nacionalidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_ator_nacionalidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_ator_nacionalidade.
     * @param {tbl_ator_nacionalidadeUpsertArgs} args - Arguments to update or create a Tbl_ator_nacionalidade.
     * @example
     * // Update or create a Tbl_ator_nacionalidade
     * const tbl_ator_nacionalidade = await prisma.tbl_ator_nacionalidade.upsert({
     *   create: {
     *     // ... data to create a Tbl_ator_nacionalidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_ator_nacionalidade we want to update
     *   }
     * })
     */
    upsert<T extends tbl_ator_nacionalidadeUpsertArgs>(args: SelectSubset<T, tbl_ator_nacionalidadeUpsertArgs<ExtArgs>>): Prisma__tbl_ator_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_ator_nacionalidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_ator_nacionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ator_nacionalidadeCountArgs} args - Arguments to filter Tbl_ator_nacionalidades to count.
     * @example
     * // Count the number of Tbl_ator_nacionalidades
     * const count = await prisma.tbl_ator_nacionalidade.count({
     *   where: {
     *     // ... the filter for the Tbl_ator_nacionalidades we want to count
     *   }
     * })
    **/
    count<T extends tbl_ator_nacionalidadeCountArgs>(
      args?: Subset<T, tbl_ator_nacionalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_ator_nacionalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_ator_nacionalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_ator_nacionalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_ator_nacionalidadeAggregateArgs>(args: Subset<T, Tbl_ator_nacionalidadeAggregateArgs>): Prisma.PrismaPromise<GetTbl_ator_nacionalidadeAggregateType<T>>

    /**
     * Group by Tbl_ator_nacionalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ator_nacionalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_ator_nacionalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_ator_nacionalidadeGroupByArgs['orderBy'] }
        : { orderBy?: tbl_ator_nacionalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_ator_nacionalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_ator_nacionalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_ator_nacionalidade model
   */
  readonly fields: tbl_ator_nacionalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_ator_nacionalidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_ator_nacionalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ator<T extends tbl_atorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_atorDefaultArgs<ExtArgs>>): Prisma__tbl_atorClient<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nacionalidade<T extends tbl_nacionalidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_nacionalidadeDefaultArgs<ExtArgs>>): Prisma__tbl_nacionalidadeClient<$Result.GetResult<Prisma.$tbl_nacionalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_ator_nacionalidade model
   */
  interface tbl_ator_nacionalidadeFieldRefs {
    readonly id: FieldRef<"tbl_ator_nacionalidade", 'Int'>
    readonly id_ator: FieldRef<"tbl_ator_nacionalidade", 'Int'>
    readonly id_nacionalidade: FieldRef<"tbl_ator_nacionalidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_ator_nacionalidade findUnique
   */
  export type tbl_ator_nacionalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator_nacionalidade to fetch.
     */
    where: tbl_ator_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_ator_nacionalidade findUniqueOrThrow
   */
  export type tbl_ator_nacionalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator_nacionalidade to fetch.
     */
    where: tbl_ator_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_ator_nacionalidade findFirst
   */
  export type tbl_ator_nacionalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator_nacionalidade to fetch.
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ator_nacionalidades to fetch.
     */
    orderBy?: tbl_ator_nacionalidadeOrderByWithRelationInput | tbl_ator_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_ator_nacionalidades.
     */
    cursor?: tbl_ator_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ator_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ator_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_ator_nacionalidades.
     */
    distinct?: Tbl_ator_nacionalidadeScalarFieldEnum | Tbl_ator_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_ator_nacionalidade findFirstOrThrow
   */
  export type tbl_ator_nacionalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator_nacionalidade to fetch.
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ator_nacionalidades to fetch.
     */
    orderBy?: tbl_ator_nacionalidadeOrderByWithRelationInput | tbl_ator_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_ator_nacionalidades.
     */
    cursor?: tbl_ator_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ator_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ator_nacionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_ator_nacionalidades.
     */
    distinct?: Tbl_ator_nacionalidadeScalarFieldEnum | Tbl_ator_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_ator_nacionalidade findMany
   */
  export type tbl_ator_nacionalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ator_nacionalidades to fetch.
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ator_nacionalidades to fetch.
     */
    orderBy?: tbl_ator_nacionalidadeOrderByWithRelationInput | tbl_ator_nacionalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_ator_nacionalidades.
     */
    cursor?: tbl_ator_nacionalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ator_nacionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ator_nacionalidades.
     */
    skip?: number
    distinct?: Tbl_ator_nacionalidadeScalarFieldEnum | Tbl_ator_nacionalidadeScalarFieldEnum[]
  }

  /**
   * tbl_ator_nacionalidade create
   */
  export type tbl_ator_nacionalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_ator_nacionalidade.
     */
    data: XOR<tbl_ator_nacionalidadeCreateInput, tbl_ator_nacionalidadeUncheckedCreateInput>
  }

  /**
   * tbl_ator_nacionalidade createMany
   */
  export type tbl_ator_nacionalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_ator_nacionalidades.
     */
    data: tbl_ator_nacionalidadeCreateManyInput | tbl_ator_nacionalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_ator_nacionalidade createManyAndReturn
   */
  export type tbl_ator_nacionalidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_ator_nacionalidades.
     */
    data: tbl_ator_nacionalidadeCreateManyInput | tbl_ator_nacionalidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_ator_nacionalidade update
   */
  export type tbl_ator_nacionalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_ator_nacionalidade.
     */
    data: XOR<tbl_ator_nacionalidadeUpdateInput, tbl_ator_nacionalidadeUncheckedUpdateInput>
    /**
     * Choose, which tbl_ator_nacionalidade to update.
     */
    where: tbl_ator_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_ator_nacionalidade updateMany
   */
  export type tbl_ator_nacionalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_ator_nacionalidades.
     */
    data: XOR<tbl_ator_nacionalidadeUpdateManyMutationInput, tbl_ator_nacionalidadeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_ator_nacionalidades to update
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * Limit how many tbl_ator_nacionalidades to update.
     */
    limit?: number
  }

  /**
   * tbl_ator_nacionalidade updateManyAndReturn
   */
  export type tbl_ator_nacionalidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * The data used to update tbl_ator_nacionalidades.
     */
    data: XOR<tbl_ator_nacionalidadeUpdateManyMutationInput, tbl_ator_nacionalidadeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_ator_nacionalidades to update
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * Limit how many tbl_ator_nacionalidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_ator_nacionalidade upsert
   */
  export type tbl_ator_nacionalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_ator_nacionalidade to update in case it exists.
     */
    where: tbl_ator_nacionalidadeWhereUniqueInput
    /**
     * In case the tbl_ator_nacionalidade found by the `where` argument doesn't exist, create a new tbl_ator_nacionalidade with this data.
     */
    create: XOR<tbl_ator_nacionalidadeCreateInput, tbl_ator_nacionalidadeUncheckedCreateInput>
    /**
     * In case the tbl_ator_nacionalidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_ator_nacionalidadeUpdateInput, tbl_ator_nacionalidadeUncheckedUpdateInput>
  }

  /**
   * tbl_ator_nacionalidade delete
   */
  export type tbl_ator_nacionalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
    /**
     * Filter which tbl_ator_nacionalidade to delete.
     */
    where: tbl_ator_nacionalidadeWhereUniqueInput
  }

  /**
   * tbl_ator_nacionalidade deleteMany
   */
  export type tbl_ator_nacionalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ator_nacionalidades to delete
     */
    where?: tbl_ator_nacionalidadeWhereInput
    /**
     * Limit how many tbl_ator_nacionalidades to delete.
     */
    limit?: number
  }

  /**
   * tbl_ator_nacionalidade without action
   */
  export type tbl_ator_nacionalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator_nacionalidade
     */
    select?: tbl_ator_nacionalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator_nacionalidade
     */
    omit?: tbl_ator_nacionalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_ator_nacionalidadeInclude<ExtArgs> | null
  }


  /**
   * Model tbl_sexo
   */

  export type AggregateTbl_sexo = {
    _count: Tbl_sexoCountAggregateOutputType | null
    _avg: Tbl_sexoAvgAggregateOutputType | null
    _sum: Tbl_sexoSumAggregateOutputType | null
    _min: Tbl_sexoMinAggregateOutputType | null
    _max: Tbl_sexoMaxAggregateOutputType | null
  }

  export type Tbl_sexoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_sexoSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_sexoMinAggregateOutputType = {
    id: number | null
    sigla: string | null
    nome: string | null
  }

  export type Tbl_sexoMaxAggregateOutputType = {
    id: number | null
    sigla: string | null
    nome: string | null
  }

  export type Tbl_sexoCountAggregateOutputType = {
    id: number
    sigla: number
    nome: number
    _all: number
  }


  export type Tbl_sexoAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_sexoSumAggregateInputType = {
    id?: true
  }

  export type Tbl_sexoMinAggregateInputType = {
    id?: true
    sigla?: true
    nome?: true
  }

  export type Tbl_sexoMaxAggregateInputType = {
    id?: true
    sigla?: true
    nome?: true
  }

  export type Tbl_sexoCountAggregateInputType = {
    id?: true
    sigla?: true
    nome?: true
    _all?: true
  }

  export type Tbl_sexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_sexo to aggregate.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_sexos
    **/
    _count?: true | Tbl_sexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_sexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_sexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_sexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_sexoMaxAggregateInputType
  }

  export type GetTbl_sexoAggregateType<T extends Tbl_sexoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_sexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_sexo[P]>
      : GetScalarType<T[P], AggregateTbl_sexo[P]>
  }




  export type tbl_sexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_sexoWhereInput
    orderBy?: tbl_sexoOrderByWithAggregationInput | tbl_sexoOrderByWithAggregationInput[]
    by: Tbl_sexoScalarFieldEnum[] | Tbl_sexoScalarFieldEnum
    having?: tbl_sexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_sexoCountAggregateInputType | true
    _avg?: Tbl_sexoAvgAggregateInputType
    _sum?: Tbl_sexoSumAggregateInputType
    _min?: Tbl_sexoMinAggregateInputType
    _max?: Tbl_sexoMaxAggregateInputType
  }

  export type Tbl_sexoGroupByOutputType = {
    id: number
    sigla: string
    nome: string
    _count: Tbl_sexoCountAggregateOutputType | null
    _avg: Tbl_sexoAvgAggregateOutputType | null
    _sum: Tbl_sexoSumAggregateOutputType | null
    _min: Tbl_sexoMinAggregateOutputType | null
    _max: Tbl_sexoMaxAggregateOutputType | null
  }

  type GetTbl_sexoGroupByPayload<T extends tbl_sexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_sexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_sexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_sexoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_sexoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_sexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    nome?: boolean
    diretores?: boolean | tbl_sexo$diretoresArgs<ExtArgs>
    atores?: boolean | tbl_sexo$atoresArgs<ExtArgs>
    _count?: boolean | Tbl_sexoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_sexo"]>

  export type tbl_sexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tbl_sexo"]>

  export type tbl_sexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tbl_sexo"]>

  export type tbl_sexoSelectScalar = {
    id?: boolean
    sigla?: boolean
    nome?: boolean
  }

  export type tbl_sexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sigla" | "nome", ExtArgs["result"]["tbl_sexo"]>
  export type tbl_sexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diretores?: boolean | tbl_sexo$diretoresArgs<ExtArgs>
    atores?: boolean | tbl_sexo$atoresArgs<ExtArgs>
    _count?: boolean | Tbl_sexoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_sexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_sexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_sexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_sexo"
    objects: {
      diretores: Prisma.$tbl_diretorPayload<ExtArgs>[]
      atores: Prisma.$tbl_atorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sigla: string
      nome: string
    }, ExtArgs["result"]["tbl_sexo"]>
    composites: {}
  }

  type tbl_sexoGetPayload<S extends boolean | null | undefined | tbl_sexoDefaultArgs> = $Result.GetResult<Prisma.$tbl_sexoPayload, S>

  type tbl_sexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_sexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_sexoCountAggregateInputType | true
    }

  export interface tbl_sexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_sexo'], meta: { name: 'tbl_sexo' } }
    /**
     * Find zero or one Tbl_sexo that matches the filter.
     * @param {tbl_sexoFindUniqueArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_sexoFindUniqueArgs>(args: SelectSubset<T, tbl_sexoFindUniqueArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_sexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_sexoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_sexoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_sexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_sexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoFindFirstArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_sexoFindFirstArgs>(args?: SelectSubset<T, tbl_sexoFindFirstArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_sexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoFindFirstOrThrowArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_sexoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_sexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_sexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_sexos
     * const tbl_sexos = await prisma.tbl_sexo.findMany()
     * 
     * // Get first 10 Tbl_sexos
     * const tbl_sexos = await prisma.tbl_sexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_sexoWithIdOnly = await prisma.tbl_sexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_sexoFindManyArgs>(args?: SelectSubset<T, tbl_sexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_sexo.
     * @param {tbl_sexoCreateArgs} args - Arguments to create a Tbl_sexo.
     * @example
     * // Create one Tbl_sexo
     * const Tbl_sexo = await prisma.tbl_sexo.create({
     *   data: {
     *     // ... data to create a Tbl_sexo
     *   }
     * })
     * 
     */
    create<T extends tbl_sexoCreateArgs>(args: SelectSubset<T, tbl_sexoCreateArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_sexos.
     * @param {tbl_sexoCreateManyArgs} args - Arguments to create many Tbl_sexos.
     * @example
     * // Create many Tbl_sexos
     * const tbl_sexo = await prisma.tbl_sexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_sexoCreateManyArgs>(args?: SelectSubset<T, tbl_sexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_sexos and returns the data saved in the database.
     * @param {tbl_sexoCreateManyAndReturnArgs} args - Arguments to create many Tbl_sexos.
     * @example
     * // Create many Tbl_sexos
     * const tbl_sexo = await prisma.tbl_sexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_sexos and only return the `id`
     * const tbl_sexoWithIdOnly = await prisma.tbl_sexo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_sexoCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_sexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_sexo.
     * @param {tbl_sexoDeleteArgs} args - Arguments to delete one Tbl_sexo.
     * @example
     * // Delete one Tbl_sexo
     * const Tbl_sexo = await prisma.tbl_sexo.delete({
     *   where: {
     *     // ... filter to delete one Tbl_sexo
     *   }
     * })
     * 
     */
    delete<T extends tbl_sexoDeleteArgs>(args: SelectSubset<T, tbl_sexoDeleteArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_sexo.
     * @param {tbl_sexoUpdateArgs} args - Arguments to update one Tbl_sexo.
     * @example
     * // Update one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_sexoUpdateArgs>(args: SelectSubset<T, tbl_sexoUpdateArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_sexos.
     * @param {tbl_sexoDeleteManyArgs} args - Arguments to filter Tbl_sexos to delete.
     * @example
     * // Delete a few Tbl_sexos
     * const { count } = await prisma.tbl_sexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_sexoDeleteManyArgs>(args?: SelectSubset<T, tbl_sexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_sexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_sexos
     * const tbl_sexo = await prisma.tbl_sexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_sexoUpdateManyArgs>(args: SelectSubset<T, tbl_sexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_sexos and returns the data updated in the database.
     * @param {tbl_sexoUpdateManyAndReturnArgs} args - Arguments to update many Tbl_sexos.
     * @example
     * // Update many Tbl_sexos
     * const tbl_sexo = await prisma.tbl_sexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_sexos and only return the `id`
     * const tbl_sexoWithIdOnly = await prisma.tbl_sexo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tbl_sexoUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_sexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_sexo.
     * @param {tbl_sexoUpsertArgs} args - Arguments to update or create a Tbl_sexo.
     * @example
     * // Update or create a Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.upsert({
     *   create: {
     *     // ... data to create a Tbl_sexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_sexo we want to update
     *   }
     * })
     */
    upsert<T extends tbl_sexoUpsertArgs>(args: SelectSubset<T, tbl_sexoUpsertArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_sexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoCountArgs} args - Arguments to filter Tbl_sexos to count.
     * @example
     * // Count the number of Tbl_sexos
     * const count = await prisma.tbl_sexo.count({
     *   where: {
     *     // ... the filter for the Tbl_sexos we want to count
     *   }
     * })
    **/
    count<T extends tbl_sexoCountArgs>(
      args?: Subset<T, tbl_sexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_sexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_sexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_sexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_sexoAggregateArgs>(args: Subset<T, Tbl_sexoAggregateArgs>): Prisma.PrismaPromise<GetTbl_sexoAggregateType<T>>

    /**
     * Group by Tbl_sexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_sexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_sexoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_sexoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_sexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_sexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_sexo model
   */
  readonly fields: tbl_sexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_sexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_sexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diretores<T extends tbl_sexo$diretoresArgs<ExtArgs> = {}>(args?: Subset<T, tbl_sexo$diretoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_diretorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atores<T extends tbl_sexo$atoresArgs<ExtArgs> = {}>(args?: Subset<T, tbl_sexo$atoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_atorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_sexo model
   */
  interface tbl_sexoFieldRefs {
    readonly id: FieldRef<"tbl_sexo", 'Int'>
    readonly sigla: FieldRef<"tbl_sexo", 'String'>
    readonly nome: FieldRef<"tbl_sexo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_sexo findUnique
   */
  export type tbl_sexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo findUniqueOrThrow
   */
  export type tbl_sexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo findFirst
   */
  export type tbl_sexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_sexos.
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_sexos.
     */
    distinct?: Tbl_sexoScalarFieldEnum | Tbl_sexoScalarFieldEnum[]
  }

  /**
   * tbl_sexo findFirstOrThrow
   */
  export type tbl_sexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_sexos.
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_sexos.
     */
    distinct?: Tbl_sexoScalarFieldEnum | Tbl_sexoScalarFieldEnum[]
  }

  /**
   * tbl_sexo findMany
   */
  export type tbl_sexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexos to fetch.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_sexos.
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    distinct?: Tbl_sexoScalarFieldEnum | Tbl_sexoScalarFieldEnum[]
  }

  /**
   * tbl_sexo create
   */
  export type tbl_sexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_sexo.
     */
    data: XOR<tbl_sexoCreateInput, tbl_sexoUncheckedCreateInput>
  }

  /**
   * tbl_sexo createMany
   */
  export type tbl_sexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_sexos.
     */
    data: tbl_sexoCreateManyInput | tbl_sexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_sexo createManyAndReturn
   */
  export type tbl_sexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_sexos.
     */
    data: tbl_sexoCreateManyInput | tbl_sexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_sexo update
   */
  export type tbl_sexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_sexo.
     */
    data: XOR<tbl_sexoUpdateInput, tbl_sexoUncheckedUpdateInput>
    /**
     * Choose, which tbl_sexo to update.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo updateMany
   */
  export type tbl_sexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_sexos.
     */
    data: XOR<tbl_sexoUpdateManyMutationInput, tbl_sexoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_sexos to update
     */
    where?: tbl_sexoWhereInput
    /**
     * Limit how many tbl_sexos to update.
     */
    limit?: number
  }

  /**
   * tbl_sexo updateManyAndReturn
   */
  export type tbl_sexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * The data used to update tbl_sexos.
     */
    data: XOR<tbl_sexoUpdateManyMutationInput, tbl_sexoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_sexos to update
     */
    where?: tbl_sexoWhereInput
    /**
     * Limit how many tbl_sexos to update.
     */
    limit?: number
  }

  /**
   * tbl_sexo upsert
   */
  export type tbl_sexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_sexo to update in case it exists.
     */
    where: tbl_sexoWhereUniqueInput
    /**
     * In case the tbl_sexo found by the `where` argument doesn't exist, create a new tbl_sexo with this data.
     */
    create: XOR<tbl_sexoCreateInput, tbl_sexoUncheckedCreateInput>
    /**
     * In case the tbl_sexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_sexoUpdateInput, tbl_sexoUncheckedUpdateInput>
  }

  /**
   * tbl_sexo delete
   */
  export type tbl_sexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter which tbl_sexo to delete.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo deleteMany
   */
  export type tbl_sexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_sexos to delete
     */
    where?: tbl_sexoWhereInput
    /**
     * Limit how many tbl_sexos to delete.
     */
    limit?: number
  }

  /**
   * tbl_sexo.diretores
   */
  export type tbl_sexo$diretoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_diretor
     */
    select?: tbl_diretorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_diretor
     */
    omit?: tbl_diretorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_diretorInclude<ExtArgs> | null
    where?: tbl_diretorWhereInput
    orderBy?: tbl_diretorOrderByWithRelationInput | tbl_diretorOrderByWithRelationInput[]
    cursor?: tbl_diretorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_diretorScalarFieldEnum | Tbl_diretorScalarFieldEnum[]
  }

  /**
   * tbl_sexo.atores
   */
  export type tbl_sexo$atoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ator
     */
    select?: tbl_atorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_ator
     */
    omit?: tbl_atorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_atorInclude<ExtArgs> | null
    where?: tbl_atorWhereInput
    orderBy?: tbl_atorOrderByWithRelationInput | tbl_atorOrderByWithRelationInput[]
    cursor?: tbl_atorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_atorScalarFieldEnum | Tbl_atorScalarFieldEnum[]
  }

  /**
   * tbl_sexo without action
   */
  export type tbl_sexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tbl_classificacaoScalarFieldEnum: {
    id: 'id',
    sigla: 'sigla',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type Tbl_classificacaoScalarFieldEnum = (typeof Tbl_classificacaoScalarFieldEnum)[keyof typeof Tbl_classificacaoScalarFieldEnum]


  export const Tbl_generoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type Tbl_generoScalarFieldEnum = (typeof Tbl_generoScalarFieldEnum)[keyof typeof Tbl_generoScalarFieldEnum]


  export const Tbl_filme_generoScalarFieldEnum: {
    id: 'id',
    id_filme: 'id_filme',
    id_genero: 'id_genero'
  };

  export type Tbl_filme_generoScalarFieldEnum = (typeof Tbl_filme_generoScalarFieldEnum)[keyof typeof Tbl_filme_generoScalarFieldEnum]


  export const Tbl_filmeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_original: 'nome_original',
    data_lancamento: 'data_lancamento',
    data_relancamento: 'data_relancamento',
    duracao: 'duracao',
    sinopse: 'sinopse',
    foto_capa: 'foto_capa',
    id_classificacao: 'id_classificacao'
  };

  export type Tbl_filmeScalarFieldEnum = (typeof Tbl_filmeScalarFieldEnum)[keyof typeof Tbl_filmeScalarFieldEnum]


  export const Tbl_diretorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_artistico: 'nome_artistico',
    data_nascimento: 'data_nascimento',
    data_falecimento: 'data_falecimento',
    biografia: 'biografia',
    foto: 'foto',
    id_sexo: 'id_sexo'
  };

  export type Tbl_diretorScalarFieldEnum = (typeof Tbl_diretorScalarFieldEnum)[keyof typeof Tbl_diretorScalarFieldEnum]


  export const Tbl_filme_diretorScalarFieldEnum: {
    id: 'id',
    id_filme: 'id_filme',
    id_diretor: 'id_diretor'
  };

  export type Tbl_filme_diretorScalarFieldEnum = (typeof Tbl_filme_diretorScalarFieldEnum)[keyof typeof Tbl_filme_diretorScalarFieldEnum]


  export const Tbl_atorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_artistico: 'nome_artistico',
    data_nascimento: 'data_nascimento',
    data_falecimento: 'data_falecimento',
    biografia: 'biografia',
    foto: 'foto',
    id_sexo: 'id_sexo'
  };

  export type Tbl_atorScalarFieldEnum = (typeof Tbl_atorScalarFieldEnum)[keyof typeof Tbl_atorScalarFieldEnum]


  export const Tbl_filme_atorScalarFieldEnum: {
    id: 'id',
    id_filme: 'id_filme',
    id_ator: 'id_ator'
  };

  export type Tbl_filme_atorScalarFieldEnum = (typeof Tbl_filme_atorScalarFieldEnum)[keyof typeof Tbl_filme_atorScalarFieldEnum]


  export const Tbl_nacionalidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type Tbl_nacionalidadeScalarFieldEnum = (typeof Tbl_nacionalidadeScalarFieldEnum)[keyof typeof Tbl_nacionalidadeScalarFieldEnum]


  export const Tbl_diretor_nacionalidadeScalarFieldEnum: {
    id: 'id',
    id_diretor: 'id_diretor',
    id_nacionalidade: 'id_nacionalidade'
  };

  export type Tbl_diretor_nacionalidadeScalarFieldEnum = (typeof Tbl_diretor_nacionalidadeScalarFieldEnum)[keyof typeof Tbl_diretor_nacionalidadeScalarFieldEnum]


  export const Tbl_ator_nacionalidadeScalarFieldEnum: {
    id: 'id',
    id_ator: 'id_ator',
    id_nacionalidade: 'id_nacionalidade'
  };

  export type Tbl_ator_nacionalidadeScalarFieldEnum = (typeof Tbl_ator_nacionalidadeScalarFieldEnum)[keyof typeof Tbl_ator_nacionalidadeScalarFieldEnum]


  export const Tbl_sexoScalarFieldEnum: {
    id: 'id',
    sigla: 'sigla',
    nome: 'nome'
  };

  export type Tbl_sexoScalarFieldEnum = (typeof Tbl_sexoScalarFieldEnum)[keyof typeof Tbl_sexoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type tbl_classificacaoWhereInput = {
    AND?: tbl_classificacaoWhereInput | tbl_classificacaoWhereInput[]
    OR?: tbl_classificacaoWhereInput[]
    NOT?: tbl_classificacaoWhereInput | tbl_classificacaoWhereInput[]
    id?: IntFilter<"tbl_classificacao"> | number
    sigla?: StringFilter<"tbl_classificacao"> | string
    nome?: StringFilter<"tbl_classificacao"> | string
    descricao?: StringFilter<"tbl_classificacao"> | string
    filmes?: Tbl_filmeListRelationFilter
  }

  export type tbl_classificacaoOrderByWithRelationInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    filmes?: tbl_filmeOrderByRelationAggregateInput
  }

  export type tbl_classificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_classificacaoWhereInput | tbl_classificacaoWhereInput[]
    OR?: tbl_classificacaoWhereInput[]
    NOT?: tbl_classificacaoWhereInput | tbl_classificacaoWhereInput[]
    sigla?: StringFilter<"tbl_classificacao"> | string
    nome?: StringFilter<"tbl_classificacao"> | string
    descricao?: StringFilter<"tbl_classificacao"> | string
    filmes?: Tbl_filmeListRelationFilter
  }, "id">

  export type tbl_classificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: tbl_classificacaoCountOrderByAggregateInput
    _avg?: tbl_classificacaoAvgOrderByAggregateInput
    _max?: tbl_classificacaoMaxOrderByAggregateInput
    _min?: tbl_classificacaoMinOrderByAggregateInput
    _sum?: tbl_classificacaoSumOrderByAggregateInput
  }

  export type tbl_classificacaoScalarWhereWithAggregatesInput = {
    AND?: tbl_classificacaoScalarWhereWithAggregatesInput | tbl_classificacaoScalarWhereWithAggregatesInput[]
    OR?: tbl_classificacaoScalarWhereWithAggregatesInput[]
    NOT?: tbl_classificacaoScalarWhereWithAggregatesInput | tbl_classificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_classificacao"> | number
    sigla?: StringWithAggregatesFilter<"tbl_classificacao"> | string
    nome?: StringWithAggregatesFilter<"tbl_classificacao"> | string
    descricao?: StringWithAggregatesFilter<"tbl_classificacao"> | string
  }

  export type tbl_generoWhereInput = {
    AND?: tbl_generoWhereInput | tbl_generoWhereInput[]
    OR?: tbl_generoWhereInput[]
    NOT?: tbl_generoWhereInput | tbl_generoWhereInput[]
    id?: IntFilter<"tbl_genero"> | number
    nome?: StringFilter<"tbl_genero"> | string
    filmes?: Tbl_filme_generoListRelationFilter
  }

  export type tbl_generoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    filmes?: tbl_filme_generoOrderByRelationAggregateInput
  }

  export type tbl_generoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_generoWhereInput | tbl_generoWhereInput[]
    OR?: tbl_generoWhereInput[]
    NOT?: tbl_generoWhereInput | tbl_generoWhereInput[]
    nome?: StringFilter<"tbl_genero"> | string
    filmes?: Tbl_filme_generoListRelationFilter
  }, "id">

  export type tbl_generoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: tbl_generoCountOrderByAggregateInput
    _avg?: tbl_generoAvgOrderByAggregateInput
    _max?: tbl_generoMaxOrderByAggregateInput
    _min?: tbl_generoMinOrderByAggregateInput
    _sum?: tbl_generoSumOrderByAggregateInput
  }

  export type tbl_generoScalarWhereWithAggregatesInput = {
    AND?: tbl_generoScalarWhereWithAggregatesInput | tbl_generoScalarWhereWithAggregatesInput[]
    OR?: tbl_generoScalarWhereWithAggregatesInput[]
    NOT?: tbl_generoScalarWhereWithAggregatesInput | tbl_generoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_genero"> | number
    nome?: StringWithAggregatesFilter<"tbl_genero"> | string
  }

  export type tbl_filme_generoWhereInput = {
    AND?: tbl_filme_generoWhereInput | tbl_filme_generoWhereInput[]
    OR?: tbl_filme_generoWhereInput[]
    NOT?: tbl_filme_generoWhereInput | tbl_filme_generoWhereInput[]
    id?: IntFilter<"tbl_filme_genero"> | number
    id_filme?: IntFilter<"tbl_filme_genero"> | number
    id_genero?: IntFilter<"tbl_filme_genero"> | number
    filme?: XOR<Tbl_filmeScalarRelationFilter, tbl_filmeWhereInput>
    genero?: XOR<Tbl_generoScalarRelationFilter, tbl_generoWhereInput>
  }

  export type tbl_filme_generoOrderByWithRelationInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
    filme?: tbl_filmeOrderByWithRelationInput
    genero?: tbl_generoOrderByWithRelationInput
  }

  export type tbl_filme_generoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_filme_generoWhereInput | tbl_filme_generoWhereInput[]
    OR?: tbl_filme_generoWhereInput[]
    NOT?: tbl_filme_generoWhereInput | tbl_filme_generoWhereInput[]
    id_filme?: IntFilter<"tbl_filme_genero"> | number
    id_genero?: IntFilter<"tbl_filme_genero"> | number
    filme?: XOR<Tbl_filmeScalarRelationFilter, tbl_filmeWhereInput>
    genero?: XOR<Tbl_generoScalarRelationFilter, tbl_generoWhereInput>
  }, "id">

  export type tbl_filme_generoOrderByWithAggregationInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
    _count?: tbl_filme_generoCountOrderByAggregateInput
    _avg?: tbl_filme_generoAvgOrderByAggregateInput
    _max?: tbl_filme_generoMaxOrderByAggregateInput
    _min?: tbl_filme_generoMinOrderByAggregateInput
    _sum?: tbl_filme_generoSumOrderByAggregateInput
  }

  export type tbl_filme_generoScalarWhereWithAggregatesInput = {
    AND?: tbl_filme_generoScalarWhereWithAggregatesInput | tbl_filme_generoScalarWhereWithAggregatesInput[]
    OR?: tbl_filme_generoScalarWhereWithAggregatesInput[]
    NOT?: tbl_filme_generoScalarWhereWithAggregatesInput | tbl_filme_generoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_filme_genero"> | number
    id_filme?: IntWithAggregatesFilter<"tbl_filme_genero"> | number
    id_genero?: IntWithAggregatesFilter<"tbl_filme_genero"> | number
  }

  export type tbl_filmeWhereInput = {
    AND?: tbl_filmeWhereInput | tbl_filmeWhereInput[]
    OR?: tbl_filmeWhereInput[]
    NOT?: tbl_filmeWhereInput | tbl_filmeWhereInput[]
    id?: IntFilter<"tbl_filme"> | number
    nome?: StringFilter<"tbl_filme"> | string
    nome_original?: StringFilter<"tbl_filme"> | string
    data_lancamento?: DateTimeFilter<"tbl_filme"> | Date | string
    data_relancamento?: DateTimeNullableFilter<"tbl_filme"> | Date | string | null
    duracao?: StringFilter<"tbl_filme"> | string
    sinopse?: StringFilter<"tbl_filme"> | string
    foto_capa?: StringFilter<"tbl_filme"> | string
    id_classificacao?: IntFilter<"tbl_filme"> | number
    classificacao?: XOR<Tbl_classificacaoScalarRelationFilter, tbl_classificacaoWhereInput>
    generos?: Tbl_filme_generoListRelationFilter
    diretores?: Tbl_filme_diretorListRelationFilter
    atores?: Tbl_filme_atorListRelationFilter
  }

  export type tbl_filmeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_original?: SortOrder
    data_lancamento?: SortOrder
    data_relancamento?: SortOrderInput | SortOrder
    duracao?: SortOrder
    sinopse?: SortOrder
    foto_capa?: SortOrder
    id_classificacao?: SortOrder
    classificacao?: tbl_classificacaoOrderByWithRelationInput
    generos?: tbl_filme_generoOrderByRelationAggregateInput
    diretores?: tbl_filme_diretorOrderByRelationAggregateInput
    atores?: tbl_filme_atorOrderByRelationAggregateInput
  }

  export type tbl_filmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_filmeWhereInput | tbl_filmeWhereInput[]
    OR?: tbl_filmeWhereInput[]
    NOT?: tbl_filmeWhereInput | tbl_filmeWhereInput[]
    nome?: StringFilter<"tbl_filme"> | string
    nome_original?: StringFilter<"tbl_filme"> | string
    data_lancamento?: DateTimeFilter<"tbl_filme"> | Date | string
    data_relancamento?: DateTimeNullableFilter<"tbl_filme"> | Date | string | null
    duracao?: StringFilter<"tbl_filme"> | string
    sinopse?: StringFilter<"tbl_filme"> | string
    foto_capa?: StringFilter<"tbl_filme"> | string
    id_classificacao?: IntFilter<"tbl_filme"> | number
    classificacao?: XOR<Tbl_classificacaoScalarRelationFilter, tbl_classificacaoWhereInput>
    generos?: Tbl_filme_generoListRelationFilter
    diretores?: Tbl_filme_diretorListRelationFilter
    atores?: Tbl_filme_atorListRelationFilter
  }, "id">

  export type tbl_filmeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_original?: SortOrder
    data_lancamento?: SortOrder
    data_relancamento?: SortOrderInput | SortOrder
    duracao?: SortOrder
    sinopse?: SortOrder
    foto_capa?: SortOrder
    id_classificacao?: SortOrder
    _count?: tbl_filmeCountOrderByAggregateInput
    _avg?: tbl_filmeAvgOrderByAggregateInput
    _max?: tbl_filmeMaxOrderByAggregateInput
    _min?: tbl_filmeMinOrderByAggregateInput
    _sum?: tbl_filmeSumOrderByAggregateInput
  }

  export type tbl_filmeScalarWhereWithAggregatesInput = {
    AND?: tbl_filmeScalarWhereWithAggregatesInput | tbl_filmeScalarWhereWithAggregatesInput[]
    OR?: tbl_filmeScalarWhereWithAggregatesInput[]
    NOT?: tbl_filmeScalarWhereWithAggregatesInput | tbl_filmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_filme"> | number
    nome?: StringWithAggregatesFilter<"tbl_filme"> | string
    nome_original?: StringWithAggregatesFilter<"tbl_filme"> | string
    data_lancamento?: DateTimeWithAggregatesFilter<"tbl_filme"> | Date | string
    data_relancamento?: DateTimeNullableWithAggregatesFilter<"tbl_filme"> | Date | string | null
    duracao?: StringWithAggregatesFilter<"tbl_filme"> | string
    sinopse?: StringWithAggregatesFilter<"tbl_filme"> | string
    foto_capa?: StringWithAggregatesFilter<"tbl_filme"> | string
    id_classificacao?: IntWithAggregatesFilter<"tbl_filme"> | number
  }

  export type tbl_diretorWhereInput = {
    AND?: tbl_diretorWhereInput | tbl_diretorWhereInput[]
    OR?: tbl_diretorWhereInput[]
    NOT?: tbl_diretorWhereInput | tbl_diretorWhereInput[]
    id?: IntFilter<"tbl_diretor"> | number
    nome?: StringFilter<"tbl_diretor"> | string
    nome_artistico?: StringFilter<"tbl_diretor"> | string
    data_nascimento?: DateTimeFilter<"tbl_diretor"> | Date | string
    data_falecimento?: DateTimeNullableFilter<"tbl_diretor"> | Date | string | null
    biografia?: StringFilter<"tbl_diretor"> | string
    foto?: StringFilter<"tbl_diretor"> | string
    id_sexo?: IntFilter<"tbl_diretor"> | number
    sexo?: XOR<Tbl_sexoScalarRelationFilter, tbl_sexoWhereInput>
    nacionalidades?: Tbl_diretor_nacionalidadeListRelationFilter
    filmes?: Tbl_filme_diretorListRelationFilter
  }

  export type tbl_diretorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrderInput | SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
    sexo?: tbl_sexoOrderByWithRelationInput
    nacionalidades?: tbl_diretor_nacionalidadeOrderByRelationAggregateInput
    filmes?: tbl_filme_diretorOrderByRelationAggregateInput
  }

  export type tbl_diretorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_diretorWhereInput | tbl_diretorWhereInput[]
    OR?: tbl_diretorWhereInput[]
    NOT?: tbl_diretorWhereInput | tbl_diretorWhereInput[]
    nome?: StringFilter<"tbl_diretor"> | string
    nome_artistico?: StringFilter<"tbl_diretor"> | string
    data_nascimento?: DateTimeFilter<"tbl_diretor"> | Date | string
    data_falecimento?: DateTimeNullableFilter<"tbl_diretor"> | Date | string | null
    biografia?: StringFilter<"tbl_diretor"> | string
    foto?: StringFilter<"tbl_diretor"> | string
    id_sexo?: IntFilter<"tbl_diretor"> | number
    sexo?: XOR<Tbl_sexoScalarRelationFilter, tbl_sexoWhereInput>
    nacionalidades?: Tbl_diretor_nacionalidadeListRelationFilter
    filmes?: Tbl_filme_diretorListRelationFilter
  }, "id">

  export type tbl_diretorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrderInput | SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
    _count?: tbl_diretorCountOrderByAggregateInput
    _avg?: tbl_diretorAvgOrderByAggregateInput
    _max?: tbl_diretorMaxOrderByAggregateInput
    _min?: tbl_diretorMinOrderByAggregateInput
    _sum?: tbl_diretorSumOrderByAggregateInput
  }

  export type tbl_diretorScalarWhereWithAggregatesInput = {
    AND?: tbl_diretorScalarWhereWithAggregatesInput | tbl_diretorScalarWhereWithAggregatesInput[]
    OR?: tbl_diretorScalarWhereWithAggregatesInput[]
    NOT?: tbl_diretorScalarWhereWithAggregatesInput | tbl_diretorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_diretor"> | number
    nome?: StringWithAggregatesFilter<"tbl_diretor"> | string
    nome_artistico?: StringWithAggregatesFilter<"tbl_diretor"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"tbl_diretor"> | Date | string
    data_falecimento?: DateTimeNullableWithAggregatesFilter<"tbl_diretor"> | Date | string | null
    biografia?: StringWithAggregatesFilter<"tbl_diretor"> | string
    foto?: StringWithAggregatesFilter<"tbl_diretor"> | string
    id_sexo?: IntWithAggregatesFilter<"tbl_diretor"> | number
  }

  export type tbl_filme_diretorWhereInput = {
    AND?: tbl_filme_diretorWhereInput | tbl_filme_diretorWhereInput[]
    OR?: tbl_filme_diretorWhereInput[]
    NOT?: tbl_filme_diretorWhereInput | tbl_filme_diretorWhereInput[]
    id?: IntFilter<"tbl_filme_diretor"> | number
    id_filme?: IntFilter<"tbl_filme_diretor"> | number
    id_diretor?: IntFilter<"tbl_filme_diretor"> | number
    filme?: XOR<Tbl_filmeScalarRelationFilter, tbl_filmeWhereInput>
    diretor?: XOR<Tbl_diretorScalarRelationFilter, tbl_diretorWhereInput>
  }

  export type tbl_filme_diretorOrderByWithRelationInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
    filme?: tbl_filmeOrderByWithRelationInput
    diretor?: tbl_diretorOrderByWithRelationInput
  }

  export type tbl_filme_diretorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_filme_diretorWhereInput | tbl_filme_diretorWhereInput[]
    OR?: tbl_filme_diretorWhereInput[]
    NOT?: tbl_filme_diretorWhereInput | tbl_filme_diretorWhereInput[]
    id_filme?: IntFilter<"tbl_filme_diretor"> | number
    id_diretor?: IntFilter<"tbl_filme_diretor"> | number
    filme?: XOR<Tbl_filmeScalarRelationFilter, tbl_filmeWhereInput>
    diretor?: XOR<Tbl_diretorScalarRelationFilter, tbl_diretorWhereInput>
  }, "id">

  export type tbl_filme_diretorOrderByWithAggregationInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
    _count?: tbl_filme_diretorCountOrderByAggregateInput
    _avg?: tbl_filme_diretorAvgOrderByAggregateInput
    _max?: tbl_filme_diretorMaxOrderByAggregateInput
    _min?: tbl_filme_diretorMinOrderByAggregateInput
    _sum?: tbl_filme_diretorSumOrderByAggregateInput
  }

  export type tbl_filme_diretorScalarWhereWithAggregatesInput = {
    AND?: tbl_filme_diretorScalarWhereWithAggregatesInput | tbl_filme_diretorScalarWhereWithAggregatesInput[]
    OR?: tbl_filme_diretorScalarWhereWithAggregatesInput[]
    NOT?: tbl_filme_diretorScalarWhereWithAggregatesInput | tbl_filme_diretorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_filme_diretor"> | number
    id_filme?: IntWithAggregatesFilter<"tbl_filme_diretor"> | number
    id_diretor?: IntWithAggregatesFilter<"tbl_filme_diretor"> | number
  }

  export type tbl_atorWhereInput = {
    AND?: tbl_atorWhereInput | tbl_atorWhereInput[]
    OR?: tbl_atorWhereInput[]
    NOT?: tbl_atorWhereInput | tbl_atorWhereInput[]
    id?: IntFilter<"tbl_ator"> | number
    nome?: StringFilter<"tbl_ator"> | string
    nome_artistico?: StringFilter<"tbl_ator"> | string
    data_nascimento?: DateTimeFilter<"tbl_ator"> | Date | string
    data_falecimento?: DateTimeNullableFilter<"tbl_ator"> | Date | string | null
    biografia?: StringFilter<"tbl_ator"> | string
    foto?: StringFilter<"tbl_ator"> | string
    id_sexo?: IntFilter<"tbl_ator"> | number
    sexo?: XOR<Tbl_sexoScalarRelationFilter, tbl_sexoWhereInput>
    nacionalidades?: Tbl_ator_nacionalidadeListRelationFilter
    filmes?: Tbl_filme_atorListRelationFilter
  }

  export type tbl_atorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrderInput | SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
    sexo?: tbl_sexoOrderByWithRelationInput
    nacionalidades?: tbl_ator_nacionalidadeOrderByRelationAggregateInput
    filmes?: tbl_filme_atorOrderByRelationAggregateInput
  }

  export type tbl_atorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_atorWhereInput | tbl_atorWhereInput[]
    OR?: tbl_atorWhereInput[]
    NOT?: tbl_atorWhereInput | tbl_atorWhereInput[]
    nome?: StringFilter<"tbl_ator"> | string
    nome_artistico?: StringFilter<"tbl_ator"> | string
    data_nascimento?: DateTimeFilter<"tbl_ator"> | Date | string
    data_falecimento?: DateTimeNullableFilter<"tbl_ator"> | Date | string | null
    biografia?: StringFilter<"tbl_ator"> | string
    foto?: StringFilter<"tbl_ator"> | string
    id_sexo?: IntFilter<"tbl_ator"> | number
    sexo?: XOR<Tbl_sexoScalarRelationFilter, tbl_sexoWhereInput>
    nacionalidades?: Tbl_ator_nacionalidadeListRelationFilter
    filmes?: Tbl_filme_atorListRelationFilter
  }, "id">

  export type tbl_atorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrderInput | SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
    _count?: tbl_atorCountOrderByAggregateInput
    _avg?: tbl_atorAvgOrderByAggregateInput
    _max?: tbl_atorMaxOrderByAggregateInput
    _min?: tbl_atorMinOrderByAggregateInput
    _sum?: tbl_atorSumOrderByAggregateInput
  }

  export type tbl_atorScalarWhereWithAggregatesInput = {
    AND?: tbl_atorScalarWhereWithAggregatesInput | tbl_atorScalarWhereWithAggregatesInput[]
    OR?: tbl_atorScalarWhereWithAggregatesInput[]
    NOT?: tbl_atorScalarWhereWithAggregatesInput | tbl_atorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_ator"> | number
    nome?: StringWithAggregatesFilter<"tbl_ator"> | string
    nome_artistico?: StringWithAggregatesFilter<"tbl_ator"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"tbl_ator"> | Date | string
    data_falecimento?: DateTimeNullableWithAggregatesFilter<"tbl_ator"> | Date | string | null
    biografia?: StringWithAggregatesFilter<"tbl_ator"> | string
    foto?: StringWithAggregatesFilter<"tbl_ator"> | string
    id_sexo?: IntWithAggregatesFilter<"tbl_ator"> | number
  }

  export type tbl_filme_atorWhereInput = {
    AND?: tbl_filme_atorWhereInput | tbl_filme_atorWhereInput[]
    OR?: tbl_filme_atorWhereInput[]
    NOT?: tbl_filme_atorWhereInput | tbl_filme_atorWhereInput[]
    id?: IntFilter<"tbl_filme_ator"> | number
    id_filme?: IntFilter<"tbl_filme_ator"> | number
    id_ator?: IntFilter<"tbl_filme_ator"> | number
    filme?: XOR<Tbl_filmeScalarRelationFilter, tbl_filmeWhereInput>
    ator?: XOR<Tbl_atorScalarRelationFilter, tbl_atorWhereInput>
  }

  export type tbl_filme_atorOrderByWithRelationInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
    filme?: tbl_filmeOrderByWithRelationInput
    ator?: tbl_atorOrderByWithRelationInput
  }

  export type tbl_filme_atorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_filme_atorWhereInput | tbl_filme_atorWhereInput[]
    OR?: tbl_filme_atorWhereInput[]
    NOT?: tbl_filme_atorWhereInput | tbl_filme_atorWhereInput[]
    id_filme?: IntFilter<"tbl_filme_ator"> | number
    id_ator?: IntFilter<"tbl_filme_ator"> | number
    filme?: XOR<Tbl_filmeScalarRelationFilter, tbl_filmeWhereInput>
    ator?: XOR<Tbl_atorScalarRelationFilter, tbl_atorWhereInput>
  }, "id">

  export type tbl_filme_atorOrderByWithAggregationInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
    _count?: tbl_filme_atorCountOrderByAggregateInput
    _avg?: tbl_filme_atorAvgOrderByAggregateInput
    _max?: tbl_filme_atorMaxOrderByAggregateInput
    _min?: tbl_filme_atorMinOrderByAggregateInput
    _sum?: tbl_filme_atorSumOrderByAggregateInput
  }

  export type tbl_filme_atorScalarWhereWithAggregatesInput = {
    AND?: tbl_filme_atorScalarWhereWithAggregatesInput | tbl_filme_atorScalarWhereWithAggregatesInput[]
    OR?: tbl_filme_atorScalarWhereWithAggregatesInput[]
    NOT?: tbl_filme_atorScalarWhereWithAggregatesInput | tbl_filme_atorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_filme_ator"> | number
    id_filme?: IntWithAggregatesFilter<"tbl_filme_ator"> | number
    id_ator?: IntWithAggregatesFilter<"tbl_filme_ator"> | number
  }

  export type tbl_nacionalidadeWhereInput = {
    AND?: tbl_nacionalidadeWhereInput | tbl_nacionalidadeWhereInput[]
    OR?: tbl_nacionalidadeWhereInput[]
    NOT?: tbl_nacionalidadeWhereInput | tbl_nacionalidadeWhereInput[]
    id?: IntFilter<"tbl_nacionalidade"> | number
    nome?: StringFilter<"tbl_nacionalidade"> | string
    diretores?: Tbl_diretor_nacionalidadeListRelationFilter
    atores?: Tbl_ator_nacionalidadeListRelationFilter
  }

  export type tbl_nacionalidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    diretores?: tbl_diretor_nacionalidadeOrderByRelationAggregateInput
    atores?: tbl_ator_nacionalidadeOrderByRelationAggregateInput
  }

  export type tbl_nacionalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_nacionalidadeWhereInput | tbl_nacionalidadeWhereInput[]
    OR?: tbl_nacionalidadeWhereInput[]
    NOT?: tbl_nacionalidadeWhereInput | tbl_nacionalidadeWhereInput[]
    nome?: StringFilter<"tbl_nacionalidade"> | string
    diretores?: Tbl_diretor_nacionalidadeListRelationFilter
    atores?: Tbl_ator_nacionalidadeListRelationFilter
  }, "id">

  export type tbl_nacionalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: tbl_nacionalidadeCountOrderByAggregateInput
    _avg?: tbl_nacionalidadeAvgOrderByAggregateInput
    _max?: tbl_nacionalidadeMaxOrderByAggregateInput
    _min?: tbl_nacionalidadeMinOrderByAggregateInput
    _sum?: tbl_nacionalidadeSumOrderByAggregateInput
  }

  export type tbl_nacionalidadeScalarWhereWithAggregatesInput = {
    AND?: tbl_nacionalidadeScalarWhereWithAggregatesInput | tbl_nacionalidadeScalarWhereWithAggregatesInput[]
    OR?: tbl_nacionalidadeScalarWhereWithAggregatesInput[]
    NOT?: tbl_nacionalidadeScalarWhereWithAggregatesInput | tbl_nacionalidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_nacionalidade"> | number
    nome?: StringWithAggregatesFilter<"tbl_nacionalidade"> | string
  }

  export type tbl_diretor_nacionalidadeWhereInput = {
    AND?: tbl_diretor_nacionalidadeWhereInput | tbl_diretor_nacionalidadeWhereInput[]
    OR?: tbl_diretor_nacionalidadeWhereInput[]
    NOT?: tbl_diretor_nacionalidadeWhereInput | tbl_diretor_nacionalidadeWhereInput[]
    id?: IntFilter<"tbl_diretor_nacionalidade"> | number
    id_diretor?: IntFilter<"tbl_diretor_nacionalidade"> | number
    id_nacionalidade?: IntFilter<"tbl_diretor_nacionalidade"> | number
    diretor?: XOR<Tbl_diretorScalarRelationFilter, tbl_diretorWhereInput>
    nacionalidade?: XOR<Tbl_nacionalidadeScalarRelationFilter, tbl_nacionalidadeWhereInput>
  }

  export type tbl_diretor_nacionalidadeOrderByWithRelationInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
    diretor?: tbl_diretorOrderByWithRelationInput
    nacionalidade?: tbl_nacionalidadeOrderByWithRelationInput
  }

  export type tbl_diretor_nacionalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_diretor_nacionalidadeWhereInput | tbl_diretor_nacionalidadeWhereInput[]
    OR?: tbl_diretor_nacionalidadeWhereInput[]
    NOT?: tbl_diretor_nacionalidadeWhereInput | tbl_diretor_nacionalidadeWhereInput[]
    id_diretor?: IntFilter<"tbl_diretor_nacionalidade"> | number
    id_nacionalidade?: IntFilter<"tbl_diretor_nacionalidade"> | number
    diretor?: XOR<Tbl_diretorScalarRelationFilter, tbl_diretorWhereInput>
    nacionalidade?: XOR<Tbl_nacionalidadeScalarRelationFilter, tbl_nacionalidadeWhereInput>
  }, "id">

  export type tbl_diretor_nacionalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
    _count?: tbl_diretor_nacionalidadeCountOrderByAggregateInput
    _avg?: tbl_diretor_nacionalidadeAvgOrderByAggregateInput
    _max?: tbl_diretor_nacionalidadeMaxOrderByAggregateInput
    _min?: tbl_diretor_nacionalidadeMinOrderByAggregateInput
    _sum?: tbl_diretor_nacionalidadeSumOrderByAggregateInput
  }

  export type tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput = {
    AND?: tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput | tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput[]
    OR?: tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput[]
    NOT?: tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput | tbl_diretor_nacionalidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_diretor_nacionalidade"> | number
    id_diretor?: IntWithAggregatesFilter<"tbl_diretor_nacionalidade"> | number
    id_nacionalidade?: IntWithAggregatesFilter<"tbl_diretor_nacionalidade"> | number
  }

  export type tbl_ator_nacionalidadeWhereInput = {
    AND?: tbl_ator_nacionalidadeWhereInput | tbl_ator_nacionalidadeWhereInput[]
    OR?: tbl_ator_nacionalidadeWhereInput[]
    NOT?: tbl_ator_nacionalidadeWhereInput | tbl_ator_nacionalidadeWhereInput[]
    id?: IntFilter<"tbl_ator_nacionalidade"> | number
    id_ator?: IntFilter<"tbl_ator_nacionalidade"> | number
    id_nacionalidade?: IntFilter<"tbl_ator_nacionalidade"> | number
    ator?: XOR<Tbl_atorScalarRelationFilter, tbl_atorWhereInput>
    nacionalidade?: XOR<Tbl_nacionalidadeScalarRelationFilter, tbl_nacionalidadeWhereInput>
  }

  export type tbl_ator_nacionalidadeOrderByWithRelationInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
    ator?: tbl_atorOrderByWithRelationInput
    nacionalidade?: tbl_nacionalidadeOrderByWithRelationInput
  }

  export type tbl_ator_nacionalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_ator_nacionalidadeWhereInput | tbl_ator_nacionalidadeWhereInput[]
    OR?: tbl_ator_nacionalidadeWhereInput[]
    NOT?: tbl_ator_nacionalidadeWhereInput | tbl_ator_nacionalidadeWhereInput[]
    id_ator?: IntFilter<"tbl_ator_nacionalidade"> | number
    id_nacionalidade?: IntFilter<"tbl_ator_nacionalidade"> | number
    ator?: XOR<Tbl_atorScalarRelationFilter, tbl_atorWhereInput>
    nacionalidade?: XOR<Tbl_nacionalidadeScalarRelationFilter, tbl_nacionalidadeWhereInput>
  }, "id">

  export type tbl_ator_nacionalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
    _count?: tbl_ator_nacionalidadeCountOrderByAggregateInput
    _avg?: tbl_ator_nacionalidadeAvgOrderByAggregateInput
    _max?: tbl_ator_nacionalidadeMaxOrderByAggregateInput
    _min?: tbl_ator_nacionalidadeMinOrderByAggregateInput
    _sum?: tbl_ator_nacionalidadeSumOrderByAggregateInput
  }

  export type tbl_ator_nacionalidadeScalarWhereWithAggregatesInput = {
    AND?: tbl_ator_nacionalidadeScalarWhereWithAggregatesInput | tbl_ator_nacionalidadeScalarWhereWithAggregatesInput[]
    OR?: tbl_ator_nacionalidadeScalarWhereWithAggregatesInput[]
    NOT?: tbl_ator_nacionalidadeScalarWhereWithAggregatesInput | tbl_ator_nacionalidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_ator_nacionalidade"> | number
    id_ator?: IntWithAggregatesFilter<"tbl_ator_nacionalidade"> | number
    id_nacionalidade?: IntWithAggregatesFilter<"tbl_ator_nacionalidade"> | number
  }

  export type tbl_sexoWhereInput = {
    AND?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    OR?: tbl_sexoWhereInput[]
    NOT?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    id?: IntFilter<"tbl_sexo"> | number
    sigla?: StringFilter<"tbl_sexo"> | string
    nome?: StringFilter<"tbl_sexo"> | string
    diretores?: Tbl_diretorListRelationFilter
    atores?: Tbl_atorListRelationFilter
  }

  export type tbl_sexoOrderByWithRelationInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    diretores?: tbl_diretorOrderByRelationAggregateInput
    atores?: tbl_atorOrderByRelationAggregateInput
  }

  export type tbl_sexoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    OR?: tbl_sexoWhereInput[]
    NOT?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    sigla?: StringFilter<"tbl_sexo"> | string
    nome?: StringFilter<"tbl_sexo"> | string
    diretores?: Tbl_diretorListRelationFilter
    atores?: Tbl_atorListRelationFilter
  }, "id">

  export type tbl_sexoOrderByWithAggregationInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    _count?: tbl_sexoCountOrderByAggregateInput
    _avg?: tbl_sexoAvgOrderByAggregateInput
    _max?: tbl_sexoMaxOrderByAggregateInput
    _min?: tbl_sexoMinOrderByAggregateInput
    _sum?: tbl_sexoSumOrderByAggregateInput
  }

  export type tbl_sexoScalarWhereWithAggregatesInput = {
    AND?: tbl_sexoScalarWhereWithAggregatesInput | tbl_sexoScalarWhereWithAggregatesInput[]
    OR?: tbl_sexoScalarWhereWithAggregatesInput[]
    NOT?: tbl_sexoScalarWhereWithAggregatesInput | tbl_sexoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_sexo"> | number
    sigla?: StringWithAggregatesFilter<"tbl_sexo"> | string
    nome?: StringWithAggregatesFilter<"tbl_sexo"> | string
  }

  export type tbl_classificacaoCreateInput = {
    sigla: string
    nome: string
    descricao: string
    filmes?: tbl_filmeCreateNestedManyWithoutClassificacaoInput
  }

  export type tbl_classificacaoUncheckedCreateInput = {
    id?: number
    sigla: string
    nome: string
    descricao: string
    filmes?: tbl_filmeUncheckedCreateNestedManyWithoutClassificacaoInput
  }

  export type tbl_classificacaoUpdateInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    filmes?: tbl_filmeUpdateManyWithoutClassificacaoNestedInput
  }

  export type tbl_classificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    filmes?: tbl_filmeUncheckedUpdateManyWithoutClassificacaoNestedInput
  }

  export type tbl_classificacaoCreateManyInput = {
    id?: number
    sigla: string
    nome: string
    descricao: string
  }

  export type tbl_classificacaoUpdateManyMutationInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_classificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_generoCreateInput = {
    nome: string
    filmes?: tbl_filme_generoCreateNestedManyWithoutGeneroInput
  }

  export type tbl_generoUncheckedCreateInput = {
    id?: number
    nome: string
    filmes?: tbl_filme_generoUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type tbl_generoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    filmes?: tbl_filme_generoUpdateManyWithoutGeneroNestedInput
  }

  export type tbl_generoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    filmes?: tbl_filme_generoUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type tbl_generoCreateManyInput = {
    id?: number
    nome: string
  }

  export type tbl_generoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_generoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_filme_generoCreateInput = {
    filme: tbl_filmeCreateNestedOneWithoutGenerosInput
    genero: tbl_generoCreateNestedOneWithoutFilmesInput
  }

  export type tbl_filme_generoUncheckedCreateInput = {
    id?: number
    id_filme: number
    id_genero: number
  }

  export type tbl_filme_generoUpdateInput = {
    filme?: tbl_filmeUpdateOneRequiredWithoutGenerosNestedInput
    genero?: tbl_generoUpdateOneRequiredWithoutFilmesNestedInput
  }

  export type tbl_filme_generoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_generoCreateManyInput = {
    id?: number
    id_filme: number
    id_genero: number
  }

  export type tbl_filme_generoUpdateManyMutationInput = {

  }

  export type tbl_filme_generoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filmeCreateInput = {
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    classificacao: tbl_classificacaoCreateNestedOneWithoutFilmesInput
    generos?: tbl_filme_generoCreateNestedManyWithoutFilmeInput
    diretores?: tbl_filme_diretorCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeUncheckedCreateInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    id_classificacao: number
    generos?: tbl_filme_generoUncheckedCreateNestedManyWithoutFilmeInput
    diretores?: tbl_filme_diretorUncheckedCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    classificacao?: tbl_classificacaoUpdateOneRequiredWithoutFilmesNestedInput
    generos?: tbl_filme_generoUpdateManyWithoutFilmeNestedInput
    diretores?: tbl_filme_diretorUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    id_classificacao?: IntFieldUpdateOperationsInput | number
    generos?: tbl_filme_generoUncheckedUpdateManyWithoutFilmeNestedInput
    diretores?: tbl_filme_diretorUncheckedUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeCreateManyInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    id_classificacao: number
  }

  export type tbl_filmeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_filmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    id_classificacao?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretorCreateInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    sexo: tbl_sexoCreateNestedOneWithoutDiretoresInput
    nacionalidades?: tbl_diretor_nacionalidadeCreateNestedManyWithoutDiretorInput
    filmes?: tbl_filme_diretorCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorUncheckedCreateInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
    nacionalidades?: tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutDiretorInput
    filmes?: tbl_filme_diretorUncheckedCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    sexo?: tbl_sexoUpdateOneRequiredWithoutDiretoresNestedInput
    nacionalidades?: tbl_diretor_nacionalidadeUpdateManyWithoutDiretorNestedInput
    filmes?: tbl_filme_diretorUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_diretorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
    nacionalidades?: tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutDiretorNestedInput
    filmes?: tbl_filme_diretorUncheckedUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_diretorCreateManyInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
  }

  export type tbl_diretorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_diretorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_diretorCreateInput = {
    filme: tbl_filmeCreateNestedOneWithoutDiretoresInput
    diretor: tbl_diretorCreateNestedOneWithoutFilmesInput
  }

  export type tbl_filme_diretorUncheckedCreateInput = {
    id?: number
    id_filme: number
    id_diretor: number
  }

  export type tbl_filme_diretorUpdateInput = {
    filme?: tbl_filmeUpdateOneRequiredWithoutDiretoresNestedInput
    diretor?: tbl_diretorUpdateOneRequiredWithoutFilmesNestedInput
  }

  export type tbl_filme_diretorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_diretorCreateManyInput = {
    id?: number
    id_filme: number
    id_diretor: number
  }

  export type tbl_filme_diretorUpdateManyMutationInput = {

  }

  export type tbl_filme_diretorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_atorCreateInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    sexo: tbl_sexoCreateNestedOneWithoutAtoresInput
    nacionalidades?: tbl_ator_nacionalidadeCreateNestedManyWithoutAtorInput
    filmes?: tbl_filme_atorCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorUncheckedCreateInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
    nacionalidades?: tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutAtorInput
    filmes?: tbl_filme_atorUncheckedCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    sexo?: tbl_sexoUpdateOneRequiredWithoutAtoresNestedInput
    nacionalidades?: tbl_ator_nacionalidadeUpdateManyWithoutAtorNestedInput
    filmes?: tbl_filme_atorUpdateManyWithoutAtorNestedInput
  }

  export type tbl_atorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
    nacionalidades?: tbl_ator_nacionalidadeUncheckedUpdateManyWithoutAtorNestedInput
    filmes?: tbl_filme_atorUncheckedUpdateManyWithoutAtorNestedInput
  }

  export type tbl_atorCreateManyInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
  }

  export type tbl_atorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_atorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_atorCreateInput = {
    filme: tbl_filmeCreateNestedOneWithoutAtoresInput
    ator: tbl_atorCreateNestedOneWithoutFilmesInput
  }

  export type tbl_filme_atorUncheckedCreateInput = {
    id?: number
    id_filme: number
    id_ator: number
  }

  export type tbl_filme_atorUpdateInput = {
    filme?: tbl_filmeUpdateOneRequiredWithoutAtoresNestedInput
    ator?: tbl_atorUpdateOneRequiredWithoutFilmesNestedInput
  }

  export type tbl_filme_atorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_atorCreateManyInput = {
    id?: number
    id_filme: number
    id_ator: number
  }

  export type tbl_filme_atorUpdateManyMutationInput = {

  }

  export type tbl_filme_atorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_nacionalidadeCreateInput = {
    nome: string
    diretores?: tbl_diretor_nacionalidadeCreateNestedManyWithoutNacionalidadeInput
    atores?: tbl_ator_nacionalidadeCreateNestedManyWithoutNacionalidadeInput
  }

  export type tbl_nacionalidadeUncheckedCreateInput = {
    id?: number
    nome: string
    diretores?: tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutNacionalidadeInput
    atores?: tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutNacionalidadeInput
  }

  export type tbl_nacionalidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretor_nacionalidadeUpdateManyWithoutNacionalidadeNestedInput
    atores?: tbl_ator_nacionalidadeUpdateManyWithoutNacionalidadeNestedInput
  }

  export type tbl_nacionalidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeNestedInput
    atores?: tbl_ator_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeNestedInput
  }

  export type tbl_nacionalidadeCreateManyInput = {
    id?: number
    nome: string
  }

  export type tbl_nacionalidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_nacionalidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_diretor_nacionalidadeCreateInput = {
    diretor: tbl_diretorCreateNestedOneWithoutNacionalidadesInput
    nacionalidade: tbl_nacionalidadeCreateNestedOneWithoutDiretoresInput
  }

  export type tbl_diretor_nacionalidadeUncheckedCreateInput = {
    id?: number
    id_diretor: number
    id_nacionalidade: number
  }

  export type tbl_diretor_nacionalidadeUpdateInput = {
    diretor?: tbl_diretorUpdateOneRequiredWithoutNacionalidadesNestedInput
    nacionalidade?: tbl_nacionalidadeUpdateOneRequiredWithoutDiretoresNestedInput
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretor_nacionalidadeCreateManyInput = {
    id?: number
    id_diretor: number
    id_nacionalidade: number
  }

  export type tbl_diretor_nacionalidadeUpdateManyMutationInput = {

  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_ator_nacionalidadeCreateInput = {
    ator: tbl_atorCreateNestedOneWithoutNacionalidadesInput
    nacionalidade: tbl_nacionalidadeCreateNestedOneWithoutAtoresInput
  }

  export type tbl_ator_nacionalidadeUncheckedCreateInput = {
    id?: number
    id_ator: number
    id_nacionalidade: number
  }

  export type tbl_ator_nacionalidadeUpdateInput = {
    ator?: tbl_atorUpdateOneRequiredWithoutNacionalidadesNestedInput
    nacionalidade?: tbl_nacionalidadeUpdateOneRequiredWithoutAtoresNestedInput
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_ator_nacionalidadeCreateManyInput = {
    id?: number
    id_ator: number
    id_nacionalidade: number
  }

  export type tbl_ator_nacionalidadeUpdateManyMutationInput = {

  }

  export type tbl_ator_nacionalidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_sexoCreateInput = {
    sigla: string
    nome: string
    diretores?: tbl_diretorCreateNestedManyWithoutSexoInput
    atores?: tbl_atorCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoUncheckedCreateInput = {
    id?: number
    sigla: string
    nome: string
    diretores?: tbl_diretorUncheckedCreateNestedManyWithoutSexoInput
    atores?: tbl_atorUncheckedCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoUpdateInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretorUpdateManyWithoutSexoNestedInput
    atores?: tbl_atorUpdateManyWithoutSexoNestedInput
  }

  export type tbl_sexoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretorUncheckedUpdateManyWithoutSexoNestedInput
    atores?: tbl_atorUncheckedUpdateManyWithoutSexoNestedInput
  }

  export type tbl_sexoCreateManyInput = {
    id?: number
    sigla: string
    nome: string
  }

  export type tbl_sexoUpdateManyMutationInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_sexoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Tbl_filmeListRelationFilter = {
    every?: tbl_filmeWhereInput
    some?: tbl_filmeWhereInput
    none?: tbl_filmeWhereInput
  }

  export type tbl_filmeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_classificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type tbl_classificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_classificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type tbl_classificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type tbl_classificacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Tbl_filme_generoListRelationFilter = {
    every?: tbl_filme_generoWhereInput
    some?: tbl_filme_generoWhereInput
    none?: tbl_filme_generoWhereInput
  }

  export type tbl_filme_generoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_generoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tbl_generoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_generoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tbl_generoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tbl_generoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Tbl_filmeScalarRelationFilter = {
    is?: tbl_filmeWhereInput
    isNot?: tbl_filmeWhereInput
  }

  export type Tbl_generoScalarRelationFilter = {
    is?: tbl_generoWhereInput
    isNot?: tbl_generoWhereInput
  }

  export type tbl_filme_generoCountOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
  }

  export type tbl_filme_generoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
  }

  export type tbl_filme_generoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
  }

  export type tbl_filme_generoMinOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
  }

  export type tbl_filme_generoSumOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_genero?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Tbl_classificacaoScalarRelationFilter = {
    is?: tbl_classificacaoWhereInput
    isNot?: tbl_classificacaoWhereInput
  }

  export type Tbl_filme_diretorListRelationFilter = {
    every?: tbl_filme_diretorWhereInput
    some?: tbl_filme_diretorWhereInput
    none?: tbl_filme_diretorWhereInput
  }

  export type Tbl_filme_atorListRelationFilter = {
    every?: tbl_filme_atorWhereInput
    some?: tbl_filme_atorWhereInput
    none?: tbl_filme_atorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_filme_diretorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_filme_atorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_filmeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_original?: SortOrder
    data_lancamento?: SortOrder
    data_relancamento?: SortOrder
    duracao?: SortOrder
    sinopse?: SortOrder
    foto_capa?: SortOrder
    id_classificacao?: SortOrder
  }

  export type tbl_filmeAvgOrderByAggregateInput = {
    id?: SortOrder
    id_classificacao?: SortOrder
  }

  export type tbl_filmeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_original?: SortOrder
    data_lancamento?: SortOrder
    data_relancamento?: SortOrder
    duracao?: SortOrder
    sinopse?: SortOrder
    foto_capa?: SortOrder
    id_classificacao?: SortOrder
  }

  export type tbl_filmeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_original?: SortOrder
    data_lancamento?: SortOrder
    data_relancamento?: SortOrder
    duracao?: SortOrder
    sinopse?: SortOrder
    foto_capa?: SortOrder
    id_classificacao?: SortOrder
  }

  export type tbl_filmeSumOrderByAggregateInput = {
    id?: SortOrder
    id_classificacao?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Tbl_sexoScalarRelationFilter = {
    is?: tbl_sexoWhereInput
    isNot?: tbl_sexoWhereInput
  }

  export type Tbl_diretor_nacionalidadeListRelationFilter = {
    every?: tbl_diretor_nacionalidadeWhereInput
    some?: tbl_diretor_nacionalidadeWhereInput
    none?: tbl_diretor_nacionalidadeWhereInput
  }

  export type tbl_diretor_nacionalidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_diretorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_diretorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_diretorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_diretorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_diretorSumOrderByAggregateInput = {
    id?: SortOrder
    id_sexo?: SortOrder
  }

  export type Tbl_diretorScalarRelationFilter = {
    is?: tbl_diretorWhereInput
    isNot?: tbl_diretorWhereInput
  }

  export type tbl_filme_diretorCountOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
  }

  export type tbl_filme_diretorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
  }

  export type tbl_filme_diretorMaxOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
  }

  export type tbl_filme_diretorMinOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
  }

  export type tbl_filme_diretorSumOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_diretor?: SortOrder
  }

  export type Tbl_ator_nacionalidadeListRelationFilter = {
    every?: tbl_ator_nacionalidadeWhereInput
    some?: tbl_ator_nacionalidadeWhereInput
    none?: tbl_ator_nacionalidadeWhereInput
  }

  export type tbl_ator_nacionalidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_atorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_atorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_atorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_atorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_artistico?: SortOrder
    data_nascimento?: SortOrder
    data_falecimento?: SortOrder
    biografia?: SortOrder
    foto?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_atorSumOrderByAggregateInput = {
    id?: SortOrder
    id_sexo?: SortOrder
  }

  export type Tbl_atorScalarRelationFilter = {
    is?: tbl_atorWhereInput
    isNot?: tbl_atorWhereInput
  }

  export type tbl_filme_atorCountOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
  }

  export type tbl_filme_atorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
  }

  export type tbl_filme_atorMaxOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
  }

  export type tbl_filme_atorMinOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
  }

  export type tbl_filme_atorSumOrderByAggregateInput = {
    id?: SortOrder
    id_filme?: SortOrder
    id_ator?: SortOrder
  }

  export type tbl_nacionalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tbl_nacionalidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_nacionalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tbl_nacionalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tbl_nacionalidadeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Tbl_nacionalidadeScalarRelationFilter = {
    is?: tbl_nacionalidadeWhereInput
    isNot?: tbl_nacionalidadeWhereInput
  }

  export type tbl_diretor_nacionalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_diretor_nacionalidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_diretor_nacionalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_diretor_nacionalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_diretor_nacionalidadeSumOrderByAggregateInput = {
    id?: SortOrder
    id_diretor?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_ator_nacionalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_ator_nacionalidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_ator_nacionalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_ator_nacionalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type tbl_ator_nacionalidadeSumOrderByAggregateInput = {
    id?: SortOrder
    id_ator?: SortOrder
    id_nacionalidade?: SortOrder
  }

  export type Tbl_diretorListRelationFilter = {
    every?: tbl_diretorWhereInput
    some?: tbl_diretorWhereInput
    none?: tbl_diretorWhereInput
  }

  export type Tbl_atorListRelationFilter = {
    every?: tbl_atorWhereInput
    some?: tbl_atorWhereInput
    none?: tbl_atorWhereInput
  }

  export type tbl_diretorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_atorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_sexoCountOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
  }

  export type tbl_sexoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_sexoMaxOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
  }

  export type tbl_sexoMinOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
  }

  export type tbl_sexoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_filmeCreateNestedManyWithoutClassificacaoInput = {
    create?: XOR<tbl_filmeCreateWithoutClassificacaoInput, tbl_filmeUncheckedCreateWithoutClassificacaoInput> | tbl_filmeCreateWithoutClassificacaoInput[] | tbl_filmeUncheckedCreateWithoutClassificacaoInput[]
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutClassificacaoInput | tbl_filmeCreateOrConnectWithoutClassificacaoInput[]
    createMany?: tbl_filmeCreateManyClassificacaoInputEnvelope
    connect?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
  }

  export type tbl_filmeUncheckedCreateNestedManyWithoutClassificacaoInput = {
    create?: XOR<tbl_filmeCreateWithoutClassificacaoInput, tbl_filmeUncheckedCreateWithoutClassificacaoInput> | tbl_filmeCreateWithoutClassificacaoInput[] | tbl_filmeUncheckedCreateWithoutClassificacaoInput[]
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutClassificacaoInput | tbl_filmeCreateOrConnectWithoutClassificacaoInput[]
    createMany?: tbl_filmeCreateManyClassificacaoInputEnvelope
    connect?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type tbl_filmeUpdateManyWithoutClassificacaoNestedInput = {
    create?: XOR<tbl_filmeCreateWithoutClassificacaoInput, tbl_filmeUncheckedCreateWithoutClassificacaoInput> | tbl_filmeCreateWithoutClassificacaoInput[] | tbl_filmeUncheckedCreateWithoutClassificacaoInput[]
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutClassificacaoInput | tbl_filmeCreateOrConnectWithoutClassificacaoInput[]
    upsert?: tbl_filmeUpsertWithWhereUniqueWithoutClassificacaoInput | tbl_filmeUpsertWithWhereUniqueWithoutClassificacaoInput[]
    createMany?: tbl_filmeCreateManyClassificacaoInputEnvelope
    set?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    disconnect?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    delete?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    connect?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    update?: tbl_filmeUpdateWithWhereUniqueWithoutClassificacaoInput | tbl_filmeUpdateWithWhereUniqueWithoutClassificacaoInput[]
    updateMany?: tbl_filmeUpdateManyWithWhereWithoutClassificacaoInput | tbl_filmeUpdateManyWithWhereWithoutClassificacaoInput[]
    deleteMany?: tbl_filmeScalarWhereInput | tbl_filmeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_filmeUncheckedUpdateManyWithoutClassificacaoNestedInput = {
    create?: XOR<tbl_filmeCreateWithoutClassificacaoInput, tbl_filmeUncheckedCreateWithoutClassificacaoInput> | tbl_filmeCreateWithoutClassificacaoInput[] | tbl_filmeUncheckedCreateWithoutClassificacaoInput[]
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutClassificacaoInput | tbl_filmeCreateOrConnectWithoutClassificacaoInput[]
    upsert?: tbl_filmeUpsertWithWhereUniqueWithoutClassificacaoInput | tbl_filmeUpsertWithWhereUniqueWithoutClassificacaoInput[]
    createMany?: tbl_filmeCreateManyClassificacaoInputEnvelope
    set?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    disconnect?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    delete?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    connect?: tbl_filmeWhereUniqueInput | tbl_filmeWhereUniqueInput[]
    update?: tbl_filmeUpdateWithWhereUniqueWithoutClassificacaoInput | tbl_filmeUpdateWithWhereUniqueWithoutClassificacaoInput[]
    updateMany?: tbl_filmeUpdateManyWithWhereWithoutClassificacaoInput | tbl_filmeUpdateManyWithWhereWithoutClassificacaoInput[]
    deleteMany?: tbl_filmeScalarWhereInput | tbl_filmeScalarWhereInput[]
  }

  export type tbl_filme_generoCreateNestedManyWithoutGeneroInput = {
    create?: XOR<tbl_filme_generoCreateWithoutGeneroInput, tbl_filme_generoUncheckedCreateWithoutGeneroInput> | tbl_filme_generoCreateWithoutGeneroInput[] | tbl_filme_generoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutGeneroInput | tbl_filme_generoCreateOrConnectWithoutGeneroInput[]
    createMany?: tbl_filme_generoCreateManyGeneroInputEnvelope
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
  }

  export type tbl_filme_generoUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<tbl_filme_generoCreateWithoutGeneroInput, tbl_filme_generoUncheckedCreateWithoutGeneroInput> | tbl_filme_generoCreateWithoutGeneroInput[] | tbl_filme_generoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutGeneroInput | tbl_filme_generoCreateOrConnectWithoutGeneroInput[]
    createMany?: tbl_filme_generoCreateManyGeneroInputEnvelope
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
  }

  export type tbl_filme_generoUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<tbl_filme_generoCreateWithoutGeneroInput, tbl_filme_generoUncheckedCreateWithoutGeneroInput> | tbl_filme_generoCreateWithoutGeneroInput[] | tbl_filme_generoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutGeneroInput | tbl_filme_generoCreateOrConnectWithoutGeneroInput[]
    upsert?: tbl_filme_generoUpsertWithWhereUniqueWithoutGeneroInput | tbl_filme_generoUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: tbl_filme_generoCreateManyGeneroInputEnvelope
    set?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    disconnect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    delete?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    update?: tbl_filme_generoUpdateWithWhereUniqueWithoutGeneroInput | tbl_filme_generoUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: tbl_filme_generoUpdateManyWithWhereWithoutGeneroInput | tbl_filme_generoUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: tbl_filme_generoScalarWhereInput | tbl_filme_generoScalarWhereInput[]
  }

  export type tbl_filme_generoUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<tbl_filme_generoCreateWithoutGeneroInput, tbl_filme_generoUncheckedCreateWithoutGeneroInput> | tbl_filme_generoCreateWithoutGeneroInput[] | tbl_filme_generoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutGeneroInput | tbl_filme_generoCreateOrConnectWithoutGeneroInput[]
    upsert?: tbl_filme_generoUpsertWithWhereUniqueWithoutGeneroInput | tbl_filme_generoUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: tbl_filme_generoCreateManyGeneroInputEnvelope
    set?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    disconnect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    delete?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    update?: tbl_filme_generoUpdateWithWhereUniqueWithoutGeneroInput | tbl_filme_generoUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: tbl_filme_generoUpdateManyWithWhereWithoutGeneroInput | tbl_filme_generoUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: tbl_filme_generoScalarWhereInput | tbl_filme_generoScalarWhereInput[]
  }

  export type tbl_filmeCreateNestedOneWithoutGenerosInput = {
    create?: XOR<tbl_filmeCreateWithoutGenerosInput, tbl_filmeUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutGenerosInput
    connect?: tbl_filmeWhereUniqueInput
  }

  export type tbl_generoCreateNestedOneWithoutFilmesInput = {
    create?: XOR<tbl_generoCreateWithoutFilmesInput, tbl_generoUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_generoCreateOrConnectWithoutFilmesInput
    connect?: tbl_generoWhereUniqueInput
  }

  export type tbl_filmeUpdateOneRequiredWithoutGenerosNestedInput = {
    create?: XOR<tbl_filmeCreateWithoutGenerosInput, tbl_filmeUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutGenerosInput
    upsert?: tbl_filmeUpsertWithoutGenerosInput
    connect?: tbl_filmeWhereUniqueInput
    update?: XOR<XOR<tbl_filmeUpdateToOneWithWhereWithoutGenerosInput, tbl_filmeUpdateWithoutGenerosInput>, tbl_filmeUncheckedUpdateWithoutGenerosInput>
  }

  export type tbl_generoUpdateOneRequiredWithoutFilmesNestedInput = {
    create?: XOR<tbl_generoCreateWithoutFilmesInput, tbl_generoUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_generoCreateOrConnectWithoutFilmesInput
    upsert?: tbl_generoUpsertWithoutFilmesInput
    connect?: tbl_generoWhereUniqueInput
    update?: XOR<XOR<tbl_generoUpdateToOneWithWhereWithoutFilmesInput, tbl_generoUpdateWithoutFilmesInput>, tbl_generoUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_classificacaoCreateNestedOneWithoutFilmesInput = {
    create?: XOR<tbl_classificacaoCreateWithoutFilmesInput, tbl_classificacaoUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_classificacaoCreateOrConnectWithoutFilmesInput
    connect?: tbl_classificacaoWhereUniqueInput
  }

  export type tbl_filme_generoCreateNestedManyWithoutFilmeInput = {
    create?: XOR<tbl_filme_generoCreateWithoutFilmeInput, tbl_filme_generoUncheckedCreateWithoutFilmeInput> | tbl_filme_generoCreateWithoutFilmeInput[] | tbl_filme_generoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutFilmeInput | tbl_filme_generoCreateOrConnectWithoutFilmeInput[]
    createMany?: tbl_filme_generoCreateManyFilmeInputEnvelope
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
  }

  export type tbl_filme_diretorCreateNestedManyWithoutFilmeInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutFilmeInput, tbl_filme_diretorUncheckedCreateWithoutFilmeInput> | tbl_filme_diretorCreateWithoutFilmeInput[] | tbl_filme_diretorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutFilmeInput | tbl_filme_diretorCreateOrConnectWithoutFilmeInput[]
    createMany?: tbl_filme_diretorCreateManyFilmeInputEnvelope
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
  }

  export type tbl_filme_atorCreateNestedManyWithoutFilmeInput = {
    create?: XOR<tbl_filme_atorCreateWithoutFilmeInput, tbl_filme_atorUncheckedCreateWithoutFilmeInput> | tbl_filme_atorCreateWithoutFilmeInput[] | tbl_filme_atorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutFilmeInput | tbl_filme_atorCreateOrConnectWithoutFilmeInput[]
    createMany?: tbl_filme_atorCreateManyFilmeInputEnvelope
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
  }

  export type tbl_filme_generoUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<tbl_filme_generoCreateWithoutFilmeInput, tbl_filme_generoUncheckedCreateWithoutFilmeInput> | tbl_filme_generoCreateWithoutFilmeInput[] | tbl_filme_generoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutFilmeInput | tbl_filme_generoCreateOrConnectWithoutFilmeInput[]
    createMany?: tbl_filme_generoCreateManyFilmeInputEnvelope
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
  }

  export type tbl_filme_diretorUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutFilmeInput, tbl_filme_diretorUncheckedCreateWithoutFilmeInput> | tbl_filme_diretorCreateWithoutFilmeInput[] | tbl_filme_diretorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutFilmeInput | tbl_filme_diretorCreateOrConnectWithoutFilmeInput[]
    createMany?: tbl_filme_diretorCreateManyFilmeInputEnvelope
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
  }

  export type tbl_filme_atorUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<tbl_filme_atorCreateWithoutFilmeInput, tbl_filme_atorUncheckedCreateWithoutFilmeInput> | tbl_filme_atorCreateWithoutFilmeInput[] | tbl_filme_atorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutFilmeInput | tbl_filme_atorCreateOrConnectWithoutFilmeInput[]
    createMany?: tbl_filme_atorCreateManyFilmeInputEnvelope
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type tbl_classificacaoUpdateOneRequiredWithoutFilmesNestedInput = {
    create?: XOR<tbl_classificacaoCreateWithoutFilmesInput, tbl_classificacaoUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_classificacaoCreateOrConnectWithoutFilmesInput
    upsert?: tbl_classificacaoUpsertWithoutFilmesInput
    connect?: tbl_classificacaoWhereUniqueInput
    update?: XOR<XOR<tbl_classificacaoUpdateToOneWithWhereWithoutFilmesInput, tbl_classificacaoUpdateWithoutFilmesInput>, tbl_classificacaoUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_filme_generoUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<tbl_filme_generoCreateWithoutFilmeInput, tbl_filme_generoUncheckedCreateWithoutFilmeInput> | tbl_filme_generoCreateWithoutFilmeInput[] | tbl_filme_generoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutFilmeInput | tbl_filme_generoCreateOrConnectWithoutFilmeInput[]
    upsert?: tbl_filme_generoUpsertWithWhereUniqueWithoutFilmeInput | tbl_filme_generoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: tbl_filme_generoCreateManyFilmeInputEnvelope
    set?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    disconnect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    delete?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    update?: tbl_filme_generoUpdateWithWhereUniqueWithoutFilmeInput | tbl_filme_generoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: tbl_filme_generoUpdateManyWithWhereWithoutFilmeInput | tbl_filme_generoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: tbl_filme_generoScalarWhereInput | tbl_filme_generoScalarWhereInput[]
  }

  export type tbl_filme_diretorUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutFilmeInput, tbl_filme_diretorUncheckedCreateWithoutFilmeInput> | tbl_filme_diretorCreateWithoutFilmeInput[] | tbl_filme_diretorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutFilmeInput | tbl_filme_diretorCreateOrConnectWithoutFilmeInput[]
    upsert?: tbl_filme_diretorUpsertWithWhereUniqueWithoutFilmeInput | tbl_filme_diretorUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: tbl_filme_diretorCreateManyFilmeInputEnvelope
    set?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    disconnect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    delete?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    update?: tbl_filme_diretorUpdateWithWhereUniqueWithoutFilmeInput | tbl_filme_diretorUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: tbl_filme_diretorUpdateManyWithWhereWithoutFilmeInput | tbl_filme_diretorUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: tbl_filme_diretorScalarWhereInput | tbl_filme_diretorScalarWhereInput[]
  }

  export type tbl_filme_atorUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<tbl_filme_atorCreateWithoutFilmeInput, tbl_filme_atorUncheckedCreateWithoutFilmeInput> | tbl_filme_atorCreateWithoutFilmeInput[] | tbl_filme_atorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutFilmeInput | tbl_filme_atorCreateOrConnectWithoutFilmeInput[]
    upsert?: tbl_filme_atorUpsertWithWhereUniqueWithoutFilmeInput | tbl_filme_atorUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: tbl_filme_atorCreateManyFilmeInputEnvelope
    set?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    disconnect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    delete?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    update?: tbl_filme_atorUpdateWithWhereUniqueWithoutFilmeInput | tbl_filme_atorUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: tbl_filme_atorUpdateManyWithWhereWithoutFilmeInput | tbl_filme_atorUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: tbl_filme_atorScalarWhereInput | tbl_filme_atorScalarWhereInput[]
  }

  export type tbl_filme_generoUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<tbl_filme_generoCreateWithoutFilmeInput, tbl_filme_generoUncheckedCreateWithoutFilmeInput> | tbl_filme_generoCreateWithoutFilmeInput[] | tbl_filme_generoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_generoCreateOrConnectWithoutFilmeInput | tbl_filme_generoCreateOrConnectWithoutFilmeInput[]
    upsert?: tbl_filme_generoUpsertWithWhereUniqueWithoutFilmeInput | tbl_filme_generoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: tbl_filme_generoCreateManyFilmeInputEnvelope
    set?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    disconnect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    delete?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    connect?: tbl_filme_generoWhereUniqueInput | tbl_filme_generoWhereUniqueInput[]
    update?: tbl_filme_generoUpdateWithWhereUniqueWithoutFilmeInput | tbl_filme_generoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: tbl_filme_generoUpdateManyWithWhereWithoutFilmeInput | tbl_filme_generoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: tbl_filme_generoScalarWhereInput | tbl_filme_generoScalarWhereInput[]
  }

  export type tbl_filme_diretorUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutFilmeInput, tbl_filme_diretorUncheckedCreateWithoutFilmeInput> | tbl_filme_diretorCreateWithoutFilmeInput[] | tbl_filme_diretorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutFilmeInput | tbl_filme_diretorCreateOrConnectWithoutFilmeInput[]
    upsert?: tbl_filme_diretorUpsertWithWhereUniqueWithoutFilmeInput | tbl_filme_diretorUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: tbl_filme_diretorCreateManyFilmeInputEnvelope
    set?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    disconnect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    delete?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    update?: tbl_filme_diretorUpdateWithWhereUniqueWithoutFilmeInput | tbl_filme_diretorUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: tbl_filme_diretorUpdateManyWithWhereWithoutFilmeInput | tbl_filme_diretorUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: tbl_filme_diretorScalarWhereInput | tbl_filme_diretorScalarWhereInput[]
  }

  export type tbl_filme_atorUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<tbl_filme_atorCreateWithoutFilmeInput, tbl_filme_atorUncheckedCreateWithoutFilmeInput> | tbl_filme_atorCreateWithoutFilmeInput[] | tbl_filme_atorUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutFilmeInput | tbl_filme_atorCreateOrConnectWithoutFilmeInput[]
    upsert?: tbl_filme_atorUpsertWithWhereUniqueWithoutFilmeInput | tbl_filme_atorUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: tbl_filme_atorCreateManyFilmeInputEnvelope
    set?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    disconnect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    delete?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    update?: tbl_filme_atorUpdateWithWhereUniqueWithoutFilmeInput | tbl_filme_atorUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: tbl_filme_atorUpdateManyWithWhereWithoutFilmeInput | tbl_filme_atorUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: tbl_filme_atorScalarWhereInput | tbl_filme_atorScalarWhereInput[]
  }

  export type tbl_sexoCreateNestedOneWithoutDiretoresInput = {
    create?: XOR<tbl_sexoCreateWithoutDiretoresInput, tbl_sexoUncheckedCreateWithoutDiretoresInput>
    connectOrCreate?: tbl_sexoCreateOrConnectWithoutDiretoresInput
    connect?: tbl_sexoWhereUniqueInput
  }

  export type tbl_diretor_nacionalidadeCreateNestedManyWithoutDiretorInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput> | tbl_diretor_nacionalidadeCreateWithoutDiretorInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyDiretorInputEnvelope
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_filme_diretorCreateNestedManyWithoutDiretorInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutDiretorInput, tbl_filme_diretorUncheckedCreateWithoutDiretorInput> | tbl_filme_diretorCreateWithoutDiretorInput[] | tbl_filme_diretorUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutDiretorInput | tbl_filme_diretorCreateOrConnectWithoutDiretorInput[]
    createMany?: tbl_filme_diretorCreateManyDiretorInputEnvelope
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
  }

  export type tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutDiretorInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput> | tbl_diretor_nacionalidadeCreateWithoutDiretorInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyDiretorInputEnvelope
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_filme_diretorUncheckedCreateNestedManyWithoutDiretorInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutDiretorInput, tbl_filme_diretorUncheckedCreateWithoutDiretorInput> | tbl_filme_diretorCreateWithoutDiretorInput[] | tbl_filme_diretorUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutDiretorInput | tbl_filme_diretorCreateOrConnectWithoutDiretorInput[]
    createMany?: tbl_filme_diretorCreateManyDiretorInputEnvelope
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
  }

  export type tbl_sexoUpdateOneRequiredWithoutDiretoresNestedInput = {
    create?: XOR<tbl_sexoCreateWithoutDiretoresInput, tbl_sexoUncheckedCreateWithoutDiretoresInput>
    connectOrCreate?: tbl_sexoCreateOrConnectWithoutDiretoresInput
    upsert?: tbl_sexoUpsertWithoutDiretoresInput
    connect?: tbl_sexoWhereUniqueInput
    update?: XOR<XOR<tbl_sexoUpdateToOneWithWhereWithoutDiretoresInput, tbl_sexoUpdateWithoutDiretoresInput>, tbl_sexoUncheckedUpdateWithoutDiretoresInput>
  }

  export type tbl_diretor_nacionalidadeUpdateManyWithoutDiretorNestedInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput> | tbl_diretor_nacionalidadeCreateWithoutDiretorInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput[]
    upsert?: tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutDiretorInput | tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutDiretorInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyDiretorInputEnvelope
    set?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    delete?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    update?: tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutDiretorInput | tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutDiretorInput[]
    updateMany?: tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutDiretorInput | tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutDiretorInput[]
    deleteMany?: tbl_diretor_nacionalidadeScalarWhereInput | tbl_diretor_nacionalidadeScalarWhereInput[]
  }

  export type tbl_filme_diretorUpdateManyWithoutDiretorNestedInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutDiretorInput, tbl_filme_diretorUncheckedCreateWithoutDiretorInput> | tbl_filme_diretorCreateWithoutDiretorInput[] | tbl_filme_diretorUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutDiretorInput | tbl_filme_diretorCreateOrConnectWithoutDiretorInput[]
    upsert?: tbl_filme_diretorUpsertWithWhereUniqueWithoutDiretorInput | tbl_filme_diretorUpsertWithWhereUniqueWithoutDiretorInput[]
    createMany?: tbl_filme_diretorCreateManyDiretorInputEnvelope
    set?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    disconnect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    delete?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    update?: tbl_filme_diretorUpdateWithWhereUniqueWithoutDiretorInput | tbl_filme_diretorUpdateWithWhereUniqueWithoutDiretorInput[]
    updateMany?: tbl_filme_diretorUpdateManyWithWhereWithoutDiretorInput | tbl_filme_diretorUpdateManyWithWhereWithoutDiretorInput[]
    deleteMany?: tbl_filme_diretorScalarWhereInput | tbl_filme_diretorScalarWhereInput[]
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutDiretorNestedInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput> | tbl_diretor_nacionalidadeCreateWithoutDiretorInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput[]
    upsert?: tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutDiretorInput | tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutDiretorInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyDiretorInputEnvelope
    set?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    delete?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    update?: tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutDiretorInput | tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutDiretorInput[]
    updateMany?: tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutDiretorInput | tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutDiretorInput[]
    deleteMany?: tbl_diretor_nacionalidadeScalarWhereInput | tbl_diretor_nacionalidadeScalarWhereInput[]
  }

  export type tbl_filme_diretorUncheckedUpdateManyWithoutDiretorNestedInput = {
    create?: XOR<tbl_filme_diretorCreateWithoutDiretorInput, tbl_filme_diretorUncheckedCreateWithoutDiretorInput> | tbl_filme_diretorCreateWithoutDiretorInput[] | tbl_filme_diretorUncheckedCreateWithoutDiretorInput[]
    connectOrCreate?: tbl_filme_diretorCreateOrConnectWithoutDiretorInput | tbl_filme_diretorCreateOrConnectWithoutDiretorInput[]
    upsert?: tbl_filme_diretorUpsertWithWhereUniqueWithoutDiretorInput | tbl_filme_diretorUpsertWithWhereUniqueWithoutDiretorInput[]
    createMany?: tbl_filme_diretorCreateManyDiretorInputEnvelope
    set?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    disconnect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    delete?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    connect?: tbl_filme_diretorWhereUniqueInput | tbl_filme_diretorWhereUniqueInput[]
    update?: tbl_filme_diretorUpdateWithWhereUniqueWithoutDiretorInput | tbl_filme_diretorUpdateWithWhereUniqueWithoutDiretorInput[]
    updateMany?: tbl_filme_diretorUpdateManyWithWhereWithoutDiretorInput | tbl_filme_diretorUpdateManyWithWhereWithoutDiretorInput[]
    deleteMany?: tbl_filme_diretorScalarWhereInput | tbl_filme_diretorScalarWhereInput[]
  }

  export type tbl_filmeCreateNestedOneWithoutDiretoresInput = {
    create?: XOR<tbl_filmeCreateWithoutDiretoresInput, tbl_filmeUncheckedCreateWithoutDiretoresInput>
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutDiretoresInput
    connect?: tbl_filmeWhereUniqueInput
  }

  export type tbl_diretorCreateNestedOneWithoutFilmesInput = {
    create?: XOR<tbl_diretorCreateWithoutFilmesInput, tbl_diretorUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutFilmesInput
    connect?: tbl_diretorWhereUniqueInput
  }

  export type tbl_filmeUpdateOneRequiredWithoutDiretoresNestedInput = {
    create?: XOR<tbl_filmeCreateWithoutDiretoresInput, tbl_filmeUncheckedCreateWithoutDiretoresInput>
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutDiretoresInput
    upsert?: tbl_filmeUpsertWithoutDiretoresInput
    connect?: tbl_filmeWhereUniqueInput
    update?: XOR<XOR<tbl_filmeUpdateToOneWithWhereWithoutDiretoresInput, tbl_filmeUpdateWithoutDiretoresInput>, tbl_filmeUncheckedUpdateWithoutDiretoresInput>
  }

  export type tbl_diretorUpdateOneRequiredWithoutFilmesNestedInput = {
    create?: XOR<tbl_diretorCreateWithoutFilmesInput, tbl_diretorUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutFilmesInput
    upsert?: tbl_diretorUpsertWithoutFilmesInput
    connect?: tbl_diretorWhereUniqueInput
    update?: XOR<XOR<tbl_diretorUpdateToOneWithWhereWithoutFilmesInput, tbl_diretorUpdateWithoutFilmesInput>, tbl_diretorUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_sexoCreateNestedOneWithoutAtoresInput = {
    create?: XOR<tbl_sexoCreateWithoutAtoresInput, tbl_sexoUncheckedCreateWithoutAtoresInput>
    connectOrCreate?: tbl_sexoCreateOrConnectWithoutAtoresInput
    connect?: tbl_sexoWhereUniqueInput
  }

  export type tbl_ator_nacionalidadeCreateNestedManyWithoutAtorInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput> | tbl_ator_nacionalidadeCreateWithoutAtorInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput | tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyAtorInputEnvelope
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_filme_atorCreateNestedManyWithoutAtorInput = {
    create?: XOR<tbl_filme_atorCreateWithoutAtorInput, tbl_filme_atorUncheckedCreateWithoutAtorInput> | tbl_filme_atorCreateWithoutAtorInput[] | tbl_filme_atorUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutAtorInput | tbl_filme_atorCreateOrConnectWithoutAtorInput[]
    createMany?: tbl_filme_atorCreateManyAtorInputEnvelope
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
  }

  export type tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutAtorInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput> | tbl_ator_nacionalidadeCreateWithoutAtorInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput | tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyAtorInputEnvelope
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_filme_atorUncheckedCreateNestedManyWithoutAtorInput = {
    create?: XOR<tbl_filme_atorCreateWithoutAtorInput, tbl_filme_atorUncheckedCreateWithoutAtorInput> | tbl_filme_atorCreateWithoutAtorInput[] | tbl_filme_atorUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutAtorInput | tbl_filme_atorCreateOrConnectWithoutAtorInput[]
    createMany?: tbl_filme_atorCreateManyAtorInputEnvelope
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
  }

  export type tbl_sexoUpdateOneRequiredWithoutAtoresNestedInput = {
    create?: XOR<tbl_sexoCreateWithoutAtoresInput, tbl_sexoUncheckedCreateWithoutAtoresInput>
    connectOrCreate?: tbl_sexoCreateOrConnectWithoutAtoresInput
    upsert?: tbl_sexoUpsertWithoutAtoresInput
    connect?: tbl_sexoWhereUniqueInput
    update?: XOR<XOR<tbl_sexoUpdateToOneWithWhereWithoutAtoresInput, tbl_sexoUpdateWithoutAtoresInput>, tbl_sexoUncheckedUpdateWithoutAtoresInput>
  }

  export type tbl_ator_nacionalidadeUpdateManyWithoutAtorNestedInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput> | tbl_ator_nacionalidadeCreateWithoutAtorInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput | tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput[]
    upsert?: tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutAtorInput | tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutAtorInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyAtorInputEnvelope
    set?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    delete?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    update?: tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutAtorInput | tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutAtorInput[]
    updateMany?: tbl_ator_nacionalidadeUpdateManyWithWhereWithoutAtorInput | tbl_ator_nacionalidadeUpdateManyWithWhereWithoutAtorInput[]
    deleteMany?: tbl_ator_nacionalidadeScalarWhereInput | tbl_ator_nacionalidadeScalarWhereInput[]
  }

  export type tbl_filme_atorUpdateManyWithoutAtorNestedInput = {
    create?: XOR<tbl_filme_atorCreateWithoutAtorInput, tbl_filme_atorUncheckedCreateWithoutAtorInput> | tbl_filme_atorCreateWithoutAtorInput[] | tbl_filme_atorUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutAtorInput | tbl_filme_atorCreateOrConnectWithoutAtorInput[]
    upsert?: tbl_filme_atorUpsertWithWhereUniqueWithoutAtorInput | tbl_filme_atorUpsertWithWhereUniqueWithoutAtorInput[]
    createMany?: tbl_filme_atorCreateManyAtorInputEnvelope
    set?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    disconnect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    delete?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    update?: tbl_filme_atorUpdateWithWhereUniqueWithoutAtorInput | tbl_filme_atorUpdateWithWhereUniqueWithoutAtorInput[]
    updateMany?: tbl_filme_atorUpdateManyWithWhereWithoutAtorInput | tbl_filme_atorUpdateManyWithWhereWithoutAtorInput[]
    deleteMany?: tbl_filme_atorScalarWhereInput | tbl_filme_atorScalarWhereInput[]
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateManyWithoutAtorNestedInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput> | tbl_ator_nacionalidadeCreateWithoutAtorInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput | tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput[]
    upsert?: tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutAtorInput | tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutAtorInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyAtorInputEnvelope
    set?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    delete?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    update?: tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutAtorInput | tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutAtorInput[]
    updateMany?: tbl_ator_nacionalidadeUpdateManyWithWhereWithoutAtorInput | tbl_ator_nacionalidadeUpdateManyWithWhereWithoutAtorInput[]
    deleteMany?: tbl_ator_nacionalidadeScalarWhereInput | tbl_ator_nacionalidadeScalarWhereInput[]
  }

  export type tbl_filme_atorUncheckedUpdateManyWithoutAtorNestedInput = {
    create?: XOR<tbl_filme_atorCreateWithoutAtorInput, tbl_filme_atorUncheckedCreateWithoutAtorInput> | tbl_filme_atorCreateWithoutAtorInput[] | tbl_filme_atorUncheckedCreateWithoutAtorInput[]
    connectOrCreate?: tbl_filme_atorCreateOrConnectWithoutAtorInput | tbl_filme_atorCreateOrConnectWithoutAtorInput[]
    upsert?: tbl_filme_atorUpsertWithWhereUniqueWithoutAtorInput | tbl_filme_atorUpsertWithWhereUniqueWithoutAtorInput[]
    createMany?: tbl_filme_atorCreateManyAtorInputEnvelope
    set?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    disconnect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    delete?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    connect?: tbl_filme_atorWhereUniqueInput | tbl_filme_atorWhereUniqueInput[]
    update?: tbl_filme_atorUpdateWithWhereUniqueWithoutAtorInput | tbl_filme_atorUpdateWithWhereUniqueWithoutAtorInput[]
    updateMany?: tbl_filme_atorUpdateManyWithWhereWithoutAtorInput | tbl_filme_atorUpdateManyWithWhereWithoutAtorInput[]
    deleteMany?: tbl_filme_atorScalarWhereInput | tbl_filme_atorScalarWhereInput[]
  }

  export type tbl_filmeCreateNestedOneWithoutAtoresInput = {
    create?: XOR<tbl_filmeCreateWithoutAtoresInput, tbl_filmeUncheckedCreateWithoutAtoresInput>
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutAtoresInput
    connect?: tbl_filmeWhereUniqueInput
  }

  export type tbl_atorCreateNestedOneWithoutFilmesInput = {
    create?: XOR<tbl_atorCreateWithoutFilmesInput, tbl_atorUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_atorCreateOrConnectWithoutFilmesInput
    connect?: tbl_atorWhereUniqueInput
  }

  export type tbl_filmeUpdateOneRequiredWithoutAtoresNestedInput = {
    create?: XOR<tbl_filmeCreateWithoutAtoresInput, tbl_filmeUncheckedCreateWithoutAtoresInput>
    connectOrCreate?: tbl_filmeCreateOrConnectWithoutAtoresInput
    upsert?: tbl_filmeUpsertWithoutAtoresInput
    connect?: tbl_filmeWhereUniqueInput
    update?: XOR<XOR<tbl_filmeUpdateToOneWithWhereWithoutAtoresInput, tbl_filmeUpdateWithoutAtoresInput>, tbl_filmeUncheckedUpdateWithoutAtoresInput>
  }

  export type tbl_atorUpdateOneRequiredWithoutFilmesNestedInput = {
    create?: XOR<tbl_atorCreateWithoutFilmesInput, tbl_atorUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: tbl_atorCreateOrConnectWithoutFilmesInput
    upsert?: tbl_atorUpsertWithoutFilmesInput
    connect?: tbl_atorWhereUniqueInput
    update?: XOR<XOR<tbl_atorUpdateToOneWithWhereWithoutFilmesInput, tbl_atorUpdateWithoutFilmesInput>, tbl_atorUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_diretor_nacionalidadeCreateNestedManyWithoutNacionalidadeInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyNacionalidadeInputEnvelope
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_ator_nacionalidadeCreateNestedManyWithoutNacionalidadeInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyNacionalidadeInputEnvelope
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutNacionalidadeInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyNacionalidadeInputEnvelope
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutNacionalidadeInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyNacionalidadeInputEnvelope
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
  }

  export type tbl_diretor_nacionalidadeUpdateManyWithoutNacionalidadeNestedInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    upsert?: tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput | tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyNacionalidadeInputEnvelope
    set?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    delete?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    update?: tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput | tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput[]
    updateMany?: tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput | tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput[]
    deleteMany?: tbl_diretor_nacionalidadeScalarWhereInput | tbl_diretor_nacionalidadeScalarWhereInput[]
  }

  export type tbl_ator_nacionalidadeUpdateManyWithoutNacionalidadeNestedInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    upsert?: tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput | tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyNacionalidadeInputEnvelope
    set?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    delete?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    update?: tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput | tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput[]
    updateMany?: tbl_ator_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput | tbl_ator_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput[]
    deleteMany?: tbl_ator_nacionalidadeScalarWhereInput | tbl_ator_nacionalidadeScalarWhereInput[]
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeNestedInput = {
    create?: XOR<tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    upsert?: tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput | tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput[]
    createMany?: tbl_diretor_nacionalidadeCreateManyNacionalidadeInputEnvelope
    set?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    delete?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    connect?: tbl_diretor_nacionalidadeWhereUniqueInput | tbl_diretor_nacionalidadeWhereUniqueInput[]
    update?: tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput | tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput[]
    updateMany?: tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput | tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput[]
    deleteMany?: tbl_diretor_nacionalidadeScalarWhereInput | tbl_diretor_nacionalidadeScalarWhereInput[]
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeNestedInput = {
    create?: XOR<tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput> | tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput[] | tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput[]
    connectOrCreate?: tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput | tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput[]
    upsert?: tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput | tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput[]
    createMany?: tbl_ator_nacionalidadeCreateManyNacionalidadeInputEnvelope
    set?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    disconnect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    delete?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    connect?: tbl_ator_nacionalidadeWhereUniqueInput | tbl_ator_nacionalidadeWhereUniqueInput[]
    update?: tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput | tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput[]
    updateMany?: tbl_ator_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput | tbl_ator_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput[]
    deleteMany?: tbl_ator_nacionalidadeScalarWhereInput | tbl_ator_nacionalidadeScalarWhereInput[]
  }

  export type tbl_diretorCreateNestedOneWithoutNacionalidadesInput = {
    create?: XOR<tbl_diretorCreateWithoutNacionalidadesInput, tbl_diretorUncheckedCreateWithoutNacionalidadesInput>
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutNacionalidadesInput
    connect?: tbl_diretorWhereUniqueInput
  }

  export type tbl_nacionalidadeCreateNestedOneWithoutDiretoresInput = {
    create?: XOR<tbl_nacionalidadeCreateWithoutDiretoresInput, tbl_nacionalidadeUncheckedCreateWithoutDiretoresInput>
    connectOrCreate?: tbl_nacionalidadeCreateOrConnectWithoutDiretoresInput
    connect?: tbl_nacionalidadeWhereUniqueInput
  }

  export type tbl_diretorUpdateOneRequiredWithoutNacionalidadesNestedInput = {
    create?: XOR<tbl_diretorCreateWithoutNacionalidadesInput, tbl_diretorUncheckedCreateWithoutNacionalidadesInput>
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutNacionalidadesInput
    upsert?: tbl_diretorUpsertWithoutNacionalidadesInput
    connect?: tbl_diretorWhereUniqueInput
    update?: XOR<XOR<tbl_diretorUpdateToOneWithWhereWithoutNacionalidadesInput, tbl_diretorUpdateWithoutNacionalidadesInput>, tbl_diretorUncheckedUpdateWithoutNacionalidadesInput>
  }

  export type tbl_nacionalidadeUpdateOneRequiredWithoutDiretoresNestedInput = {
    create?: XOR<tbl_nacionalidadeCreateWithoutDiretoresInput, tbl_nacionalidadeUncheckedCreateWithoutDiretoresInput>
    connectOrCreate?: tbl_nacionalidadeCreateOrConnectWithoutDiretoresInput
    upsert?: tbl_nacionalidadeUpsertWithoutDiretoresInput
    connect?: tbl_nacionalidadeWhereUniqueInput
    update?: XOR<XOR<tbl_nacionalidadeUpdateToOneWithWhereWithoutDiretoresInput, tbl_nacionalidadeUpdateWithoutDiretoresInput>, tbl_nacionalidadeUncheckedUpdateWithoutDiretoresInput>
  }

  export type tbl_atorCreateNestedOneWithoutNacionalidadesInput = {
    create?: XOR<tbl_atorCreateWithoutNacionalidadesInput, tbl_atorUncheckedCreateWithoutNacionalidadesInput>
    connectOrCreate?: tbl_atorCreateOrConnectWithoutNacionalidadesInput
    connect?: tbl_atorWhereUniqueInput
  }

  export type tbl_nacionalidadeCreateNestedOneWithoutAtoresInput = {
    create?: XOR<tbl_nacionalidadeCreateWithoutAtoresInput, tbl_nacionalidadeUncheckedCreateWithoutAtoresInput>
    connectOrCreate?: tbl_nacionalidadeCreateOrConnectWithoutAtoresInput
    connect?: tbl_nacionalidadeWhereUniqueInput
  }

  export type tbl_atorUpdateOneRequiredWithoutNacionalidadesNestedInput = {
    create?: XOR<tbl_atorCreateWithoutNacionalidadesInput, tbl_atorUncheckedCreateWithoutNacionalidadesInput>
    connectOrCreate?: tbl_atorCreateOrConnectWithoutNacionalidadesInput
    upsert?: tbl_atorUpsertWithoutNacionalidadesInput
    connect?: tbl_atorWhereUniqueInput
    update?: XOR<XOR<tbl_atorUpdateToOneWithWhereWithoutNacionalidadesInput, tbl_atorUpdateWithoutNacionalidadesInput>, tbl_atorUncheckedUpdateWithoutNacionalidadesInput>
  }

  export type tbl_nacionalidadeUpdateOneRequiredWithoutAtoresNestedInput = {
    create?: XOR<tbl_nacionalidadeCreateWithoutAtoresInput, tbl_nacionalidadeUncheckedCreateWithoutAtoresInput>
    connectOrCreate?: tbl_nacionalidadeCreateOrConnectWithoutAtoresInput
    upsert?: tbl_nacionalidadeUpsertWithoutAtoresInput
    connect?: tbl_nacionalidadeWhereUniqueInput
    update?: XOR<XOR<tbl_nacionalidadeUpdateToOneWithWhereWithoutAtoresInput, tbl_nacionalidadeUpdateWithoutAtoresInput>, tbl_nacionalidadeUncheckedUpdateWithoutAtoresInput>
  }

  export type tbl_diretorCreateNestedManyWithoutSexoInput = {
    create?: XOR<tbl_diretorCreateWithoutSexoInput, tbl_diretorUncheckedCreateWithoutSexoInput> | tbl_diretorCreateWithoutSexoInput[] | tbl_diretorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutSexoInput | tbl_diretorCreateOrConnectWithoutSexoInput[]
    createMany?: tbl_diretorCreateManySexoInputEnvelope
    connect?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
  }

  export type tbl_atorCreateNestedManyWithoutSexoInput = {
    create?: XOR<tbl_atorCreateWithoutSexoInput, tbl_atorUncheckedCreateWithoutSexoInput> | tbl_atorCreateWithoutSexoInput[] | tbl_atorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_atorCreateOrConnectWithoutSexoInput | tbl_atorCreateOrConnectWithoutSexoInput[]
    createMany?: tbl_atorCreateManySexoInputEnvelope
    connect?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
  }

  export type tbl_diretorUncheckedCreateNestedManyWithoutSexoInput = {
    create?: XOR<tbl_diretorCreateWithoutSexoInput, tbl_diretorUncheckedCreateWithoutSexoInput> | tbl_diretorCreateWithoutSexoInput[] | tbl_diretorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutSexoInput | tbl_diretorCreateOrConnectWithoutSexoInput[]
    createMany?: tbl_diretorCreateManySexoInputEnvelope
    connect?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
  }

  export type tbl_atorUncheckedCreateNestedManyWithoutSexoInput = {
    create?: XOR<tbl_atorCreateWithoutSexoInput, tbl_atorUncheckedCreateWithoutSexoInput> | tbl_atorCreateWithoutSexoInput[] | tbl_atorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_atorCreateOrConnectWithoutSexoInput | tbl_atorCreateOrConnectWithoutSexoInput[]
    createMany?: tbl_atorCreateManySexoInputEnvelope
    connect?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
  }

  export type tbl_diretorUpdateManyWithoutSexoNestedInput = {
    create?: XOR<tbl_diretorCreateWithoutSexoInput, tbl_diretorUncheckedCreateWithoutSexoInput> | tbl_diretorCreateWithoutSexoInput[] | tbl_diretorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutSexoInput | tbl_diretorCreateOrConnectWithoutSexoInput[]
    upsert?: tbl_diretorUpsertWithWhereUniqueWithoutSexoInput | tbl_diretorUpsertWithWhereUniqueWithoutSexoInput[]
    createMany?: tbl_diretorCreateManySexoInputEnvelope
    set?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    disconnect?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    delete?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    connect?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    update?: tbl_diretorUpdateWithWhereUniqueWithoutSexoInput | tbl_diretorUpdateWithWhereUniqueWithoutSexoInput[]
    updateMany?: tbl_diretorUpdateManyWithWhereWithoutSexoInput | tbl_diretorUpdateManyWithWhereWithoutSexoInput[]
    deleteMany?: tbl_diretorScalarWhereInput | tbl_diretorScalarWhereInput[]
  }

  export type tbl_atorUpdateManyWithoutSexoNestedInput = {
    create?: XOR<tbl_atorCreateWithoutSexoInput, tbl_atorUncheckedCreateWithoutSexoInput> | tbl_atorCreateWithoutSexoInput[] | tbl_atorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_atorCreateOrConnectWithoutSexoInput | tbl_atorCreateOrConnectWithoutSexoInput[]
    upsert?: tbl_atorUpsertWithWhereUniqueWithoutSexoInput | tbl_atorUpsertWithWhereUniqueWithoutSexoInput[]
    createMany?: tbl_atorCreateManySexoInputEnvelope
    set?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    disconnect?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    delete?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    connect?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    update?: tbl_atorUpdateWithWhereUniqueWithoutSexoInput | tbl_atorUpdateWithWhereUniqueWithoutSexoInput[]
    updateMany?: tbl_atorUpdateManyWithWhereWithoutSexoInput | tbl_atorUpdateManyWithWhereWithoutSexoInput[]
    deleteMany?: tbl_atorScalarWhereInput | tbl_atorScalarWhereInput[]
  }

  export type tbl_diretorUncheckedUpdateManyWithoutSexoNestedInput = {
    create?: XOR<tbl_diretorCreateWithoutSexoInput, tbl_diretorUncheckedCreateWithoutSexoInput> | tbl_diretorCreateWithoutSexoInput[] | tbl_diretorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_diretorCreateOrConnectWithoutSexoInput | tbl_diretorCreateOrConnectWithoutSexoInput[]
    upsert?: tbl_diretorUpsertWithWhereUniqueWithoutSexoInput | tbl_diretorUpsertWithWhereUniqueWithoutSexoInput[]
    createMany?: tbl_diretorCreateManySexoInputEnvelope
    set?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    disconnect?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    delete?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    connect?: tbl_diretorWhereUniqueInput | tbl_diretorWhereUniqueInput[]
    update?: tbl_diretorUpdateWithWhereUniqueWithoutSexoInput | tbl_diretorUpdateWithWhereUniqueWithoutSexoInput[]
    updateMany?: tbl_diretorUpdateManyWithWhereWithoutSexoInput | tbl_diretorUpdateManyWithWhereWithoutSexoInput[]
    deleteMany?: tbl_diretorScalarWhereInput | tbl_diretorScalarWhereInput[]
  }

  export type tbl_atorUncheckedUpdateManyWithoutSexoNestedInput = {
    create?: XOR<tbl_atorCreateWithoutSexoInput, tbl_atorUncheckedCreateWithoutSexoInput> | tbl_atorCreateWithoutSexoInput[] | tbl_atorUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_atorCreateOrConnectWithoutSexoInput | tbl_atorCreateOrConnectWithoutSexoInput[]
    upsert?: tbl_atorUpsertWithWhereUniqueWithoutSexoInput | tbl_atorUpsertWithWhereUniqueWithoutSexoInput[]
    createMany?: tbl_atorCreateManySexoInputEnvelope
    set?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    disconnect?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    delete?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    connect?: tbl_atorWhereUniqueInput | tbl_atorWhereUniqueInput[]
    update?: tbl_atorUpdateWithWhereUniqueWithoutSexoInput | tbl_atorUpdateWithWhereUniqueWithoutSexoInput[]
    updateMany?: tbl_atorUpdateManyWithWhereWithoutSexoInput | tbl_atorUpdateManyWithWhereWithoutSexoInput[]
    deleteMany?: tbl_atorScalarWhereInput | tbl_atorScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type tbl_filmeCreateWithoutClassificacaoInput = {
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    generos?: tbl_filme_generoCreateNestedManyWithoutFilmeInput
    diretores?: tbl_filme_diretorCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeUncheckedCreateWithoutClassificacaoInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    generos?: tbl_filme_generoUncheckedCreateNestedManyWithoutFilmeInput
    diretores?: tbl_filme_diretorUncheckedCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeCreateOrConnectWithoutClassificacaoInput = {
    where: tbl_filmeWhereUniqueInput
    create: XOR<tbl_filmeCreateWithoutClassificacaoInput, tbl_filmeUncheckedCreateWithoutClassificacaoInput>
  }

  export type tbl_filmeCreateManyClassificacaoInputEnvelope = {
    data: tbl_filmeCreateManyClassificacaoInput | tbl_filmeCreateManyClassificacaoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_filmeUpsertWithWhereUniqueWithoutClassificacaoInput = {
    where: tbl_filmeWhereUniqueInput
    update: XOR<tbl_filmeUpdateWithoutClassificacaoInput, tbl_filmeUncheckedUpdateWithoutClassificacaoInput>
    create: XOR<tbl_filmeCreateWithoutClassificacaoInput, tbl_filmeUncheckedCreateWithoutClassificacaoInput>
  }

  export type tbl_filmeUpdateWithWhereUniqueWithoutClassificacaoInput = {
    where: tbl_filmeWhereUniqueInput
    data: XOR<tbl_filmeUpdateWithoutClassificacaoInput, tbl_filmeUncheckedUpdateWithoutClassificacaoInput>
  }

  export type tbl_filmeUpdateManyWithWhereWithoutClassificacaoInput = {
    where: tbl_filmeScalarWhereInput
    data: XOR<tbl_filmeUpdateManyMutationInput, tbl_filmeUncheckedUpdateManyWithoutClassificacaoInput>
  }

  export type tbl_filmeScalarWhereInput = {
    AND?: tbl_filmeScalarWhereInput | tbl_filmeScalarWhereInput[]
    OR?: tbl_filmeScalarWhereInput[]
    NOT?: tbl_filmeScalarWhereInput | tbl_filmeScalarWhereInput[]
    id?: IntFilter<"tbl_filme"> | number
    nome?: StringFilter<"tbl_filme"> | string
    nome_original?: StringFilter<"tbl_filme"> | string
    data_lancamento?: DateTimeFilter<"tbl_filme"> | Date | string
    data_relancamento?: DateTimeNullableFilter<"tbl_filme"> | Date | string | null
    duracao?: StringFilter<"tbl_filme"> | string
    sinopse?: StringFilter<"tbl_filme"> | string
    foto_capa?: StringFilter<"tbl_filme"> | string
    id_classificacao?: IntFilter<"tbl_filme"> | number
  }

  export type tbl_filme_generoCreateWithoutGeneroInput = {
    filme: tbl_filmeCreateNestedOneWithoutGenerosInput
  }

  export type tbl_filme_generoUncheckedCreateWithoutGeneroInput = {
    id?: number
    id_filme: number
  }

  export type tbl_filme_generoCreateOrConnectWithoutGeneroInput = {
    where: tbl_filme_generoWhereUniqueInput
    create: XOR<tbl_filme_generoCreateWithoutGeneroInput, tbl_filme_generoUncheckedCreateWithoutGeneroInput>
  }

  export type tbl_filme_generoCreateManyGeneroInputEnvelope = {
    data: tbl_filme_generoCreateManyGeneroInput | tbl_filme_generoCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type tbl_filme_generoUpsertWithWhereUniqueWithoutGeneroInput = {
    where: tbl_filme_generoWhereUniqueInput
    update: XOR<tbl_filme_generoUpdateWithoutGeneroInput, tbl_filme_generoUncheckedUpdateWithoutGeneroInput>
    create: XOR<tbl_filme_generoCreateWithoutGeneroInput, tbl_filme_generoUncheckedCreateWithoutGeneroInput>
  }

  export type tbl_filme_generoUpdateWithWhereUniqueWithoutGeneroInput = {
    where: tbl_filme_generoWhereUniqueInput
    data: XOR<tbl_filme_generoUpdateWithoutGeneroInput, tbl_filme_generoUncheckedUpdateWithoutGeneroInput>
  }

  export type tbl_filme_generoUpdateManyWithWhereWithoutGeneroInput = {
    where: tbl_filme_generoScalarWhereInput
    data: XOR<tbl_filme_generoUpdateManyMutationInput, tbl_filme_generoUncheckedUpdateManyWithoutGeneroInput>
  }

  export type tbl_filme_generoScalarWhereInput = {
    AND?: tbl_filme_generoScalarWhereInput | tbl_filme_generoScalarWhereInput[]
    OR?: tbl_filme_generoScalarWhereInput[]
    NOT?: tbl_filme_generoScalarWhereInput | tbl_filme_generoScalarWhereInput[]
    id?: IntFilter<"tbl_filme_genero"> | number
    id_filme?: IntFilter<"tbl_filme_genero"> | number
    id_genero?: IntFilter<"tbl_filme_genero"> | number
  }

  export type tbl_filmeCreateWithoutGenerosInput = {
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    classificacao: tbl_classificacaoCreateNestedOneWithoutFilmesInput
    diretores?: tbl_filme_diretorCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeUncheckedCreateWithoutGenerosInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    id_classificacao: number
    diretores?: tbl_filme_diretorUncheckedCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeCreateOrConnectWithoutGenerosInput = {
    where: tbl_filmeWhereUniqueInput
    create: XOR<tbl_filmeCreateWithoutGenerosInput, tbl_filmeUncheckedCreateWithoutGenerosInput>
  }

  export type tbl_generoCreateWithoutFilmesInput = {
    nome: string
  }

  export type tbl_generoUncheckedCreateWithoutFilmesInput = {
    id?: number
    nome: string
  }

  export type tbl_generoCreateOrConnectWithoutFilmesInput = {
    where: tbl_generoWhereUniqueInput
    create: XOR<tbl_generoCreateWithoutFilmesInput, tbl_generoUncheckedCreateWithoutFilmesInput>
  }

  export type tbl_filmeUpsertWithoutGenerosInput = {
    update: XOR<tbl_filmeUpdateWithoutGenerosInput, tbl_filmeUncheckedUpdateWithoutGenerosInput>
    create: XOR<tbl_filmeCreateWithoutGenerosInput, tbl_filmeUncheckedCreateWithoutGenerosInput>
    where?: tbl_filmeWhereInput
  }

  export type tbl_filmeUpdateToOneWithWhereWithoutGenerosInput = {
    where?: tbl_filmeWhereInput
    data: XOR<tbl_filmeUpdateWithoutGenerosInput, tbl_filmeUncheckedUpdateWithoutGenerosInput>
  }

  export type tbl_filmeUpdateWithoutGenerosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    classificacao?: tbl_classificacaoUpdateOneRequiredWithoutFilmesNestedInput
    diretores?: tbl_filme_diretorUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    id_classificacao?: IntFieldUpdateOperationsInput | number
    diretores?: tbl_filme_diretorUncheckedUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_generoUpsertWithoutFilmesInput = {
    update: XOR<tbl_generoUpdateWithoutFilmesInput, tbl_generoUncheckedUpdateWithoutFilmesInput>
    create: XOR<tbl_generoCreateWithoutFilmesInput, tbl_generoUncheckedCreateWithoutFilmesInput>
    where?: tbl_generoWhereInput
  }

  export type tbl_generoUpdateToOneWithWhereWithoutFilmesInput = {
    where?: tbl_generoWhereInput
    data: XOR<tbl_generoUpdateWithoutFilmesInput, tbl_generoUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_generoUpdateWithoutFilmesInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_generoUncheckedUpdateWithoutFilmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_classificacaoCreateWithoutFilmesInput = {
    sigla: string
    nome: string
    descricao: string
  }

  export type tbl_classificacaoUncheckedCreateWithoutFilmesInput = {
    id?: number
    sigla: string
    nome: string
    descricao: string
  }

  export type tbl_classificacaoCreateOrConnectWithoutFilmesInput = {
    where: tbl_classificacaoWhereUniqueInput
    create: XOR<tbl_classificacaoCreateWithoutFilmesInput, tbl_classificacaoUncheckedCreateWithoutFilmesInput>
  }

  export type tbl_filme_generoCreateWithoutFilmeInput = {
    genero: tbl_generoCreateNestedOneWithoutFilmesInput
  }

  export type tbl_filme_generoUncheckedCreateWithoutFilmeInput = {
    id?: number
    id_genero: number
  }

  export type tbl_filme_generoCreateOrConnectWithoutFilmeInput = {
    where: tbl_filme_generoWhereUniqueInput
    create: XOR<tbl_filme_generoCreateWithoutFilmeInput, tbl_filme_generoUncheckedCreateWithoutFilmeInput>
  }

  export type tbl_filme_generoCreateManyFilmeInputEnvelope = {
    data: tbl_filme_generoCreateManyFilmeInput | tbl_filme_generoCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type tbl_filme_diretorCreateWithoutFilmeInput = {
    diretor: tbl_diretorCreateNestedOneWithoutFilmesInput
  }

  export type tbl_filme_diretorUncheckedCreateWithoutFilmeInput = {
    id?: number
    id_diretor: number
  }

  export type tbl_filme_diretorCreateOrConnectWithoutFilmeInput = {
    where: tbl_filme_diretorWhereUniqueInput
    create: XOR<tbl_filme_diretorCreateWithoutFilmeInput, tbl_filme_diretorUncheckedCreateWithoutFilmeInput>
  }

  export type tbl_filme_diretorCreateManyFilmeInputEnvelope = {
    data: tbl_filme_diretorCreateManyFilmeInput | tbl_filme_diretorCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type tbl_filme_atorCreateWithoutFilmeInput = {
    ator: tbl_atorCreateNestedOneWithoutFilmesInput
  }

  export type tbl_filme_atorUncheckedCreateWithoutFilmeInput = {
    id?: number
    id_ator: number
  }

  export type tbl_filme_atorCreateOrConnectWithoutFilmeInput = {
    where: tbl_filme_atorWhereUniqueInput
    create: XOR<tbl_filme_atorCreateWithoutFilmeInput, tbl_filme_atorUncheckedCreateWithoutFilmeInput>
  }

  export type tbl_filme_atorCreateManyFilmeInputEnvelope = {
    data: tbl_filme_atorCreateManyFilmeInput | tbl_filme_atorCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type tbl_classificacaoUpsertWithoutFilmesInput = {
    update: XOR<tbl_classificacaoUpdateWithoutFilmesInput, tbl_classificacaoUncheckedUpdateWithoutFilmesInput>
    create: XOR<tbl_classificacaoCreateWithoutFilmesInput, tbl_classificacaoUncheckedCreateWithoutFilmesInput>
    where?: tbl_classificacaoWhereInput
  }

  export type tbl_classificacaoUpdateToOneWithWhereWithoutFilmesInput = {
    where?: tbl_classificacaoWhereInput
    data: XOR<tbl_classificacaoUpdateWithoutFilmesInput, tbl_classificacaoUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_classificacaoUpdateWithoutFilmesInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_classificacaoUncheckedUpdateWithoutFilmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_filme_generoUpsertWithWhereUniqueWithoutFilmeInput = {
    where: tbl_filme_generoWhereUniqueInput
    update: XOR<tbl_filme_generoUpdateWithoutFilmeInput, tbl_filme_generoUncheckedUpdateWithoutFilmeInput>
    create: XOR<tbl_filme_generoCreateWithoutFilmeInput, tbl_filme_generoUncheckedCreateWithoutFilmeInput>
  }

  export type tbl_filme_generoUpdateWithWhereUniqueWithoutFilmeInput = {
    where: tbl_filme_generoWhereUniqueInput
    data: XOR<tbl_filme_generoUpdateWithoutFilmeInput, tbl_filme_generoUncheckedUpdateWithoutFilmeInput>
  }

  export type tbl_filme_generoUpdateManyWithWhereWithoutFilmeInput = {
    where: tbl_filme_generoScalarWhereInput
    data: XOR<tbl_filme_generoUpdateManyMutationInput, tbl_filme_generoUncheckedUpdateManyWithoutFilmeInput>
  }

  export type tbl_filme_diretorUpsertWithWhereUniqueWithoutFilmeInput = {
    where: tbl_filme_diretorWhereUniqueInput
    update: XOR<tbl_filme_diretorUpdateWithoutFilmeInput, tbl_filme_diretorUncheckedUpdateWithoutFilmeInput>
    create: XOR<tbl_filme_diretorCreateWithoutFilmeInput, tbl_filme_diretorUncheckedCreateWithoutFilmeInput>
  }

  export type tbl_filme_diretorUpdateWithWhereUniqueWithoutFilmeInput = {
    where: tbl_filme_diretorWhereUniqueInput
    data: XOR<tbl_filme_diretorUpdateWithoutFilmeInput, tbl_filme_diretorUncheckedUpdateWithoutFilmeInput>
  }

  export type tbl_filme_diretorUpdateManyWithWhereWithoutFilmeInput = {
    where: tbl_filme_diretorScalarWhereInput
    data: XOR<tbl_filme_diretorUpdateManyMutationInput, tbl_filme_diretorUncheckedUpdateManyWithoutFilmeInput>
  }

  export type tbl_filme_diretorScalarWhereInput = {
    AND?: tbl_filme_diretorScalarWhereInput | tbl_filme_diretorScalarWhereInput[]
    OR?: tbl_filme_diretorScalarWhereInput[]
    NOT?: tbl_filme_diretorScalarWhereInput | tbl_filme_diretorScalarWhereInput[]
    id?: IntFilter<"tbl_filme_diretor"> | number
    id_filme?: IntFilter<"tbl_filme_diretor"> | number
    id_diretor?: IntFilter<"tbl_filme_diretor"> | number
  }

  export type tbl_filme_atorUpsertWithWhereUniqueWithoutFilmeInput = {
    where: tbl_filme_atorWhereUniqueInput
    update: XOR<tbl_filme_atorUpdateWithoutFilmeInput, tbl_filme_atorUncheckedUpdateWithoutFilmeInput>
    create: XOR<tbl_filme_atorCreateWithoutFilmeInput, tbl_filme_atorUncheckedCreateWithoutFilmeInput>
  }

  export type tbl_filme_atorUpdateWithWhereUniqueWithoutFilmeInput = {
    where: tbl_filme_atorWhereUniqueInput
    data: XOR<tbl_filme_atorUpdateWithoutFilmeInput, tbl_filme_atorUncheckedUpdateWithoutFilmeInput>
  }

  export type tbl_filme_atorUpdateManyWithWhereWithoutFilmeInput = {
    where: tbl_filme_atorScalarWhereInput
    data: XOR<tbl_filme_atorUpdateManyMutationInput, tbl_filme_atorUncheckedUpdateManyWithoutFilmeInput>
  }

  export type tbl_filme_atorScalarWhereInput = {
    AND?: tbl_filme_atorScalarWhereInput | tbl_filme_atorScalarWhereInput[]
    OR?: tbl_filme_atorScalarWhereInput[]
    NOT?: tbl_filme_atorScalarWhereInput | tbl_filme_atorScalarWhereInput[]
    id?: IntFilter<"tbl_filme_ator"> | number
    id_filme?: IntFilter<"tbl_filme_ator"> | number
    id_ator?: IntFilter<"tbl_filme_ator"> | number
  }

  export type tbl_sexoCreateWithoutDiretoresInput = {
    sigla: string
    nome: string
    atores?: tbl_atorCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoUncheckedCreateWithoutDiretoresInput = {
    id?: number
    sigla: string
    nome: string
    atores?: tbl_atorUncheckedCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoCreateOrConnectWithoutDiretoresInput = {
    where: tbl_sexoWhereUniqueInput
    create: XOR<tbl_sexoCreateWithoutDiretoresInput, tbl_sexoUncheckedCreateWithoutDiretoresInput>
  }

  export type tbl_diretor_nacionalidadeCreateWithoutDiretorInput = {
    nacionalidade: tbl_nacionalidadeCreateNestedOneWithoutDiretoresInput
  }

  export type tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput = {
    id?: number
    id_nacionalidade: number
  }

  export type tbl_diretor_nacionalidadeCreateOrConnectWithoutDiretorInput = {
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    create: XOR<tbl_diretor_nacionalidadeCreateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput>
  }

  export type tbl_diretor_nacionalidadeCreateManyDiretorInputEnvelope = {
    data: tbl_diretor_nacionalidadeCreateManyDiretorInput | tbl_diretor_nacionalidadeCreateManyDiretorInput[]
    skipDuplicates?: boolean
  }

  export type tbl_filme_diretorCreateWithoutDiretorInput = {
    filme: tbl_filmeCreateNestedOneWithoutDiretoresInput
  }

  export type tbl_filme_diretorUncheckedCreateWithoutDiretorInput = {
    id?: number
    id_filme: number
  }

  export type tbl_filme_diretorCreateOrConnectWithoutDiretorInput = {
    where: tbl_filme_diretorWhereUniqueInput
    create: XOR<tbl_filme_diretorCreateWithoutDiretorInput, tbl_filme_diretorUncheckedCreateWithoutDiretorInput>
  }

  export type tbl_filme_diretorCreateManyDiretorInputEnvelope = {
    data: tbl_filme_diretorCreateManyDiretorInput | tbl_filme_diretorCreateManyDiretorInput[]
    skipDuplicates?: boolean
  }

  export type tbl_sexoUpsertWithoutDiretoresInput = {
    update: XOR<tbl_sexoUpdateWithoutDiretoresInput, tbl_sexoUncheckedUpdateWithoutDiretoresInput>
    create: XOR<tbl_sexoCreateWithoutDiretoresInput, tbl_sexoUncheckedCreateWithoutDiretoresInput>
    where?: tbl_sexoWhereInput
  }

  export type tbl_sexoUpdateToOneWithWhereWithoutDiretoresInput = {
    where?: tbl_sexoWhereInput
    data: XOR<tbl_sexoUpdateWithoutDiretoresInput, tbl_sexoUncheckedUpdateWithoutDiretoresInput>
  }

  export type tbl_sexoUpdateWithoutDiretoresInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    atores?: tbl_atorUpdateManyWithoutSexoNestedInput
  }

  export type tbl_sexoUncheckedUpdateWithoutDiretoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    atores?: tbl_atorUncheckedUpdateManyWithoutSexoNestedInput
  }

  export type tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutDiretorInput = {
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    update: XOR<tbl_diretor_nacionalidadeUpdateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedUpdateWithoutDiretorInput>
    create: XOR<tbl_diretor_nacionalidadeCreateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutDiretorInput>
  }

  export type tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutDiretorInput = {
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    data: XOR<tbl_diretor_nacionalidadeUpdateWithoutDiretorInput, tbl_diretor_nacionalidadeUncheckedUpdateWithoutDiretorInput>
  }

  export type tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutDiretorInput = {
    where: tbl_diretor_nacionalidadeScalarWhereInput
    data: XOR<tbl_diretor_nacionalidadeUpdateManyMutationInput, tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutDiretorInput>
  }

  export type tbl_diretor_nacionalidadeScalarWhereInput = {
    AND?: tbl_diretor_nacionalidadeScalarWhereInput | tbl_diretor_nacionalidadeScalarWhereInput[]
    OR?: tbl_diretor_nacionalidadeScalarWhereInput[]
    NOT?: tbl_diretor_nacionalidadeScalarWhereInput | tbl_diretor_nacionalidadeScalarWhereInput[]
    id?: IntFilter<"tbl_diretor_nacionalidade"> | number
    id_diretor?: IntFilter<"tbl_diretor_nacionalidade"> | number
    id_nacionalidade?: IntFilter<"tbl_diretor_nacionalidade"> | number
  }

  export type tbl_filme_diretorUpsertWithWhereUniqueWithoutDiretorInput = {
    where: tbl_filme_diretorWhereUniqueInput
    update: XOR<tbl_filme_diretorUpdateWithoutDiretorInput, tbl_filme_diretorUncheckedUpdateWithoutDiretorInput>
    create: XOR<tbl_filme_diretorCreateWithoutDiretorInput, tbl_filme_diretorUncheckedCreateWithoutDiretorInput>
  }

  export type tbl_filme_diretorUpdateWithWhereUniqueWithoutDiretorInput = {
    where: tbl_filme_diretorWhereUniqueInput
    data: XOR<tbl_filme_diretorUpdateWithoutDiretorInput, tbl_filme_diretorUncheckedUpdateWithoutDiretorInput>
  }

  export type tbl_filme_diretorUpdateManyWithWhereWithoutDiretorInput = {
    where: tbl_filme_diretorScalarWhereInput
    data: XOR<tbl_filme_diretorUpdateManyMutationInput, tbl_filme_diretorUncheckedUpdateManyWithoutDiretorInput>
  }

  export type tbl_filmeCreateWithoutDiretoresInput = {
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    classificacao: tbl_classificacaoCreateNestedOneWithoutFilmesInput
    generos?: tbl_filme_generoCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeUncheckedCreateWithoutDiretoresInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    id_classificacao: number
    generos?: tbl_filme_generoUncheckedCreateNestedManyWithoutFilmeInput
    atores?: tbl_filme_atorUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeCreateOrConnectWithoutDiretoresInput = {
    where: tbl_filmeWhereUniqueInput
    create: XOR<tbl_filmeCreateWithoutDiretoresInput, tbl_filmeUncheckedCreateWithoutDiretoresInput>
  }

  export type tbl_diretorCreateWithoutFilmesInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    sexo: tbl_sexoCreateNestedOneWithoutDiretoresInput
    nacionalidades?: tbl_diretor_nacionalidadeCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorUncheckedCreateWithoutFilmesInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
    nacionalidades?: tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorCreateOrConnectWithoutFilmesInput = {
    where: tbl_diretorWhereUniqueInput
    create: XOR<tbl_diretorCreateWithoutFilmesInput, tbl_diretorUncheckedCreateWithoutFilmesInput>
  }

  export type tbl_filmeUpsertWithoutDiretoresInput = {
    update: XOR<tbl_filmeUpdateWithoutDiretoresInput, tbl_filmeUncheckedUpdateWithoutDiretoresInput>
    create: XOR<tbl_filmeCreateWithoutDiretoresInput, tbl_filmeUncheckedCreateWithoutDiretoresInput>
    where?: tbl_filmeWhereInput
  }

  export type tbl_filmeUpdateToOneWithWhereWithoutDiretoresInput = {
    where?: tbl_filmeWhereInput
    data: XOR<tbl_filmeUpdateWithoutDiretoresInput, tbl_filmeUncheckedUpdateWithoutDiretoresInput>
  }

  export type tbl_filmeUpdateWithoutDiretoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    classificacao?: tbl_classificacaoUpdateOneRequiredWithoutFilmesNestedInput
    generos?: tbl_filme_generoUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeUncheckedUpdateWithoutDiretoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    id_classificacao?: IntFieldUpdateOperationsInput | number
    generos?: tbl_filme_generoUncheckedUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_diretorUpsertWithoutFilmesInput = {
    update: XOR<tbl_diretorUpdateWithoutFilmesInput, tbl_diretorUncheckedUpdateWithoutFilmesInput>
    create: XOR<tbl_diretorCreateWithoutFilmesInput, tbl_diretorUncheckedCreateWithoutFilmesInput>
    where?: tbl_diretorWhereInput
  }

  export type tbl_diretorUpdateToOneWithWhereWithoutFilmesInput = {
    where?: tbl_diretorWhereInput
    data: XOR<tbl_diretorUpdateWithoutFilmesInput, tbl_diretorUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_diretorUpdateWithoutFilmesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    sexo?: tbl_sexoUpdateOneRequiredWithoutDiretoresNestedInput
    nacionalidades?: tbl_diretor_nacionalidadeUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_diretorUncheckedUpdateWithoutFilmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
    nacionalidades?: tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_sexoCreateWithoutAtoresInput = {
    sigla: string
    nome: string
    diretores?: tbl_diretorCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoUncheckedCreateWithoutAtoresInput = {
    id?: number
    sigla: string
    nome: string
    diretores?: tbl_diretorUncheckedCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoCreateOrConnectWithoutAtoresInput = {
    where: tbl_sexoWhereUniqueInput
    create: XOR<tbl_sexoCreateWithoutAtoresInput, tbl_sexoUncheckedCreateWithoutAtoresInput>
  }

  export type tbl_ator_nacionalidadeCreateWithoutAtorInput = {
    nacionalidade: tbl_nacionalidadeCreateNestedOneWithoutAtoresInput
  }

  export type tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput = {
    id?: number
    id_nacionalidade: number
  }

  export type tbl_ator_nacionalidadeCreateOrConnectWithoutAtorInput = {
    where: tbl_ator_nacionalidadeWhereUniqueInput
    create: XOR<tbl_ator_nacionalidadeCreateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput>
  }

  export type tbl_ator_nacionalidadeCreateManyAtorInputEnvelope = {
    data: tbl_ator_nacionalidadeCreateManyAtorInput | tbl_ator_nacionalidadeCreateManyAtorInput[]
    skipDuplicates?: boolean
  }

  export type tbl_filme_atorCreateWithoutAtorInput = {
    filme: tbl_filmeCreateNestedOneWithoutAtoresInput
  }

  export type tbl_filme_atorUncheckedCreateWithoutAtorInput = {
    id?: number
    id_filme: number
  }

  export type tbl_filme_atorCreateOrConnectWithoutAtorInput = {
    where: tbl_filme_atorWhereUniqueInput
    create: XOR<tbl_filme_atorCreateWithoutAtorInput, tbl_filme_atorUncheckedCreateWithoutAtorInput>
  }

  export type tbl_filme_atorCreateManyAtorInputEnvelope = {
    data: tbl_filme_atorCreateManyAtorInput | tbl_filme_atorCreateManyAtorInput[]
    skipDuplicates?: boolean
  }

  export type tbl_sexoUpsertWithoutAtoresInput = {
    update: XOR<tbl_sexoUpdateWithoutAtoresInput, tbl_sexoUncheckedUpdateWithoutAtoresInput>
    create: XOR<tbl_sexoCreateWithoutAtoresInput, tbl_sexoUncheckedCreateWithoutAtoresInput>
    where?: tbl_sexoWhereInput
  }

  export type tbl_sexoUpdateToOneWithWhereWithoutAtoresInput = {
    where?: tbl_sexoWhereInput
    data: XOR<tbl_sexoUpdateWithoutAtoresInput, tbl_sexoUncheckedUpdateWithoutAtoresInput>
  }

  export type tbl_sexoUpdateWithoutAtoresInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretorUpdateManyWithoutSexoNestedInput
  }

  export type tbl_sexoUncheckedUpdateWithoutAtoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretorUncheckedUpdateManyWithoutSexoNestedInput
  }

  export type tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutAtorInput = {
    where: tbl_ator_nacionalidadeWhereUniqueInput
    update: XOR<tbl_ator_nacionalidadeUpdateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedUpdateWithoutAtorInput>
    create: XOR<tbl_ator_nacionalidadeCreateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedCreateWithoutAtorInput>
  }

  export type tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutAtorInput = {
    where: tbl_ator_nacionalidadeWhereUniqueInput
    data: XOR<tbl_ator_nacionalidadeUpdateWithoutAtorInput, tbl_ator_nacionalidadeUncheckedUpdateWithoutAtorInput>
  }

  export type tbl_ator_nacionalidadeUpdateManyWithWhereWithoutAtorInput = {
    where: tbl_ator_nacionalidadeScalarWhereInput
    data: XOR<tbl_ator_nacionalidadeUpdateManyMutationInput, tbl_ator_nacionalidadeUncheckedUpdateManyWithoutAtorInput>
  }

  export type tbl_ator_nacionalidadeScalarWhereInput = {
    AND?: tbl_ator_nacionalidadeScalarWhereInput | tbl_ator_nacionalidadeScalarWhereInput[]
    OR?: tbl_ator_nacionalidadeScalarWhereInput[]
    NOT?: tbl_ator_nacionalidadeScalarWhereInput | tbl_ator_nacionalidadeScalarWhereInput[]
    id?: IntFilter<"tbl_ator_nacionalidade"> | number
    id_ator?: IntFilter<"tbl_ator_nacionalidade"> | number
    id_nacionalidade?: IntFilter<"tbl_ator_nacionalidade"> | number
  }

  export type tbl_filme_atorUpsertWithWhereUniqueWithoutAtorInput = {
    where: tbl_filme_atorWhereUniqueInput
    update: XOR<tbl_filme_atorUpdateWithoutAtorInput, tbl_filme_atorUncheckedUpdateWithoutAtorInput>
    create: XOR<tbl_filme_atorCreateWithoutAtorInput, tbl_filme_atorUncheckedCreateWithoutAtorInput>
  }

  export type tbl_filme_atorUpdateWithWhereUniqueWithoutAtorInput = {
    where: tbl_filme_atorWhereUniqueInput
    data: XOR<tbl_filme_atorUpdateWithoutAtorInput, tbl_filme_atorUncheckedUpdateWithoutAtorInput>
  }

  export type tbl_filme_atorUpdateManyWithWhereWithoutAtorInput = {
    where: tbl_filme_atorScalarWhereInput
    data: XOR<tbl_filme_atorUpdateManyMutationInput, tbl_filme_atorUncheckedUpdateManyWithoutAtorInput>
  }

  export type tbl_filmeCreateWithoutAtoresInput = {
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    classificacao: tbl_classificacaoCreateNestedOneWithoutFilmesInput
    generos?: tbl_filme_generoCreateNestedManyWithoutFilmeInput
    diretores?: tbl_filme_diretorCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeUncheckedCreateWithoutAtoresInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
    id_classificacao: number
    generos?: tbl_filme_generoUncheckedCreateNestedManyWithoutFilmeInput
    diretores?: tbl_filme_diretorUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type tbl_filmeCreateOrConnectWithoutAtoresInput = {
    where: tbl_filmeWhereUniqueInput
    create: XOR<tbl_filmeCreateWithoutAtoresInput, tbl_filmeUncheckedCreateWithoutAtoresInput>
  }

  export type tbl_atorCreateWithoutFilmesInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    sexo: tbl_sexoCreateNestedOneWithoutAtoresInput
    nacionalidades?: tbl_ator_nacionalidadeCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorUncheckedCreateWithoutFilmesInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
    nacionalidades?: tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorCreateOrConnectWithoutFilmesInput = {
    where: tbl_atorWhereUniqueInput
    create: XOR<tbl_atorCreateWithoutFilmesInput, tbl_atorUncheckedCreateWithoutFilmesInput>
  }

  export type tbl_filmeUpsertWithoutAtoresInput = {
    update: XOR<tbl_filmeUpdateWithoutAtoresInput, tbl_filmeUncheckedUpdateWithoutAtoresInput>
    create: XOR<tbl_filmeCreateWithoutAtoresInput, tbl_filmeUncheckedCreateWithoutAtoresInput>
    where?: tbl_filmeWhereInput
  }

  export type tbl_filmeUpdateToOneWithWhereWithoutAtoresInput = {
    where?: tbl_filmeWhereInput
    data: XOR<tbl_filmeUpdateWithoutAtoresInput, tbl_filmeUncheckedUpdateWithoutAtoresInput>
  }

  export type tbl_filmeUpdateWithoutAtoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    classificacao?: tbl_classificacaoUpdateOneRequiredWithoutFilmesNestedInput
    generos?: tbl_filme_generoUpdateManyWithoutFilmeNestedInput
    diretores?: tbl_filme_diretorUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeUncheckedUpdateWithoutAtoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    id_classificacao?: IntFieldUpdateOperationsInput | number
    generos?: tbl_filme_generoUncheckedUpdateManyWithoutFilmeNestedInput
    diretores?: tbl_filme_diretorUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_atorUpsertWithoutFilmesInput = {
    update: XOR<tbl_atorUpdateWithoutFilmesInput, tbl_atorUncheckedUpdateWithoutFilmesInput>
    create: XOR<tbl_atorCreateWithoutFilmesInput, tbl_atorUncheckedCreateWithoutFilmesInput>
    where?: tbl_atorWhereInput
  }

  export type tbl_atorUpdateToOneWithWhereWithoutFilmesInput = {
    where?: tbl_atorWhereInput
    data: XOR<tbl_atorUpdateWithoutFilmesInput, tbl_atorUncheckedUpdateWithoutFilmesInput>
  }

  export type tbl_atorUpdateWithoutFilmesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    sexo?: tbl_sexoUpdateOneRequiredWithoutAtoresNestedInput
    nacionalidades?: tbl_ator_nacionalidadeUpdateManyWithoutAtorNestedInput
  }

  export type tbl_atorUncheckedUpdateWithoutFilmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
    nacionalidades?: tbl_ator_nacionalidadeUncheckedUpdateManyWithoutAtorNestedInput
  }

  export type tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput = {
    diretor: tbl_diretorCreateNestedOneWithoutNacionalidadesInput
  }

  export type tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput = {
    id?: number
    id_diretor: number
  }

  export type tbl_diretor_nacionalidadeCreateOrConnectWithoutNacionalidadeInput = {
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    create: XOR<tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput>
  }

  export type tbl_diretor_nacionalidadeCreateManyNacionalidadeInputEnvelope = {
    data: tbl_diretor_nacionalidadeCreateManyNacionalidadeInput | tbl_diretor_nacionalidadeCreateManyNacionalidadeInput[]
    skipDuplicates?: boolean
  }

  export type tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput = {
    ator: tbl_atorCreateNestedOneWithoutNacionalidadesInput
  }

  export type tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput = {
    id?: number
    id_ator: number
  }

  export type tbl_ator_nacionalidadeCreateOrConnectWithoutNacionalidadeInput = {
    where: tbl_ator_nacionalidadeWhereUniqueInput
    create: XOR<tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput>
  }

  export type tbl_ator_nacionalidadeCreateManyNacionalidadeInputEnvelope = {
    data: tbl_ator_nacionalidadeCreateManyNacionalidadeInput | tbl_ator_nacionalidadeCreateManyNacionalidadeInput[]
    skipDuplicates?: boolean
  }

  export type tbl_diretor_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput = {
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    update: XOR<tbl_diretor_nacionalidadeUpdateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedUpdateWithoutNacionalidadeInput>
    create: XOR<tbl_diretor_nacionalidadeCreateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedCreateWithoutNacionalidadeInput>
  }

  export type tbl_diretor_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput = {
    where: tbl_diretor_nacionalidadeWhereUniqueInput
    data: XOR<tbl_diretor_nacionalidadeUpdateWithoutNacionalidadeInput, tbl_diretor_nacionalidadeUncheckedUpdateWithoutNacionalidadeInput>
  }

  export type tbl_diretor_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput = {
    where: tbl_diretor_nacionalidadeScalarWhereInput
    data: XOR<tbl_diretor_nacionalidadeUpdateManyMutationInput, tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeInput>
  }

  export type tbl_ator_nacionalidadeUpsertWithWhereUniqueWithoutNacionalidadeInput = {
    where: tbl_ator_nacionalidadeWhereUniqueInput
    update: XOR<tbl_ator_nacionalidadeUpdateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedUpdateWithoutNacionalidadeInput>
    create: XOR<tbl_ator_nacionalidadeCreateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedCreateWithoutNacionalidadeInput>
  }

  export type tbl_ator_nacionalidadeUpdateWithWhereUniqueWithoutNacionalidadeInput = {
    where: tbl_ator_nacionalidadeWhereUniqueInput
    data: XOR<tbl_ator_nacionalidadeUpdateWithoutNacionalidadeInput, tbl_ator_nacionalidadeUncheckedUpdateWithoutNacionalidadeInput>
  }

  export type tbl_ator_nacionalidadeUpdateManyWithWhereWithoutNacionalidadeInput = {
    where: tbl_ator_nacionalidadeScalarWhereInput
    data: XOR<tbl_ator_nacionalidadeUpdateManyMutationInput, tbl_ator_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeInput>
  }

  export type tbl_diretorCreateWithoutNacionalidadesInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    sexo: tbl_sexoCreateNestedOneWithoutDiretoresInput
    filmes?: tbl_filme_diretorCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorUncheckedCreateWithoutNacionalidadesInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
    filmes?: tbl_filme_diretorUncheckedCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorCreateOrConnectWithoutNacionalidadesInput = {
    where: tbl_diretorWhereUniqueInput
    create: XOR<tbl_diretorCreateWithoutNacionalidadesInput, tbl_diretorUncheckedCreateWithoutNacionalidadesInput>
  }

  export type tbl_nacionalidadeCreateWithoutDiretoresInput = {
    nome: string
    atores?: tbl_ator_nacionalidadeCreateNestedManyWithoutNacionalidadeInput
  }

  export type tbl_nacionalidadeUncheckedCreateWithoutDiretoresInput = {
    id?: number
    nome: string
    atores?: tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutNacionalidadeInput
  }

  export type tbl_nacionalidadeCreateOrConnectWithoutDiretoresInput = {
    where: tbl_nacionalidadeWhereUniqueInput
    create: XOR<tbl_nacionalidadeCreateWithoutDiretoresInput, tbl_nacionalidadeUncheckedCreateWithoutDiretoresInput>
  }

  export type tbl_diretorUpsertWithoutNacionalidadesInput = {
    update: XOR<tbl_diretorUpdateWithoutNacionalidadesInput, tbl_diretorUncheckedUpdateWithoutNacionalidadesInput>
    create: XOR<tbl_diretorCreateWithoutNacionalidadesInput, tbl_diretorUncheckedCreateWithoutNacionalidadesInput>
    where?: tbl_diretorWhereInput
  }

  export type tbl_diretorUpdateToOneWithWhereWithoutNacionalidadesInput = {
    where?: tbl_diretorWhereInput
    data: XOR<tbl_diretorUpdateWithoutNacionalidadesInput, tbl_diretorUncheckedUpdateWithoutNacionalidadesInput>
  }

  export type tbl_diretorUpdateWithoutNacionalidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    sexo?: tbl_sexoUpdateOneRequiredWithoutDiretoresNestedInput
    filmes?: tbl_filme_diretorUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_diretorUncheckedUpdateWithoutNacionalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
    filmes?: tbl_filme_diretorUncheckedUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_nacionalidadeUpsertWithoutDiretoresInput = {
    update: XOR<tbl_nacionalidadeUpdateWithoutDiretoresInput, tbl_nacionalidadeUncheckedUpdateWithoutDiretoresInput>
    create: XOR<tbl_nacionalidadeCreateWithoutDiretoresInput, tbl_nacionalidadeUncheckedCreateWithoutDiretoresInput>
    where?: tbl_nacionalidadeWhereInput
  }

  export type tbl_nacionalidadeUpdateToOneWithWhereWithoutDiretoresInput = {
    where?: tbl_nacionalidadeWhereInput
    data: XOR<tbl_nacionalidadeUpdateWithoutDiretoresInput, tbl_nacionalidadeUncheckedUpdateWithoutDiretoresInput>
  }

  export type tbl_nacionalidadeUpdateWithoutDiretoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    atores?: tbl_ator_nacionalidadeUpdateManyWithoutNacionalidadeNestedInput
  }

  export type tbl_nacionalidadeUncheckedUpdateWithoutDiretoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    atores?: tbl_ator_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeNestedInput
  }

  export type tbl_atorCreateWithoutNacionalidadesInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    sexo: tbl_sexoCreateNestedOneWithoutAtoresInput
    filmes?: tbl_filme_atorCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorUncheckedCreateWithoutNacionalidadesInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    id_sexo: number
    filmes?: tbl_filme_atorUncheckedCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorCreateOrConnectWithoutNacionalidadesInput = {
    where: tbl_atorWhereUniqueInput
    create: XOR<tbl_atorCreateWithoutNacionalidadesInput, tbl_atorUncheckedCreateWithoutNacionalidadesInput>
  }

  export type tbl_nacionalidadeCreateWithoutAtoresInput = {
    nome: string
    diretores?: tbl_diretor_nacionalidadeCreateNestedManyWithoutNacionalidadeInput
  }

  export type tbl_nacionalidadeUncheckedCreateWithoutAtoresInput = {
    id?: number
    nome: string
    diretores?: tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutNacionalidadeInput
  }

  export type tbl_nacionalidadeCreateOrConnectWithoutAtoresInput = {
    where: tbl_nacionalidadeWhereUniqueInput
    create: XOR<tbl_nacionalidadeCreateWithoutAtoresInput, tbl_nacionalidadeUncheckedCreateWithoutAtoresInput>
  }

  export type tbl_atorUpsertWithoutNacionalidadesInput = {
    update: XOR<tbl_atorUpdateWithoutNacionalidadesInput, tbl_atorUncheckedUpdateWithoutNacionalidadesInput>
    create: XOR<tbl_atorCreateWithoutNacionalidadesInput, tbl_atorUncheckedCreateWithoutNacionalidadesInput>
    where?: tbl_atorWhereInput
  }

  export type tbl_atorUpdateToOneWithWhereWithoutNacionalidadesInput = {
    where?: tbl_atorWhereInput
    data: XOR<tbl_atorUpdateWithoutNacionalidadesInput, tbl_atorUncheckedUpdateWithoutNacionalidadesInput>
  }

  export type tbl_atorUpdateWithoutNacionalidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    sexo?: tbl_sexoUpdateOneRequiredWithoutAtoresNestedInput
    filmes?: tbl_filme_atorUpdateManyWithoutAtorNestedInput
  }

  export type tbl_atorUncheckedUpdateWithoutNacionalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_sexo?: IntFieldUpdateOperationsInput | number
    filmes?: tbl_filme_atorUncheckedUpdateManyWithoutAtorNestedInput
  }

  export type tbl_nacionalidadeUpsertWithoutAtoresInput = {
    update: XOR<tbl_nacionalidadeUpdateWithoutAtoresInput, tbl_nacionalidadeUncheckedUpdateWithoutAtoresInput>
    create: XOR<tbl_nacionalidadeCreateWithoutAtoresInput, tbl_nacionalidadeUncheckedCreateWithoutAtoresInput>
    where?: tbl_nacionalidadeWhereInput
  }

  export type tbl_nacionalidadeUpdateToOneWithWhereWithoutAtoresInput = {
    where?: tbl_nacionalidadeWhereInput
    data: XOR<tbl_nacionalidadeUpdateWithoutAtoresInput, tbl_nacionalidadeUncheckedUpdateWithoutAtoresInput>
  }

  export type tbl_nacionalidadeUpdateWithoutAtoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretor_nacionalidadeUpdateManyWithoutNacionalidadeNestedInput
  }

  export type tbl_nacionalidadeUncheckedUpdateWithoutAtoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    diretores?: tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeNestedInput
  }

  export type tbl_diretorCreateWithoutSexoInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    nacionalidades?: tbl_diretor_nacionalidadeCreateNestedManyWithoutDiretorInput
    filmes?: tbl_filme_diretorCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorUncheckedCreateWithoutSexoInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    nacionalidades?: tbl_diretor_nacionalidadeUncheckedCreateNestedManyWithoutDiretorInput
    filmes?: tbl_filme_diretorUncheckedCreateNestedManyWithoutDiretorInput
  }

  export type tbl_diretorCreateOrConnectWithoutSexoInput = {
    where: tbl_diretorWhereUniqueInput
    create: XOR<tbl_diretorCreateWithoutSexoInput, tbl_diretorUncheckedCreateWithoutSexoInput>
  }

  export type tbl_diretorCreateManySexoInputEnvelope = {
    data: tbl_diretorCreateManySexoInput | tbl_diretorCreateManySexoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_atorCreateWithoutSexoInput = {
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    nacionalidades?: tbl_ator_nacionalidadeCreateNestedManyWithoutAtorInput
    filmes?: tbl_filme_atorCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorUncheckedCreateWithoutSexoInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
    nacionalidades?: tbl_ator_nacionalidadeUncheckedCreateNestedManyWithoutAtorInput
    filmes?: tbl_filme_atorUncheckedCreateNestedManyWithoutAtorInput
  }

  export type tbl_atorCreateOrConnectWithoutSexoInput = {
    where: tbl_atorWhereUniqueInput
    create: XOR<tbl_atorCreateWithoutSexoInput, tbl_atorUncheckedCreateWithoutSexoInput>
  }

  export type tbl_atorCreateManySexoInputEnvelope = {
    data: tbl_atorCreateManySexoInput | tbl_atorCreateManySexoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_diretorUpsertWithWhereUniqueWithoutSexoInput = {
    where: tbl_diretorWhereUniqueInput
    update: XOR<tbl_diretorUpdateWithoutSexoInput, tbl_diretorUncheckedUpdateWithoutSexoInput>
    create: XOR<tbl_diretorCreateWithoutSexoInput, tbl_diretorUncheckedCreateWithoutSexoInput>
  }

  export type tbl_diretorUpdateWithWhereUniqueWithoutSexoInput = {
    where: tbl_diretorWhereUniqueInput
    data: XOR<tbl_diretorUpdateWithoutSexoInput, tbl_diretorUncheckedUpdateWithoutSexoInput>
  }

  export type tbl_diretorUpdateManyWithWhereWithoutSexoInput = {
    where: tbl_diretorScalarWhereInput
    data: XOR<tbl_diretorUpdateManyMutationInput, tbl_diretorUncheckedUpdateManyWithoutSexoInput>
  }

  export type tbl_diretorScalarWhereInput = {
    AND?: tbl_diretorScalarWhereInput | tbl_diretorScalarWhereInput[]
    OR?: tbl_diretorScalarWhereInput[]
    NOT?: tbl_diretorScalarWhereInput | tbl_diretorScalarWhereInput[]
    id?: IntFilter<"tbl_diretor"> | number
    nome?: StringFilter<"tbl_diretor"> | string
    nome_artistico?: StringFilter<"tbl_diretor"> | string
    data_nascimento?: DateTimeFilter<"tbl_diretor"> | Date | string
    data_falecimento?: DateTimeNullableFilter<"tbl_diretor"> | Date | string | null
    biografia?: StringFilter<"tbl_diretor"> | string
    foto?: StringFilter<"tbl_diretor"> | string
    id_sexo?: IntFilter<"tbl_diretor"> | number
  }

  export type tbl_atorUpsertWithWhereUniqueWithoutSexoInput = {
    where: tbl_atorWhereUniqueInput
    update: XOR<tbl_atorUpdateWithoutSexoInput, tbl_atorUncheckedUpdateWithoutSexoInput>
    create: XOR<tbl_atorCreateWithoutSexoInput, tbl_atorUncheckedCreateWithoutSexoInput>
  }

  export type tbl_atorUpdateWithWhereUniqueWithoutSexoInput = {
    where: tbl_atorWhereUniqueInput
    data: XOR<tbl_atorUpdateWithoutSexoInput, tbl_atorUncheckedUpdateWithoutSexoInput>
  }

  export type tbl_atorUpdateManyWithWhereWithoutSexoInput = {
    where: tbl_atorScalarWhereInput
    data: XOR<tbl_atorUpdateManyMutationInput, tbl_atorUncheckedUpdateManyWithoutSexoInput>
  }

  export type tbl_atorScalarWhereInput = {
    AND?: tbl_atorScalarWhereInput | tbl_atorScalarWhereInput[]
    OR?: tbl_atorScalarWhereInput[]
    NOT?: tbl_atorScalarWhereInput | tbl_atorScalarWhereInput[]
    id?: IntFilter<"tbl_ator"> | number
    nome?: StringFilter<"tbl_ator"> | string
    nome_artistico?: StringFilter<"tbl_ator"> | string
    data_nascimento?: DateTimeFilter<"tbl_ator"> | Date | string
    data_falecimento?: DateTimeNullableFilter<"tbl_ator"> | Date | string | null
    biografia?: StringFilter<"tbl_ator"> | string
    foto?: StringFilter<"tbl_ator"> | string
    id_sexo?: IntFilter<"tbl_ator"> | number
  }

  export type tbl_filmeCreateManyClassificacaoInput = {
    id?: number
    nome: string
    nome_original: string
    data_lancamento: Date | string
    data_relancamento?: Date | string | null
    duracao: string
    sinopse: string
    foto_capa: string
  }

  export type tbl_filmeUpdateWithoutClassificacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    generos?: tbl_filme_generoUpdateManyWithoutFilmeNestedInput
    diretores?: tbl_filme_diretorUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeUncheckedUpdateWithoutClassificacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
    generos?: tbl_filme_generoUncheckedUpdateManyWithoutFilmeNestedInput
    diretores?: tbl_filme_diretorUncheckedUpdateManyWithoutFilmeNestedInput
    atores?: tbl_filme_atorUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type tbl_filmeUncheckedUpdateManyWithoutClassificacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_original?: StringFieldUpdateOperationsInput | string
    data_lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_relancamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracao?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    foto_capa?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_filme_generoCreateManyGeneroInput = {
    id?: number
    id_filme: number
  }

  export type tbl_filme_generoUpdateWithoutGeneroInput = {
    filme?: tbl_filmeUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type tbl_filme_generoUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_generoUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_generoCreateManyFilmeInput = {
    id?: number
    id_genero: number
  }

  export type tbl_filme_diretorCreateManyFilmeInput = {
    id?: number
    id_diretor: number
  }

  export type tbl_filme_atorCreateManyFilmeInput = {
    id?: number
    id_ator: number
  }

  export type tbl_filme_generoUpdateWithoutFilmeInput = {
    genero?: tbl_generoUpdateOneRequiredWithoutFilmesNestedInput
  }

  export type tbl_filme_generoUncheckedUpdateWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_generoUncheckedUpdateManyWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_diretorUpdateWithoutFilmeInput = {
    diretor?: tbl_diretorUpdateOneRequiredWithoutFilmesNestedInput
  }

  export type tbl_filme_diretorUncheckedUpdateWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_diretorUncheckedUpdateManyWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_atorUpdateWithoutFilmeInput = {
    ator?: tbl_atorUpdateOneRequiredWithoutFilmesNestedInput
  }

  export type tbl_filme_atorUncheckedUpdateWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_atorUncheckedUpdateManyWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretor_nacionalidadeCreateManyDiretorInput = {
    id?: number
    id_nacionalidade: number
  }

  export type tbl_filme_diretorCreateManyDiretorInput = {
    id?: number
    id_filme: number
  }

  export type tbl_diretor_nacionalidadeUpdateWithoutDiretorInput = {
    nacionalidade?: tbl_nacionalidadeUpdateOneRequiredWithoutDiretoresNestedInput
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateWithoutDiretorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutDiretorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_diretorUpdateWithoutDiretorInput = {
    filme?: tbl_filmeUpdateOneRequiredWithoutDiretoresNestedInput
  }

  export type tbl_filme_diretorUncheckedUpdateWithoutDiretorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_diretorUncheckedUpdateManyWithoutDiretorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_ator_nacionalidadeCreateManyAtorInput = {
    id?: number
    id_nacionalidade: number
  }

  export type tbl_filme_atorCreateManyAtorInput = {
    id?: number
    id_filme: number
  }

  export type tbl_ator_nacionalidadeUpdateWithoutAtorInput = {
    nacionalidade?: tbl_nacionalidadeUpdateOneRequiredWithoutAtoresNestedInput
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateWithoutAtorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateManyWithoutAtorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_nacionalidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_atorUpdateWithoutAtorInput = {
    filme?: tbl_filmeUpdateOneRequiredWithoutAtoresNestedInput
  }

  export type tbl_filme_atorUncheckedUpdateWithoutAtorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_filme_atorUncheckedUpdateManyWithoutAtorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_filme?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretor_nacionalidadeCreateManyNacionalidadeInput = {
    id?: number
    id_diretor: number
  }

  export type tbl_ator_nacionalidadeCreateManyNacionalidadeInput = {
    id?: number
    id_ator: number
  }

  export type tbl_diretor_nacionalidadeUpdateWithoutNacionalidadeInput = {
    diretor?: tbl_diretorUpdateOneRequiredWithoutNacionalidadesNestedInput
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateWithoutNacionalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diretor?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_ator_nacionalidadeUpdateWithoutNacionalidadeInput = {
    ator?: tbl_atorUpdateOneRequiredWithoutNacionalidadesNestedInput
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateWithoutNacionalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_ator_nacionalidadeUncheckedUpdateManyWithoutNacionalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_ator?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_diretorCreateManySexoInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
  }

  export type tbl_atorCreateManySexoInput = {
    id?: number
    nome: string
    nome_artistico: string
    data_nascimento: Date | string
    data_falecimento?: Date | string | null
    biografia: string
    foto: string
  }

  export type tbl_diretorUpdateWithoutSexoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    nacionalidades?: tbl_diretor_nacionalidadeUpdateManyWithoutDiretorNestedInput
    filmes?: tbl_filme_diretorUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_diretorUncheckedUpdateWithoutSexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    nacionalidades?: tbl_diretor_nacionalidadeUncheckedUpdateManyWithoutDiretorNestedInput
    filmes?: tbl_filme_diretorUncheckedUpdateManyWithoutDiretorNestedInput
  }

  export type tbl_diretorUncheckedUpdateManyWithoutSexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_atorUpdateWithoutSexoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    nacionalidades?: tbl_ator_nacionalidadeUpdateManyWithoutAtorNestedInput
    filmes?: tbl_filme_atorUpdateManyWithoutAtorNestedInput
  }

  export type tbl_atorUncheckedUpdateWithoutSexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    nacionalidades?: tbl_ator_nacionalidadeUncheckedUpdateManyWithoutAtorNestedInput
    filmes?: tbl_filme_atorUncheckedUpdateManyWithoutAtorNestedInput
  }

  export type tbl_atorUncheckedUpdateManyWithoutSexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_falecimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    biografia?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}