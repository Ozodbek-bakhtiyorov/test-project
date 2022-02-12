export const d_flex = (dir, align, justify) => {
  return `
        display: flex;
        flex-direction: ${dir};
        align-items: ${align};
        justify-content: ${justify};
    `;
};

export const d_grid = (size, gap) => {
  return `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));
        grid-gap: ${gap};
    `;
};

