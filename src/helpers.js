export const getListNumbering = (id) => (id < 9 ? `0${id + 1}` : id + 1);
