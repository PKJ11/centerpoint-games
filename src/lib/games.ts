export type Game = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon:
    | "shuffle"
    | "book"
    | "shapes"
    | "layout-grid"
    | "flame"
    | "target";
  gradient: string;
  tag: string;
  comingSoon?: boolean;
};

export const games: Game[] = [
  {
    id: "anagram-letter-swap",
    title: "Anagram Letter Swap",
    description: "Rearrange scrambled letters at speed to uncover the hidden words.",
    href: "https://www.logicology.in/anagram",
    icon: "shuffle",
    gradient: "from-[#1eaeea] to-[#0c2156]",
    tag: "Word Game",
  },
  {
    id: "anagram-word-builder",
    title: "Anagram Word Builder",
    description: "Build words from scrambled letters, with hints to nudge you along.",
    href: "https://www.logicology.in/anagram_word_builder",
    icon: "book",
    gradient: "from-[#063797] to-[#1eaeea]",
    tag: "Word Game",
  },
  {
    id: "symmetric-pattern",
    title: "Symmetry",
    description: "Spot and complete mirrored patterns to train your visual reasoning.",
    href: "https://www.logicology.in/books/symmetrypattern",
    icon: "shapes",
    gradient: "from-[#0c2156] to-[#ff6600]",
    tag: "Visual",
  },
  {
    id: "sudoku",
    title: "Sudoku",
    description: "Crack every row, column and box in this timeless numbers grid challenge.",
    href: "http://www.logicology.in/sudoku",
    icon: "layout-grid",
    gradient: "from-[#063797] to-[#1eaeea]",
    tag: "Numbers",
  },
  {
    id: "knight",
    title: "Knight",
    description: "Hop across the board and dodge the lava tiles in this reflex puzzle.",
    href: "https://www.logicology.in/logicoland/volume-5/section/1",
    icon: "flame",
    gradient: "from-[#ff6600] to-[#ed904a]",
    tag: "Lava Game",
    comingSoon: true,
  },
  {
    id: "arrow",
    title: "Arrow",
    description: "Track the arrows and defuse the bombs before time runs out.",
    href: "https://www.logicology.in/logicoland/volume-5/section/3",
    icon: "target",
    gradient: "from-[#ed904a] to-[#1eaeea]",
    tag: "Bomb Detection",
    comingSoon: true,
  },
];
