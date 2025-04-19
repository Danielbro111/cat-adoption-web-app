const stats = document.querySelectorAll('.statistic');
    
    // Example statistics data
    const statisticsData = {
        'Total Adoptions': 150,
        'Active Users': 75,
        'Cats Available': 25
    };
    
    // Simple for loop to update each statistic
    for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        const label = stat.querySelector('.label').textContent.trim();
        const valueElement = stat.querySelector('.value');
        
        // Update the value if it exists in our data
        if (statisticsData[label]) {
            valueElement.textContent = statisticsData[label];
        }
    }
}); 
