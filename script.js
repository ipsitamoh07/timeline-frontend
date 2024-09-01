function showContent(year, element, index) {
    const contentArea = document.getElementById('content-area');
    const contentImage = document.getElementById('content-image');
    const contentTitle = document.getElementById('content-title');
    const contentText = document.getElementById('content-text');

    const allEntries = document.querySelectorAll('.timeline-entry');
    allEntries.forEach(entry => entry.classList.remove('active'));
    element.classList.add('active');

    const allSegments = document.querySelectorAll('.progress-segment');
    allSegments.forEach((segment, i) => {
        if (i < index) {
            segment.classList.add('filled');
        } else {
            segment.classList.remove('filled');
        }
    });
    contentArea.classList.remove('zoom-in');
    contentArea.classList.add('zoom-out');

    setTimeout(() => {
        switch (year) {
            case '2018':
                contentImage.src = './images/images.jpeg';
                contentTitle.textContent = 'April 2018';
                contentText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
                break;
            case '2019':
                contentImage.src = './images/images1.jpeg';
                contentTitle.textContent = 'April 2019';
                contentText.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
                break;
            case '2020':
                contentImage.src = './images/images2.jpeg';
                contentTitle.textContent = 'April 2020';
                contentText.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
                break;
            case '2021':
                contentImage.src = './images/images3.jpeg';
                contentTitle.textContent = 'April 2021';
                contentText.textContent = 'orem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
                break;
            case '2022':
                contentImage.src = './images/images.jpeg';
                contentTitle.textContent = 'April 2022';
                contentText.textContent = "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ";
                break;
            case '2023':
                contentImage.src = './images/images5.jpeg';
                contentTitle.textContent = 'April 2023';
                contentText.textContent = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
                break;
            case '2024':
                contentImage.src = './images/images6.jpeg';
                contentTitle.textContent = 'April 2024';
                contentText.textContent = ' It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';
                break;
        }

        contentArea.classList.remove('zoom-out');
        contentArea.classList.add('zoom-in');
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const firstTimelineEntry = document.querySelector('.timeline-entry[data-year="2018"]');
    showContent('2018', firstTimelineEntry, 0);
});
