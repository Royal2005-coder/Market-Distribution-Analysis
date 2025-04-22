// Dữ liệu Market Distribution từ bảng
const marketData = {
    regions: ['North', 'South', 'West'],
    formats: ['1kg', '500g'],
    products: ['Nuts Muesli', 'Blueberries Muesli', 'Strawberries Muesli', 'Raisins Muesli', 'Original Muesli', 'Mixed Fruits Muesli'],
    data: [
        // North 1kg
        {region: 'North', format: '1kg', product: 'Nuts Muesli', value: 23},
        {region: 'North', format: '1kg', product: 'Blueberries Muesli', value: 8},
        {region: 'North', format: '1kg', product: 'Strawberries Muesli', value: 11},
        {region: 'North', format: '1kg', product: 'Raisins Muesli', value: 26},
        {region: 'North', format: '1kg', product: 'Original Muesli', value: 14},
        {region: 'North', format: '1kg', product: 'Mixed Fruits Muesli', value: 27},
        // North 500g
        {region: 'North', format: '500g', product: 'Nuts Muesli', value: 25},
        {region: 'North', format: '500g', product: 'Blueberries Muesli', value: 5},
        {region: 'North', format: '500g', product: 'Strawberries Muesli', value: 12},
        {region: 'North', format: '500g', product: 'Raisins Muesli', value: 13},
        {region: 'North', format: '500g', product: 'Original Muesli', value: 37},
        {region: 'North', format: '500g', product: 'Mixed Fruits Muesli', value: 14},
        // South 1kg
        {region: 'South', format: '1kg', product: 'Nuts Muesli', value: 39},
        {region: 'South', format: '1kg', product: 'Blueberries Muesli', value: 10},
        {region: 'South', format: '1kg', product: 'Strawberries Muesli', value: 19},
        {region: 'South', format: '1kg', product: 'Raisins Muesli', value: 45},
        {region: 'South', format: '1kg', product: 'Original Muesli', value: 11},
        {region: 'South', format: '1kg', product: 'Mixed Fruits Muesli', value: 56},
        // South 500g
        {region: 'South', format: '500g', product: 'Nuts Muesli', value: 9},
        {region: 'South', format: '500g', product: 'Blueberries Muesli', value: 28},
        {region: 'South', format: '500g', product: 'Strawberries Muesli', value: 11},
        {region: 'South', format: '500g', product: 'Raisins Muesli', value: 19},
        {region: 'South', format: '500g', product: 'Original Muesli', value: 11},
        {region: 'South', format: '500g', product: 'Mixed Fruits Muesli', value: 27},
        // West 1kg
        {region: 'West', format: '1kg', product: 'Nuts Muesli', value: 26},
        {region: 'West', format: '1kg', product: 'Blueberries Muesli', value: 8},
        {region: 'West', format: '1kg', product: 'Strawberries Muesli', value: 14},
        {region: 'West', format: '1kg', product: 'Raisins Muesli', value: 18},
        {region: 'West', format: '1kg', product: 'Original Muesli', value: 12},
        {region: 'West', format: '1kg', product: 'Mixed Fruits Muesli', value: 30},
        // West 500g
        {region: 'West', format: '500g', product: 'Nuts Muesli', value: 12},
        {region: 'West', format: '500g', product: 'Blueberries Muesli', value: 15},
        {region: 'West', format: '500g', product: 'Strawberries Muesli', value: 26},
        {region: 'West', format: '500g', product: 'Raisins Muesli', value: 16},
        {region: 'West', format: '500g', product: 'Original Muesli', value: 10},
        {region: 'West', format: '500g', product: 'Mixed Fruits Muesli', value: 16}
    ]
};

// Màu sắc cho biểu đồ
const chartColors = [
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 99, 132, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(255, 159, 64, 0.7)',
    'rgba(153, 102, 255, 0.7)',
    'rgba(255, 205, 86, 0.7)'
];

// Hàm khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Vẽ các biểu đồ
    createRegionChart();
    createFormatChart();
    createProductChart();
    createMarketShareChart();
    
    // Hiển thị phân tích
    displayRegionAnalysis();
    displayFormatAnalysis();
    displayProductAnalysis();
    
    // Hiển thị chiến thuật
    displayRegionStrategy();
    displayFormatStrategy();
    displayProductStrategy();
    
    // Hiển thị nghiên cứu học thuật
    displayMarketResearch();
    displayERPResearch();
});

// Hàm tính tổng giá trị theo khu vực
function sumByRegion(region) {
    return marketData.data
        .filter(item => item.region === region)
        .reduce((sum, item) => sum + item.value, 0);
}

// Hàm tính tổng giá trị theo định dạng
function sumByFormat(format) {
    return marketData.data
        .filter(item => item.format === format)
        .reduce((sum, item) => sum + item.value, 0);
}

// Hàm tính tổng giá trị theo sản phẩm
function sumByProduct(product) {
    return marketData.data
        .filter(item => item.product === product)
        .reduce((sum, item) => sum + item.value, 0);
}

// Hàm tính tổng giá trị theo khu vực và định dạng
function sumByRegionAndFormat(region, format) {
    return marketData.data
        .filter(item => item.region === region && item.format === format)
        .reduce((sum, item) => sum + item.value, 0);
}

// Hàm tính tổng giá trị theo khu vực và sản phẩm
function sumByRegionAndProduct(region, product) {
    return marketData.data
        .filter(item => item.region === region && item.product === product)
        .reduce((sum, item) => sum + item.value, 0);
}

// Hàm tính tổng giá trị theo định dạng và sản phẩm
function sumByFormatAndProduct(format, product) {
    return marketData.data
        .filter(item => item.format === format && item.product === product)
        .reduce((sum, item) => sum + item.value, 0);
}

// Hàm tính tổng tất cả giá trị
function sumTotal() {
    return marketData.data.reduce((sum, item) => sum + item.value, 0);
}

// Tạo biểu đồ phân phối theo khu vực
function createRegionChart() {
    const ctx = document.getElementById('regionChart').getContext('2d');
    
    const regionData = marketData.regions.map(region => {
        return {
            region: region,
            total: sumByRegion(region),
            format1kg: sumByRegionAndFormat(region, '1kg'),
            format500g: sumByRegionAndFormat(region, '500g')
        };
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: marketData.regions,
            datasets: [
                {
                    label: '1kg',
                    data: regionData.map(item => item.format1kg),
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: '500g',
                    data: regionData.map(item => item.format500g),
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Phân phối sản phẩm theo khu vực và định dạng'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    stacked: false,
                },
                y: {
                    stacked: false,
                    beginAtZero: true
                }
            }
        }
    });
}

// Tạo biểu đồ so sánh định dạng sản phẩm
function createFormatChart() {
    const ctx = document.getElementById('formatChart').getContext('2d');
    
    const formatData = marketData.formats.map(format => sumByFormat(format));
    const total = sumTotal();
    const formatPercentages = formatData.map(value => ((value / total) * 100).toFixed(1));
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: marketData.formats,
            datasets: [{
                data: formatPercentages,
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Tỷ lệ phân phối theo định dạng sản phẩm (%)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

// Tạo biểu đồ xu hướng sản phẩm
function createProductChart() {
    const ctx = document.getElementById('productChart').getContext('2d');
    
    const productData = marketData.products.map(product => sumByProduct(product));
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: marketData.products,
            datasets: [{
                label: 'Tổng số lượng',
                data: productData,
                backgroundColor: chartColors,
                borderColor: chartColors.map(color => color.replace('0.7', '1')),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Phân phối theo loại sản phẩm'
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Tạo biểu đồ thị phần
function createMarketShareChart() {
    const ctx = document.getElementById('marketShareChart').getContext('2d');
    
    const productData = marketData.products.map(product => sumByProduct(product));
    const total = sumTotal();
    const productPercentages = productData.map(value => ((value / total) * 100).toFixed(1));
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: marketData.products,
            datasets: [{
                data: productPercentages,
                backgroundColor: chartColors,
                borderColor: chartColors.map(color => color.replace('0.7', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Thị phần các loại sản phẩm (%)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

// Hiển thị phân tích khu vực
function displayRegionAnalysis() {
    const regionAnalysisElement = document.getElementById('regionAnalysis');
    
    // Tính toán dữ liệu phân tích
    const regionTotals = marketData.regions.map(region => ({
        region: region,
        total: sumByRegion(region)
    }));
    
    // Sắp xếp theo tổng số lượng giảm dần
    regionTotals.sort((a, b) => b.total - a.total);
    
    // Tạo nội dung phân tích
    let analysisContent = `
        <p>Phân tích phân phối theo khu vực cho thấy:</p>
        <ul>
            <li><strong>${regionTotals[0].region}</strong> là khu vực có tổng lượng phân phối cao nhất với <strong>${regionTotals[0].total}</strong> đơn vị.</li>
            <li><strong>${regionTotals[1].region}</strong> đứng thứ hai với <strong>${regionTotals[1].total}</strong> đơn vị.</li>
            <li><strong>${regionTotals[2].region}</strong> có lượng phân phối thấp nhất với <strong>${regionTotals[2].total}</strong> đơn vị.</li>
        </ul>
        <p>Khu vực <strong>${regionTotals[0].region}</strong> chiếm <strong>${((regionTotals[0].total / sumTotal()) * 100).toFixed(1)}%</strong> tổng thị phần, cho thấy đây là thị trường trọng điểm cần tập trung nguồn lực.</p>
    `;
    
    regionAnalysisElement.innerHTML = analysisContent;
}

// Hiển thị phân tích định dạng
function displayFormatAnalysis() {
    const formatAnalysisElement = document.getElementById('formatAnalysis');
    
    // Tính toán dữ liệu phân tích
    const format1kgTotal = sumByFormat('1kg');
    const format500gTotal = sumByFormat('500g');
    const total = sumTotal();
    
    // Tạo nội dung phân tích
    let analysisContent = `
        <p>Phân tích phân phối theo định dạng sản phẩm cho thấy:</p>
        <ul>
            <li>Định dạng <strong>1kg</strong> chiếm <strong>${((format1kgTotal / total) * 100).toFixed(1)}%</strong> thị phần với <strong>${format1kgTotal}</strong> đơn vị.</li>
            <li>Định dạng <strong>500g</strong> chiếm <strong>${((format500gTotal / total) * 100).toFixed(1)}%</strong> thị phần với <strong>${format500gTotal}</strong> đơn vị.</li>
        </ul>
    `;
    
    // Phân tích theo khu vực
    analysisContent += `<p>Phân tích chi tiết theo khu vực:</p><ul>`;
    
    marketData.regions.forEach(region => {
        const format1kg = sumByRegionAndFormat(region, '1kg');
        const format500g = sumByRegionAndFormat(region, '500g');
        const regionTotal = format1kg + format500g;
        
        analysisContent += `
            <li>Tại <strong>${region}</strong>: định dạng 1kg chiếm <strong>${((format1kg / regionTotal) * 100).toFixed(1)}%</strong>, định dạng 500g chiếm <strong>${((format500g / regionTotal) * 100).toFixed(1)}%</strong>.</li>
        `;
    });
    
    analysisContent += `</ul>`;
    
    formatAnalysisElement.innerHTML = analysisContent;
}

// Hiển thị phân tích sản phẩm
function displayProductAnalysis() {
    const productAnalysisElement = document.getElementById('productAnalysis');
    
    // Tính toán dữ liệu phân tích
    const productTotals = marketData.products.map(product => ({
        product: product,
        total: sumByProduct(product)
    }));
    
    // Sắp xếp theo tổng số lượng giảm dần
    productTotals.sort((a, b) => b.total - a.total);
    
    // Tạo nội dung phân tích
    let analysisContent = `
        <p>Phân tích phân phối theo loại sản phẩm cho thấy:</p>
        <ul>
            <li><strong>${productTotals[0].product}</strong> là sản phẩm được phân phối nhiều nhất với <strong>${productTotals[0].total}</strong> đơn vị.</li>
            <li><strong>${productTotals[1].product}</strong> đứng thứ hai với <strong>${productTotals[1].total}</strong> đơn vị.</li>
            <li><strong>${productTotals[5].product}</strong> có lượng phân phối thấp nhất với <strong>${productTotals[5].total}</strong> đơn vị.</li>
        </ul>
    `;
    
    // Phân tích xu hướng sản phẩm theo khu vực
    analysisContent += `<p>Sản phẩm phổ biến nhất theo khu vực:</p><ul>`;
    
    marketData.regions.forEach(region => {
        const productsByRegion = marketData.products.map(product => ({
            product: product,
            total: sumByRegionAndProduct(region, product)
        }));
        
        productsByRegion.sort((a, b) => b.total - a.total);
        
        analysisContent += `
            <li>Tại <strong>${region}</strong>: <strong>${productsByRegion[0].product}</strong> là sản phẩm phổ biến nhất với <strong>${productsByRegion[0].total}</strong> đơn vị.</li>
        `;
    });
    
    analysisContent += `</ul>`;
    
    productAnalysisElement.innerHTML = analysisContent;
}

// Hiển thị chiến thuật phân phối khu vực
function displayRegionStrategy() {
    const regionStrategyElement = document.getElementById('regionStrategy');
    
    // Tính toán dữ liệu phân tích
    const regionTotals = marketData.regions.map(region => ({
        region: region,
        total: sumByRegion(region)
    }));
    
    // Sắp xếp theo tổng số lượng giảm dần
    regionTotals.sort((a, b) => b.total - a.total);
    
    // Tạo nội dung chiến thuật
    let strategyContent = `
        <p>Dựa trên phân tích dữ liệu phân phối thị trường, chiến thuật phân phối khu vực tối ưu là:</p>
        <ul>
            <li><strong>Khu vực ${regionTotals[0].region}</strong>: Tập trung nguồn lực và đầu tư mạnh nhất, chiếm 50% ngân sách marketing và phân phối.</li>
            <li><strong>Khu vực ${regionTotals[1].region}</strong>: Đầu tư trung bình, chiếm 30% ngân sách marketing và phân phối.</li>
            <li><strong>Khu vực ${regionTotals[2].region}</strong>: Đầu tư thấp nhất, chiếm 20% ngân sách marketing và phân phối, nhưng tập trung vào các sản phẩm có thị phần cao nhất tại khu vực này.</li>
        </ul>
        <p>Chiến thuật này tối ưu hóa nguồn lực dựa trên quy mô thị trường và tiềm năng tăng trưởng của từng khu vực.</p>
    `;
    
    regionStrategyElement.innerHTML = strategyContent;
}

// Hiển thị chiến thuật định dạng sản phẩm
function displayFormatStrategy() {
    const formatStrategyElement = document.getElementById('formatStrategy');
    
    // Tính toán dữ liệu phân tích
    const format1kgTotal = sumByFormat('1kg');
    const format500gTotal = sumByFormat('500g');
    const total = sumTotal();
    
    // Tạo nội dung chiến thuật
    let strategyContent = `
        <p>Dựa trên phân tích dữ liệu phân phối thị trường, chiến thuật định dạng sản phẩm tối ưu là:</p>
    `;
    
    if (format1kgTotal > format500gTotal) {
        strategyContent += `
            <ul>
                <li><strong>Ưu tiên định dạng 1kg</strong>: Chiếm ${((format1kgTotal / total) * 100).toFixed(1)}% thị phần, nên tập trung 60% nguồn lực sản xuất và phân phối vào định dạng này.</li>
                <li><strong>Định dạng 500g</strong>: Chiếm ${((format500gTotal / total) * 100).toFixed(1)}% thị phần, nên phân bổ 40% nguồn lực.</li>
            </ul>
        `;
    } else {
        strategyContent += `
            <ul>
                <li><strong>Ưu tiên định dạng 500g</strong>: Chiếm ${((format500gTotal / total) * 100).toFixed(1)}% thị phần, nên tập trung 60% nguồn lực sản xuất và phân phối vào định dạng này.</li>
                <li><strong>Định dạng 1kg</strong>: Chiếm ${((format1kgTotal / total) * 100).toFixed(1)}% thị phần, nên phân bổ 40% nguồn lực.</li>
            </ul>
        `;
    }
    
    // Chiến thuật theo khu vực
    strategyContent += `<p>Chiến thuật định dạng theo khu vực:</p><ul>`;
    
    marketData.regions.forEach(region => {
        const format1kg = sumByRegionAndFormat(region, '1kg');
        const format500g = sumByRegionAndFormat(region, '500g');
        
        if (format1kg > format500g) {
            strategyContent += `
                <li>Tại <strong>${region}</strong>: Tập trung vào định dạng <strong>1kg</strong> (chiếm ưu thế).</li>
            `;
        } else {
            strategyContent += `
                <li>Tại <strong>${region}</strong>: Tập trung vào định dạng <strong>500g</strong> (chiếm ưu thế).</li>
            `;
        }
    });
    
    strategyContent += `</ul>
        <p>Chiến thuật này tối ưu hóa sản xuất và phân phối dựa trên nhu cầu thực tế của thị trường.</p>
    `;
    
    formatStrategyElement.innerHTML = strategyContent;
}

// Hiển thị chiến thuật danh mục sản phẩm
function displayProductStrategy() {
    const productStrategyElement = document.getElementById('productStrategy');
    
    // Tính toán dữ liệu phân tích
    const productTotals = marketData.products.map(product => ({
        product: product,
        total: sumByProduct(product)
    }));
    
    // Sắp xếp theo tổng số lượng giảm dần
    productTotals.sort((a, b) => b.total - a.total);
    
    // Tạo nội dung chiến thuật
    let strategyContent = `
        <p>Dựa trên phân tích dữ liệu phân phối thị trường, chiến thuật danh mục sản phẩm tối ưu là:</p>
        <ul>
            <li><strong>Sản phẩm chủ lực</strong>: ${productTotals[0].product} và ${productTotals[1].product} - Tập trung 60% nguồn lực marketing và sản xuất.</li>
            <li><strong>Sản phẩm tiềm năng</strong>: ${productTotals[2].product} và ${productTotals[3].product} - Tập trung 30% nguồn lực.</li>
            <li><strong>Sản phẩm bổ trợ</strong>: ${productTotals[4].product} và ${productTotals[5].product} - Tập trung 10% nguồn lực.</li>
        </ul>
    `;
    
    // Chiến thuật theo khu vực
    strategyContent += `<p>Chiến thuật sản phẩm theo khu vực:</p><ul>`;
    
    marketData.regions.forEach(region => {
        const productsByRegion = marketData.products.map(product => ({
            product: product,
            total: sumByRegionAndProduct(region, product)
        }));
        
        productsByRegion.sort((a, b) => b.total - a.total);
        
        strategyContent += `
            <li>Tại <strong>${region}</strong>: Tập trung vào <strong>${productsByRegion[0].product}</strong> và <strong>${productsByRegion[1].product}</strong> là sản phẩm chủ lực.</li>
        `;
    });
    
    strategyContent += `</ul>
        <p>Chiến thuật này tối ưu hóa danh mục sản phẩm dựa trên nhu cầu thị trường và tiềm năng tăng trưởng.</p>
    `;
    
    productStrategyElement.innerHTML = strategyContent;
}

// Hiển thị nghiên cứu về tối ưu hóa phân phối thị trường
function displayMarketResearch() {
    const marketResearchElement = document.getElementById('marketResearch');
    
    let researchContent = `
        <p>Dựa trên các nghiên cứu học thuật về tối ưu hóa phân phối thị trường:</p>
        <ul>
            <li><strong>Nguyên tắc Pareto (80/20)</strong>: Theo nghiên cứu của Vilfredo Pareto, 80% doanh thu thường đến từ 20% sản phẩm. Áp dụng nguyên tắc này, nên tập trung nguồn lực vào các sản phẩm và khu vực mang lại hiệu quả cao nhất.</li>
            <li><strong>Mô hình phân phối đa kênh</strong>: Nghiên cứu của Chopra và Meindl (2016) cho thấy chiến lược phân phối đa kênh giúp tối ưu hóa thị phần và giảm chi phí logistics.</li>
            <li><strong>Phân khúc thị trường</strong>: Theo Philip Kotler, việc phân khúc thị trường theo khu vực địa lý và nhu cầu tiêu dùng giúp tối ưu hóa chiến lược phân phối và marketing.</li>
        </ul>
        <p>Các nghiên cứu này đều nhấn mạnh tầm quan trọng của việc phân tích dữ liệu thị trường để đưa ra quyết định phân phối tối ưu.</p>
    `;
    
    marketResearchElement.innerHTML = researchContent;
}

// Hiển thị nghiên cứu về chiến thuật ERP Game
function displayERPResearch() {
    const erpResearchElement = document.getElementById('erpResearch');
    
    let researchContent = `
        <p>Dựa trên các nghiên cứu học thuật về chiến thuật trong ERP Game:</p>
        <ul>
            <li><strong>Tối ưu hóa chuỗi cung ứng</strong>: Nghiên cứu của Sterman (1989) về "Beer Game" cho thấy việc quản lý phân phối thị trường hiệu quả giúp giảm thiểu hiệu ứng Bullwhip và tối ưu hóa chi phí trong chuỗi cung ứng.</li>
            <li><strong>Lý thuyết trò chơi trong ERP</strong>: Theo nghiên cứu của Croson và Donohue (2006), việc áp dụng lý thuyết trò chơi trong phân phối thị trường giúp tối ưu hóa chiến lược cạnh tranh và tăng lợi nhuận.</li>
            <li><strong>Mô hình tối ưu hóa danh mục sản phẩm</strong>: Nghiên cứu của Fisher và Raman (1996) về quản lý danh mục sản phẩm cho thấy việc phân bổ nguồn lực theo nhu cầu thị trường giúp tăng hiệu quả phân phối và giảm chi phí tồn kho.</li>
        </ul>
        <p>Áp dụng các nghiên cứu này vào ERP Game, chiến thuật tối ưu là phân phối thị trường theo nhu cầu thực tế, tập trung vào các sản phẩm và khu vực có tiềm năng cao nhất, đồng thời linh hoạt điều chỉnh theo phản hồi của thị trường.</p>
    `;
    
    erpResearchElement.innerHTML = researchContent;
}