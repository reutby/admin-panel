export interface Draft <T> {
  _id: string,
  user: string,
  tenant: string,
  contextType: string,
  contextId: string|null,
  contextData: T
}
