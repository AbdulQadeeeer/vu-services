// Function to fetch the latest commit content for a file from GitHub
async function fetchLatestContent(repo, filePath, sectionId) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/commits?path=${filePath}`);
        const data = await response.json();

        // Get the content of the latest commit
        const latestCommit = data[0].sha;
        const contentResponse = await fetch(`https://api.github.com/repos/${repo}/git/blobs/${latestCommit}`);
        const contentData = await contentResponse.json();

        const latestContentElement = document.getElementById(`latest-${sectionId}-content`);
        latestContentElement.innerText = atob(contentData.content);
    } catch (error) {
        console.error(`Error fetching latest content for ${sectionId}:`, error);
    }
}

// Specify your GitHub repository, file path, and section ID for each section
fetchLatestContent('AbdulQadeeeer/vu-services', 'handouts/handouts.html', 'handouts-section');
fetchLatestContent('AbdulQadeeeer/vu-services', 'quizzes/quizzes.html', 'quizzes-section');
fetchLatestContent('AbdulQadeeeer/vu-services', 'assignments/assignments.html', 'assignments-section');
fetchLatestContent('AbdulQadeeeer/vu-services', 'gdbs/gdbs.html', 'gdbs-section');
