export interface IAction {
  type: string;
  payload: {
    [key: string]: string;
  };
}
