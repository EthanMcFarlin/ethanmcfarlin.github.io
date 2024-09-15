document.addEventListener('DOMContentLoaded', function() {
    const entries = [
        { date: 'Sep 2024', description: "Continued data centers project as a Research Assistant at the University of Virginia ", label: 'research' },
        { date: 'Aug 2024', description: "Returned as a 3x Teaching Assistant for Harvard COMPSCI 171 'Visualization' ", label: 'milestone' },
        { date: 'Aug 2024', description: "Started a new position as Faculty Dean Aide of Leverett House at Harvard", label: 'milestone' },
        { date: 'June 2024', description: 'Taught CSCI P-14115 "Introduction to Data Science" at Harvard Summer School', label: 'milestone' },
        { date: 'May 2024', description: "Graduated from Harvard College with a Bachelor's in Computer Science", label: 'milestone' },
        { date: 'April 2024', description: "Awarded a fully-funded German DAAD Master's Degree Scholarship (turned down) ", label: 'award' },
        { date: 'Feb 2024', description: 'Began working with the Harvard Berkman Klein Center as a Research Assistant', label: 'research' },
        { date: 'Jan 2024', description: 'Joined the Harvard Conflux Collective through an Art Tech Residency', label: 'award' },
        { date: 'Jan 2024', description: 'Participated in the 9th California Environmental STEM Institute through NHEC', label: 'award' },
        { date: 'Nov 2023', description: 'Paper published as first-author in the Journal of Environmental Modeling and Software', label: 'research' },
        { date: 'Sep 2023', description: "Returned as a 2x Course Assistant for Harvard COMPSCI 171 'Visualization' ", label: 'milestone' },
        { date: 'Aug 2023', description: "Attended SIGGRAPH 2023 in Los Angeles, California", label: 'award' },
        { date: 'June 2023', description: "Began internship with Caltech's Data to Discovery Group through a SURF Fellowship", label: 'research' },
        { date: 'Feb 2023', description: 'Enrolled in a study abroad program in Computer Science at AIT Budapest in Hungary', label: 'milestone' },
        { date: 'Jan 2023', description: 'Taught a data storytelling workshop in 5 NYC public schools', label: 'milestone' },
        { date: 'Sep 2022', description: "Joined the teaching staff for Harvard COMPSCI 171 'Visualization' ", label: 'milestone' },
        { date: 'Sep 2022', description: "Conducted research-for-credit with the Harvard Computer Science Department", label: 'research' },
        { date: 'June 2022', description: "Began internship with the Harvard Data Science Initiative through a PRISE Fellowship", label: 'research' },
        { date: 'May 2022', description: "Attended EAGxPrague in Prague, Czechia", label: 'award' },
        { date: 'Feb 2022', description: "Conducted research-for-credit with the Harvard Government Department", label: 'research' },
        { date: 'Jan 2022', description: "Taught a data science workshop at the TUMO Center in Yerevan, Armenia", label: 'milestone' },
        { date: 'July 2021', description: "Won Startup Summer Pitch Contest at the CU Boulder Silicon Flatirons Institute", label: 'award' },
        { date: 'June 2021', description: "Began internship with Interboro Partners through a Harvard Mindich PCER Fellowship", label: 'research' },
        { date: 'Oct 2020', description: "Won 'Best in Healthcare' and 'Best Data Viz' at Amazon AWS Data Exchange Hackathon", label: 'award' },
        { date: 'Sep 2020', description: "Began my undergraduate degree at Harvard College", label: 'milestone' },
        { date: 'April 2020', description: "Awarded a full-ride Boettcher Scholarship (turned down)", label: 'award' },
        { date: 'March 2020', description: "Awarded a National Merit Macy's Scholarship", label: 'award' },
        { date: 'June 2019', description: "Participated in a NASA SEES internship at the UT Center for Space Research", label: 'research' }
    ];

    let filteredEntries = entries;
    let activeFilter = '';

    const rowsPerPage = 5;
    let currentPage = 1;
    const totalPages = () => Math.ceil(filteredEntries.length / rowsPerPage);

    function updateEntries() {
        const glossyContainer = document.querySelector('.entries');
        glossyContainer.innerHTML = '';
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const currentEntries = filteredEntries.slice(start, end);

        currentEntries.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'entry';
            entryDiv.innerHTML = `
                        <div class="date">${entry.date}</div>
                        <div class="description">
                            ${entry.description}
                            <div class="label ${entry.label}">
                                <i class="fa-solid ${getIconClass(entry.label)}"></i> ${entry.label}
                            </div>
                        </div>
                    `;
            glossyContainer.appendChild(entryDiv);
            glossyContainer.innerHTML += '<hr>';
        });

        updatePagination();
    }

    function getIconClass(label) {
        switch (label) {
            case 'research':
                return 'fa-paperclip';
            case 'award':
                return 'fa-award';
            case 'milestone':
                return 'fa-flag';
            default:
                return '';
        }
    }

    function updatePagination() {
        document.getElementById('pageCounter').textContent = `${currentPage} / ${totalPages()}`;
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === totalPages();
    }

    document.getElementById('prevPage').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateEntries();
        }
    });

    document.getElementById('nextPage').addEventListener('click', function() {
        if (currentPage < totalPages()) {
            currentPage++;
            updateEntries();
        }
    });

    function filterEntries(label) {
        if (activeFilter === label) {
            // If clicked again, remove the filter
            filteredEntries = entries;
            activeFilter = '';
            resetButtonStyles();
        } else {
            // Apply filter
            filteredEntries = entries.filter(entry => entry.label === label);
            activeFilter = label;
            highlightButton(label);
        }
        currentPage = 1;  // Reset to first page after filter
        updateEntries();
    }

    function resetButtonStyles() {
        document.getElementById('researchButton').style.outline = 'none';
        document.getElementById('awardsButton').style.outline = 'none';
        document.getElementById('milestonesButton').style.outline = 'none';
    }

    function highlightButton(label) {
        resetButtonStyles();
        switch (label) {
            case 'research':
                document.getElementById('researchButton').style.outline = '2px solid #f25295';
                break;
            case 'award':
                document.getElementById('awardsButton').style.outline = '2px solid #e64f29';
                break;
            case 'milestone':
                document.getElementById('milestonesButton').style.outline = '2px solid #10ad89';
                break;
        }
    }

    document.getElementById('researchButton').addEventListener('click', function() {
        filterEntries('research');
    });

    document.getElementById('awardsButton').addEventListener('click', function() {
        filterEntries('award');
    });

    document.getElementById('milestonesButton').addEventListener('click', function() {
        filterEntries('milestone');
    });

    updateEntries();
});