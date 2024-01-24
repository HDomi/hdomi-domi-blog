import { get, post, put } from "@/utils/abstractService";

const listPath = "https://api.github.com/repos/hdomi/posts/contents";
const detailPath = "https://hdomi.github.io/posts";

export const getCategoryNamesApi = async () => {
  return await get(false, `${listPath}`);
};
export const getPostsApi = async (categoryName: string) => {
  return await get(false, `${listPath}/${categoryName}`);
};
export const getPostDetailApi = async (params: any) => {
  return await get(false, `${detailPath}/${params.path}/${params.id}`);
};
