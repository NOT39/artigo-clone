export type Alpha = {
  isVisible: boolean
  text: string
  token
}

export type ArticleContentChunk = {
  type: 'sub-title' | 'paragraph'
  text: Alpha[]
}
