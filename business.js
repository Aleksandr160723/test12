// Конфигурация бизнеса
const BUSINESS_CONFIG = {
    gasStation: {
        name: 'Ларек',
        cost: 10000,
        hourlyIncome: 500,
        backgroundImage: 'images/photo_2025-02-16_16-45-36.jpg',
        maxCount: 1
    },
    restaurant: {
        name: 'Кофейня',
        cost: 50000,
        hourlyIncome: 2000,
        backgroundImage: 'images/photo_2025-02-16_16-42-02.jpg',
        maxCount: 1
    },
    company: {
        name: 'Салон красоты',
        cost: 100000,
        hourlyIncome: 5000,
        backgroundImage: 'images/photo_2025-02-16_16-36-48.jpg',
        maxCount: 1
    },
    hotel: {
        name: 'Отель',
        cost: 200000,
        hourlyIncome: 10000,
        backgroundImage: 'images/photo_2025-02-16_16-46-28.jpg',
        maxCount: 1
    },
    casino: {
        name: 'Торговый центр',
        cost: 500000,
        hourlyIncome: 20000,
        backgroundImage: 'images/photo_2025-02-16_16-54-08.jpg',
        maxCount: 1
    },
    stadium: {
        name: 'Стадион',
        cost: 1000000,
        hourlyIncome: 30000,
        backgroundImage: 'images/photo_2025-02-16_16-56-29.jpg',
        maxCount: 1
    },
    mall: {
        name: 'Банк',
        cost: 2000000,
        hourlyIncome: 40000,
        backgroundImage: 'images/photo_2025-02-16_16-56-34.jpg',
        maxCount: 1
    },
    airport: {
        name: 'Аэропорт',
        cost: 5000000,
        hourlyIncome: 50000,
        backgroundImage: 'images/photo_2025-02-16_17-03-31.jpg',
        maxCount: 1
    },
    port: {
        name: 'Небоскрёб',
        cost: 10000000,
        hourlyIncome: 60000,
        backgroundImage: 'images/photo_2025-02-16_17-03-35.jpg',
        maxCount: 1
    },
    skyscraper: {
        name: 'Казино',
        cost: 20000000,
        hourlyIncome: 80000,
        backgroundImage: 'images/photo_2025-02-16_17-03-38.jpg',
        maxCount: 1
    },
    spaceport: {
        name: 'Космодром',
        cost: 50000000,
        hourlyIncome: 100000,
        backgroundImage: 'images/photo_2025-02-16_17-18-22.jpg',
        maxCount: 1
    },
    quantum: {
        name: 'Квантовый компьютер',
        cost: 100000000,
        hourlyIncome: 150000,
        backgroundImage: 'images/photo_2025-02-16_17-19-31.jpg',
        maxCount: 1
    },
    research: {
        name: 'Исследовательский центр',
        cost: 200000000,
        hourlyIncome: 200000,
        backgroundImage: 'images/photo_2025-02-16_17-20-14.jpg',
        maxCount: 1
    },
    empire: {
        name: 'Галактическая империя',
        cost: 500000000,
        hourlyIncome: 300000,
        backgroundImage: 'images/photo_2025-02-16_17-20-43.jpg',
        maxCount: 1
    }
};

// Состояние бизнеса
let businesses = {
    gasStation: { count: 0, cost: BUSINESS_CONFIG.gasStation.cost, income: BUSINESS_CONFIG.gasStation.hourlyIncome, maxCount: 1 },
    restaurant: { count: 0, cost: BUSINESS_CONFIG.restaurant.cost, income: BUSINESS_CONFIG.restaurant.hourlyIncome, maxCount: 1 },
    company: { count: 0, cost: BUSINESS_CONFIG.company.cost, income: BUSINESS_CONFIG.company.hourlyIncome, maxCount: 1 },
    hotel: { count: 0, cost: BUSINESS_CONFIG.hotel.cost, income: BUSINESS_CONFIG.hotel.hourlyIncome, maxCount: 1 },
    casino: { count: 0, cost: BUSINESS_CONFIG.casino.cost, income: BUSINESS_CONFIG.casino.hourlyIncome, maxCount: 1 },
    stadium: { count: 0, cost: BUSINESS_CONFIG.stadium.cost, income: BUSINESS_CONFIG.stadium.hourlyIncome, maxCount: 1 },
    mall: { count: 0, cost: BUSINESS_CONFIG.mall.cost, income: BUSINESS_CONFIG.mall.hourlyIncome, maxCount: 1 },
    airport: { count: 0, cost: BUSINESS_CONFIG.airport.cost, income: BUSINESS_CONFIG.airport.hourlyIncome, maxCount: 1 },
    port: { count: 0, cost: BUSINESS_CONFIG.port.cost, income: BUSINESS_CONFIG.port.hourlyIncome, maxCount: 1 },
    skyscraper: { count: 0, cost: BUSINESS_CONFIG.skyscraper.cost, income: BUSINESS_CONFIG.skyscraper.hourlyIncome, maxCount: 1 },
    spaceport: { count: 0, cost: BUSINESS_CONFIG.spaceport.cost, income: BUSINESS_CONFIG.spaceport.hourlyIncome, maxCount: 1 },
    quantum: { count: 0, cost: BUSINESS_CONFIG.quantum.cost, income: BUSINESS_CONFIG.quantum.hourlyIncome, maxCount: 1 },
    research: { count: 0, cost: BUSINESS_CONFIG.research.cost, income: BUSINESS_CONFIG.research.hourlyIncome, maxCount: 1 },
    empire: { count: 0, cost: BUSINESS_CONFIG.empire.cost, income: BUSINESS_CONFIG.empire.hourlyIncome, maxCount: 1 }
};

// Функция покупки бизнеса
function buyBusiness(type) {
    const business = businesses[type];
    if (balance >= business.cost && business.count < business.maxCount) {
        balance -= business.cost;
        business.count++;
        updateUI();
        return true;
    }
    return false;
}

// Функция обновления интерфейса бизнеса
function updateBusinessUI() {
    const businessPage = document.getElementById('businessPage');
    businessPage.innerHTML = '';
    Object.entries(businesses).forEach(([type, data]) => {
        const businessCard = document.createElement('div');
        businessCard.className = `business-card ${type}`;
        businessCard.innerHTML = `
            <div class="business-info">
                <div>
                    <h3>${BUSINESS_CONFIG[type].name}</h3>
                    <p class="business-income">Доход: $${data.income}/час</p>
                    <p class="business-count">Количество: <span id="${type}Count">${data.count}</span></p>
                </div>
                <div>
                    <p class="business-cost">$${data.cost.toLocaleString()}</p>
                    <button class="business-buy-btn" onclick="buyBusiness('${type}')" ${data.count >= data.maxCount ? 'disabled' : ''}>
                        ${data.count >= data.maxCount ? 'Куплено' : 'Купить'}
                    </button>
                </div>
            </div>
        `;
        businessPage.appendChild(businessCard);
    });
}

// Функция автоматического дохода
function updateIncome() {
    let totalIncome = 0;
    Object.entries(businesses).forEach(([type, data]) => {
        totalIncome += data.count * data.income;
    });
    
    balance += totalIncome;
    updateUI();
}

// Запуск автоматического дохода каждую секунду
setInterval(updateIncome, 1000);

