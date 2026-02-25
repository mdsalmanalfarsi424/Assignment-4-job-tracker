let jobs = [
        { id: 1, title: 'Mobile First Corp', role: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$130,000 - $175,000', description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', status: 'NOT APPLIED' },
        { id: 2, title: 'WebFlow Agency', role: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80,000 - $120,000', description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', status: 'NOT APPLIED' },
        { id: 3, title: 'DataViz Solutions', role: 'Data Visualization Specialist', location: 'Boston, MA', type: 'Full-time', salary: '$125,000 - $165,000', description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', status: 'NOT APPLIED' },
        { id: 4, title: 'CloudFirst Inc', role: 'Backend Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$140,000 - $190,000', description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', status: 'NOT APPLIED' },
        { id: 5, title: 'Innovation Labs', role: 'UI/UX Engineer', location: 'Austin, TX', type: 'Full-time', salary: '$110,000 - $150,000', description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', status: 'NOT APPLIED' },
        { id: 6, title: 'MegaCorp Solutions', role: 'JavaScript Developer', location: 'New York, NY', type: 'Full-time', salary: '$130,000 - $170,000', description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', status: 'NOT APPLIED' },
        { id: 7, title: 'StartupXYZ', role: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: '$120,000 - $160,000', description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', status: 'NOT APPLIED' },
        { id: 8, title: 'TechCorp Industries', role: 'Senior Frontend Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$130,000 - $175,000', description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', status: 'NOT APPLIED' }
    ];
     let currentFilter = 'all';

    function renderApp() {
        const container = document.getElementById('job-container');
        const noJobsView = document.getElementById('no-jobs-view');
        
        
        document.getElementById('stat-total').innerText = jobs.length;
        document.getElementById('stat-interview').innerText = jobs.filter(j => j.status === 'INTERVIEW').length;
        document.getElementById('stat-rejected').innerText = jobs.filter(j => j.status === 'REJECTED').length;

        const filtered = jobs.filter(j => currentFilter === 'all' || j.status.toLowerCase() === currentFilter);
        document.getElementById('job-count-text').innerText = `${filtered.length} jobs`;

        if (filtered.length === 0) {
            container.innerHTML = '';
            noJobsView.classList.remove('hidden');
            return;
        }

        noJobsView.classList.add('hidden');
        container.innerHTML = filtered.map(job => `
            <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative hover:shadow-md transition-all">
                <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-300 hover:text-red-500 p-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>

                <h4 class="text-[22px] font-semibold text-[#002C5C]">${job.title}</h4>
                <p class="text-slate-500 mb-2 font-medium">${job.role}</p>
                
                <div class="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 text-sm mb-4">
                    <span>${job.location}</span>
                    <span>•</span>
                    <span>${job.type}</span>
                    <span>•</span>
                    <span>${job.salary}</span>
                </div>

                <div class="mb-4">
                    <span class="px-3 py-1 text-[14px] font-bold rounded uppercase tracking-wider ${getStatusBadgeStyle(job.status)}">
                        ${job.status}
                    </span>
                </div>

                <p class="text-slate-600 text-sm mb-6 leading-relaxed">
                    ${job.description}
                </p>

                <div class="flex gap-2">
                    <button onclick="updateStatus(${job.id}, 'INTERVIEW')" class="btn btn-xs btn-outline btn-success normal-case px-4 h-8  hover:text-white text-[14px]">Interview</button>
                    <button onclick="updateStatus(${job.id}, 'REJECTED')" class="btn btn-xs btn-outline btn-error normal-case px-4 h-8  hover:text-white text-[14px]">Rejected</button>
                </div>
            </div>
        `).join('');
    }
    
    function getStatusBadgeStyle(status) {
        if (status === 'INTERVIEW') return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
        if (status === 'REJECTED') return 'bg-red-50 text-red-600 border border-red-100';
        return 'bg-blue-50 text-[#448aff] border border-blue-100';
    }

    function updateStatus(id, newStatus) {
        jobs = jobs.map(j => j.id === id ? {...j, status: newStatus} : j);
        renderApp();
    }

    function deleteJob(id) {
        jobs = jobs.filter(j => j.id !== id);
        renderApp();
    }

    function filterJobs(type, btn) {
        currentFilter = type;
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-[#448aff]', 'text-white', 'border-[#448aff]');
            b.classList.add('bg-white', 'text-slate-500', 'border-slate-200');
        });
        btn.classList.remove('bg-white', 'text-slate-500', 'border-slate-200');
        btn.classList.add('bg-[#448aff]', 'text-white', 'border-[#448aff]');
        renderApp();
    }

    window.onload = renderApp;
