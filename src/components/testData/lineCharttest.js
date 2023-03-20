export const options = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 1000,
                stepSize: 100
            }
        }]
    },
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'sales summary',
        },
        filler: {
            propagate: false // Prevents the fill from going beyond the data points
        }
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'report',
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [122, 122, 200, 344, 250, 88, 50],
            borderColor: '#BCBCBC',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};


export const donutData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
        {
            label: 'customers',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};