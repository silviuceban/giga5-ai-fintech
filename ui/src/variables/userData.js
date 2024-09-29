export const userValues = [
  {
    index: 230357,
    id_client: "78a9d6az",
    id_card: "18NN 8503 0Z90 50F3",
    tip_operatiune: "5",
    operatiune: "Cumparatura",
    suma_tranzactiei: 329.81,
    valuta_tranzactiei: "MDL",
    date: "2023-01-14",
    curs: 1,
    rata: 1,
    suma_lcy: 329.81,
    denumire_contraparte: "A1844af5 D53n0594",
    data_si_ora: "2023-01-14",
    mcc_code: 5499,
    mcc_desc: "Misc. Food Stores – Convenience Stores and Specialty Markets",
    year_month: "2023-01",
  },
];

export const userProfile = (user) => {
  if (user === "user1") {
    return {
      user: {
        money: "$53,000",
        remaining_to_goal: "$6,000",
        userName: "Mark Johnson",
        email: "mark@gmail.com",
        efficiency: "+20%",
        satisfaction_rate: 86.67,
        current_goals: 13,
        total_goals: 15,
        remain_goals: 2,
        goals_progress: 86.67,
        freq_transactions: 22,
        cumparatura: 735,
        retragerea: 165,
      },
    };
  } else if (user === "user2") {
    return {
      user: {
        money: "$16,000",
        remaining_to_goal: "$43,000",
        userName: "Mark Johnson",
        email: "mark@gmail.com",
        efficiency: "+3%",
        satisfaction_rate: 27.12,
        current_goals: 3,
        total_goals: 15,
        remain_goals: 12,
        goals_progress: 27.12,
        freq_transactions: 42,
        cumparatura: 535,
        retragerea: 365,
      },
    };
  } else {
    return {
      user: {
        money: "$53,000",
        remaining_to_goal: "$6,000",
        userName: "Mark Johnson",
        email: "mark@gmail.com",
        efficiency: "+20%",
        satisfaction_rate: 86.67,
        current_goals: 13,
        total_goals: 15,
        remain_goals: 2,
        goals_progress: 86.67,
        freq_transactions: 22,
        cumparatura: 735,
        retragerea: 165,
      },
    };
  }
};
