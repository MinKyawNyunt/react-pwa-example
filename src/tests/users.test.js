import reducer, {
  loading,
  setUsers,
  selectUsers,
  selectLoading,
  initialState,
} from "../features/users/usersSlice";
import axios from "axios";

describe("user slice", () => {
  describe("reducer, actions and selectors", () => {
    it("should return the initial state on first run", () => {
      const nextState = initialState;
      const result = reducer(undefined, {});
      expect(result).toEqual(nextState);
    });

    it("should loading state change", () => {
      const nextState = reducer(initialState, loading(true));
      const rootState = { users: nextState };
      expect(selectLoading(rootState)).toEqual(true);
    });

    it("should user state change", () => {
      axios({
        method: "get",
        url: "https://reqres.in/api/users",
      }).then((res) => {
        const nextState = reducer(initialState, setUsers(res.data));
        const rootState = { users: nextState };
        expect(selectUsers(rootState)).toEqual(data);
      });
    });
  });
});
