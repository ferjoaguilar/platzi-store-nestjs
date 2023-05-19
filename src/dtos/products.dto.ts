export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: string;
  readonly stock?: number;
  readonly image?: string;
}
