document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalLink = document.getElementById("modalLink");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".clickable").forEach(item => {
        item.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("data-img");
            modalTitle.innerText = this.getAttribute("data-title") || "";
            modalDesc.innerText = this.getAttribute("data-desc") || "";
            
            
          const linkUrl = this.getAttribute("data-link");
            if (linkUrl && linkUrl.trim() !== "" && linkUrl.startsWith("http")) {
                modalLink.href = linkUrl;
                modalLink.style.display = "inline-block";
            } else {
                modalLink.style.display = "none";
            }
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});
