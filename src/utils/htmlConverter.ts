import showdown from "showdown";

const htmlConverter = (md: any) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(md)
}

export default htmlConverter