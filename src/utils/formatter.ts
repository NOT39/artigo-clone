type ArticleContentChunk = {
  type: 'sub-title' | 'paragraph'
  text: string
}

export function normalizeText(articleContentChunk: ArticleContentChunk) {
  const punctuationList = '{}()\\[\\]\\\\.…,;:!¡?¿/@#%\\^&*_—~+\\-=<>«»"\'’\\s'
  const separatorRegex = new RegExp(`([${punctuationList}\\d]+)`, 'gim')

  const normalizedText = articleContentChunk.text
    .split(separatorRegex)
    .map((text) => {
      return {
        text,
        isVisible:
          !!text.match(separatorRegex) ||
          (text.length <= 2 &&
            ![
              'eu',
              'me',
              'te',
              'vi',
              'aí',
              'to',
              'se',
              'tu',
              'pc',
              'ti',
            ].includes(text.toLowerCase())),
      }
    })

  return { ...articleContentChunk, text: normalizedText }
}
