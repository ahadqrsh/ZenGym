export const PLANS = [
  {
    name: 'Basic',
    price: '1,499',
    period: '/mo',
    highlight: false,
    features: [
      { label: 'Gym Access', included: true },
      { label: 'Cardio', included: true },
      { label: 'Locker', included: true },
      { label: 'Trainer', included: false },
      { label: 'Diet Plan', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '2,499',
    period: '/mo',
    highlight: false,
    features: [
      { label: 'Gym Access', included: true },
      { label: 'Cardio', included: true },
      { label: 'Locker', included: true },
      { label: 'Trainer', included: true },
      { label: 'Diet Plan', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '3,999',
    period: '/mo',
    highlight: true,
    features: [
      { label: 'Gym Access', included: true },
      { label: 'Cardio', included: true },
      { label: 'Locker', included: true },
      { label: 'Trainer', included: true },
      { label: 'Diet Plan', included: true },
    ],
  },
];
