export function validSortOrder(params: { sortOrder?: string }) {
  const sortOrder = params.sortOrder?.toLowerCase();
  const validSortOrder =
    sortOrder === "asc" || sortOrder === "desc" ? sortOrder : "asc";
  return validSortOrder;
}
