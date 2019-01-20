export interface IPic {
  description: Array<IPicDescription>;
}

export interface  IPicDescription {
  title?: string,
  details?: string,
  thumbnail?: string,
  original?: string,
}
