export type Replace<T, R> = Omit<T, keyof R> & R;

// exporta um tipo chamado replace, que é uma help function do ts e pode receber 2 tipagens, uma original e uma de replace
