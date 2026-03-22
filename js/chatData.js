    const galleryApp = {
      data: {
        categories: ["all", "people", "nature", "city", "travel", "fashion"],
        images: [
          {
            id: 1,
            title: "Portrait naturel",
            category: "people",
            description: "Un portrait lumineux en style éditorial.",
            url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
            liked: false,
            featured: true
          },
          {
            id: 2,
            title: "Rue urbaine",
            category: "city",
            description: "Une ambiance de rue moderne et vivante.",
            url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
            liked: true,
            featured: false
          },
          {
            id: 3,
            title: "Montagnes calmes",
            category: "nature",
            description: "Une vue naturelle propre et reposante.",
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
            liked: false,
            featured: true
          },
          {
            id: 4,
            title: "Look moderne",
            category: "fashion",
            description: "Style fashion simple et minimaliste.",
            url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
            liked: false,
            featured: false
          },
          {
            id: 5,
            title: "Voyage tropical",
            category: "travel",
            description: "Une destination inspirante pour voyager.",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            liked: true,
            featured: true
          },
          {
            id: 6,
            title: "Moment en ville",
            category: "city",
            description: "Une photo lifestyle en environnement urbain.",
            url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
            liked: false,
            featured: false
          },
          {
            id: 7,
            title: "Nature profonde",
            category: "nature",
            description: "Des arbres et une lumière douce.",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
            liked: false,
            featured: false
          },
          {
            id: 8,
            title: "Studio portrait",
            category: "people",
            description: "Portrait en studio, très propre.",
            url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
            liked: false,
            featured: true
          }
        ]
      },

      state: {
        searchText: "",
        currentCategory: "all",
        showOnlyLiked: false,
        showOnlyFeatured: false,
        isLoading: false,
        isModalOpen: false,
        visibleCount: 6,
        loadStep: 4,
        currentImageId: null
      },

      elements: {
        gallery: document.getElementById("gallery"),
        filterButtons: document.getElementById("filterButtons"),
        searchInput: document.getElementById("searchInput"),
        likedToggle: document.getElementById("likedToggle"),
        featuredToggle: document.getElementById("featuredToggle"),
        resultsCount: document.getElementById("resultsCount"),
        statusText: document.getElementById("statusText"),
        loadMoreBtn: document.getElementById("loadMoreBtn"),
        modal: document.getElementById("modal"),
        modalImage: document.getElementById("modalImage"),
        modalTitle: document.getElementById("modalTitle"),
        modalCategory: document.getElementById("modalCategory"),
        modalDescription: document.getElementById("modalDescription"),
        closeModal: document.getElementById("closeModal")
      },

      init() {
        this.renderFilters();
        this.bindEvents();
        this.render();
      },

      bindEvents() {
        this.elements.searchInput.addEventListener("input", (e) => {
          this.state.searchText = e.target.value.toLowerCase().trim();
          this.state.visibleCount = 6;
          this.render();
        });

        this.elements.likedToggle.addEventListener("click", () => {
          this.state.showOnlyLiked = !this.state.showOnlyLiked;
          this.state.visibleCount = 6;
          this.updateTopButtons();
          this.render();
        });

        this.elements.featuredToggle.addEventListener("click", () => {
          this.state.showOnlyFeatured = !this.state.showOnlyFeatured;
          this.state.visibleCount = 6;
          this.updateTopButtons();
          this.render();
        });

        this.elements.loadMoreBtn.addEventListener("click", () => {
          this.loadMore();
        });

        this.elements.closeModal.addEventListener("click", () => {
          this.closeModal();
        });

        this.elements.modal.addEventListener("click", (e) => {
          if (e.target === this.elements.modal) {
            this.closeModal();
          }
        });

        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && this.state.isModalOpen) {
            this.closeModal();
          }
        });
      },

      renderFilters() {
        this.elements.filterButtons.innerHTML = this.data.categories
          .map(category => {
            const activeClass = this.state.currentCategory === category ? "active" : "";
            return `
              <button class="${activeClass}" data-category="${category}">
                ${category}
              </button>
            `;
          })
          .join("");

        const buttons = this.elements.filterButtons.querySelectorAll("button");

        buttons.forEach(button => {
          button.addEventListener("click", () => {
            this.state.currentCategory = button.dataset.category;
            this.state.visibleCount = 6;
            this.renderFilters();
            this.render();
          });
        });
      },

      updateTopButtons() {
        this.elements.likedToggle.className = this.state.showOnlyLiked ? "" : "secondary";
        this.elements.featuredToggle.className = this.state.showOnlyFeatured ? "" : "secondary";
      },

      get filteredImages() {
        return this.data.images.filter(image => {
          const matchesCategory =
            this.state.currentCategory === "all" ||
            image.category === this.state.currentCategory;

          const matchesSearch =
            image.title.toLowerCase().includes(this.state.searchText) ||
            image.category.toLowerCase().includes(this.state.searchText) ||
            image.description.toLowerCase().includes(this.state.searchText);

          const matchesLiked =
            !this.state.showOnlyLiked || image.liked === true;

          const matchesFeatured =
            !this.state.showOnlyFeatured || image.featured === true;

          return matchesCategory && matchesSearch && matchesLiked && matchesFeatured;
        });
      },

      get visibleImages() {
        return this.filteredImages.slice(0, this.state.visibleCount);
      },

      toggleLike(id) {
        this.data.images = this.data.images.map(image => {
          if (image.id === id) {
            return { ...image, liked: !image.liked };
          }
          return image;
        });
        this.render();
      },

      openModal(id) {
        const image = this.data.images.find(img => img.id === id);
        if (!image) return;

        this.state.isModalOpen = true;
        this.state.currentImageId = id;

        this.elements.modalImage.src = image.url;
        this.elements.modalImage.alt = image.title;
        this.elements.modalTitle.textContent = image.title;
        this.elements.modalCategory.textContent = `Catégorie : ${image.category}`;
        this.elements.modalDescription.textContent = image.description;

        this.elements.modal.classList.add("open");
      },

      closeModal() {
        this.state.isModalOpen = false;
        this.state.currentImageId = null;
        this.elements.modal.classList.remove("open");
      },

      loadMore() {
        this.state.isLoading = true;
        this.elements.statusText.textContent = "Chargement...";
        this.elements.loadMoreBtn.disabled = true;
        this.elements.loadMoreBtn.textContent = "Chargement...";

        setTimeout(() => {
          this.state.visibleCount += this.state.loadStep;
          this.state.isLoading = false;
          this.render();
        }, 700);
      },

      createCard(image) {
        return `
          <article class="card">
            <img src="${image.url}" alt="${image.title}" />
            <div class="card-content">
              <div class="card-top">
                <h3 class="card-title">${image.title}</h3>
                <span class="badge">${image.category}</span>
              </div>

              <p class="card-desc">${image.description}</p>

              ${image.featured ? '<p class="featured-mark">★ Featured</p>' : ""}

              <div class="card-actions">
                <div class="left-actions">
                  <button class="icon-btn ${image.liked ? "liked" : ""}" data-like="${image.id}">
                    ${image.liked ? "♥ Liked" : "♡ Like"}
                  </button>
                </div>

                <div class="right-actions">
                  <button class="icon-btn" data-view="${image.id}">Voir</button>
                </div>
              </div>
            </div>
          </article>
        `;
      },

      renderGallery() {
        if (this.visibleImages.length === 0) {
          this.elements.gallery.innerHTML = `
            <div class="empty">
              Aucune image trouvée avec ces filtres.
            </div>
          `;
          return;
        }

        this.elements.gallery.innerHTML = this.visibleImages
          .map(image => this.createCard(image))
          .join("");

        this.elements.gallery.querySelectorAll("[data-like]").forEach(button => {
          button.addEventListener("click", () => {
            this.toggleLike(Number(button.dataset.like));
          });
        });

        this.elements.gallery.querySelectorAll("[data-view]").forEach(button => {
          button.addEventListener("click", () => {
            this.openModal(Number(button.dataset.view));
          });
        });
      },

      updateInfo() {
        const total = this.filteredImages.length;
        const visible = this.visibleImages.length;

        this.elements.resultsCount.textContent =
          `${visible} / ${total} image${total > 1 ? "s" : ""}`;

        this.elements.statusText.textContent =
          this.state.isLoading ? "Chargement..." : "Prêt";
      },

      updateLoadMoreButton() {
        const hasMore = this.state.visibleCount < this.filteredImages.length;

        this.elements.loadMoreBtn.style.display = hasMore ? "inline-block" : "none";
        this.elements.loadMoreBtn.disabled = false;
        this.elements.loadMoreBtn.textContent = "Charger plus";
      },

      render() {
        this.renderFilters();
        this.updateTopButtons();
        this.renderGallery();
        this.updateInfo();
        this.updateLoadMoreButton();
      }
    };

    
    galleryApp.init();