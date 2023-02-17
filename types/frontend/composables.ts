// /api/leaderboard
type lbUser = {
    name: String;
    username: String;
    img: String;
};

// /api/whatstrending
type trendItem = {
    title: string;
    total: string;
};

// exporting
export type { lbUser, trendItem };
