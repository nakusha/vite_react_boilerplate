import { BoardUrl, axiosInstance } from "@apis/urls";

type BoardList = {};
const BoardAPI = {
  getBoardList: (): Promise<BoardList> => {
    return axiosInstance
      .post(BoardUrl.getList, { category: "1", tab: "2" })
      .then((resp) => resp.data)
      .catch((e) => e);
  },
};

export default BoardAPI;
