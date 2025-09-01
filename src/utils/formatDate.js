export const isOverdue = (dateStr) => {
  if (!dateStr) return false;
  const today = new Date();
  const d = new Date(dateStr);
  d.setHours(23, 59, 59, 999);
  return d < today;
};

export const formatDate = (dateStr) => {
  if (!dateStr) return "No due";
  return new Date(dateStr).toLocaleDateString();
};
