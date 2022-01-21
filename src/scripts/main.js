// -------------------------------------
// vue app
// -------------------------------------
const app = Vue.createApp({
    data() {
        return {
            // the date my career started (change to yours)
            careerStartDate: 2019,

            // the date copyright started (change to yours)
            copyrightStartDate: 2021,

            // for the template theme
            appTheme: 'light_theme', savedTheme: null,

            // flag to toggle the preloader
            isPreloading: true,

            // toast notifications array
            notifications: [],

            // manage loading spinner status
            ajaxLoading: [],

            // for minimizing the header on scrolling down
            startMinimizingHeaderAt: 100, isHeaderBig: true, // for toggling the header on scrolling down
            lastScrollPosition: 0, isHeaderHidden: false, // for scroll to top button
            startShowingScrollTopBtnAt: 600, isScrollTopBtnDisplayed: false,

            // flag to toggle focus style class
            isAnyFocus: false,

            // flag to toggle nav menu
            isNavMenuOpen: false,

            // list of nav links to loop through it
            navLinks: [{
                url: '#hero', title: 'Accueil'
            }, {
                url: '#about', title: 'A propos'
            }, {
                url: '#skills', title: 'Mes competences'
            }, {
                url: '#portfolio', title: 'Portfolio'
            }, {
                url: '#contact', title: 'Contact'
            }],

            // flag to toggle between skills types in skills section
            skillsType: '',

            // list of skills items to loop through it
            skillsItems: [{
                imgUrl: '../assets/images/logo/html-5.svg', title: 'HTML5'
            }, {
                imgUrl: '../assets/images/logo/css3.svg', title: 'CSS3'
            }, {
                imgUrl: '../assets/images/logo/javascript.svg', title: 'JavaScript'
            }, {
                imgUrl: '../assets/images/logo/jquery.svg', title: 'jQuery'
            }, {
                imgUrl: '../assets/images/logo/nodejs.svg', title: 'NodeJS'
            }, {
                imgUrl: '../assets/images/logo/sequelize.svg', title: 'Sequelize'
            }, {
                imgUrl: '../assets/images/logo/react.svg', title: 'React'
            }, {
                imgUrl: '../assets/images/logo/expressjs.svg', title: 'Express'
            }, {
                imgUrl: '../assets/images/logo/python.svg', title: 'Python'
            }, {
                imgUrl: '../assets/images/logo/arduino.svg', title: 'Arduino'
            }, {
                imgUrl: '../assets/images/logo/java.svg', title: 'Java'
            }],

            // list of tools items to loop through it
            toolsItems: [{
                imgUrl: '../assets/images/logo/ajax.png', title: 'Ajax'
            }, {
                imgUrl: '../assets/images/logo/github.svg', title: 'Git (Github)'
            }, {
                imgUrl: '../assets/images/logo/npm.svg', title: 'Npm'
            }, {
                imgUrl: '../assets/images/logo/cmd.svg', title: 'Command Line'
            }, {
                imgUrl: '../assets/images/logo/jetbrains.svg', title: 'JetBrains'
            }, {
                imgUrl: '../assets/images/logo/ms-project.svg', title: 'Ms Project'
            }, {
                imgUrl: '../assets/images/logo/dolibarr.jpeg', title: 'Dolibarr'
            }, {
                imgUrl: '../assets/images/logo/office-365.svg', title: 'Office 365'
            }],

            // list of experience items to loop through it
            experienceItems: [{
                date: '2009',
                companyName: 'Google Inc.',
                jobTitle: 'Front-End Developer',
                desc: 'Monitored technical aspects of the front-end delivery for projects.',
            }, {
                date: '2011',
                companyName: 'Facebook Inc.',
                jobTitle: 'Full Stack Developer',
                desc: 'Collaborate with creative and development teams on the execution of ideas.',
            }, {
                date: '2013',
                companyName: 'Envato Inc.',
                jobTitle: 'UI/UX Developer',
                desc: 'Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript.',

            }, {
                date: '2015',
                companyName: 'Google Inc.',
                jobTitle: 'Front-End Developer',
                desc: 'Monitored technical aspects of the front-end delivery for projects.',
            }, {
                date: '2017',
                companyName: 'Facebook Inc.',
                jobTitle: 'Full Stack Developer',
                desc: 'Collaborate with creative and development teams on the execution of ideas.',

            }, {
                date: '2019',
                companyName: 'Google Inc.',
                jobTitle: 'Front-End Developer',
                desc: 'Monitored technical aspects of the front-end delivery for projects.',
            }, {
                date: '2021',
                companyName: 'Facebook Inc.',
                jobTitle: 'Full Stack Developer',
                desc: 'Collaborate with creative and development teams on the execution of ideas.'

            }, {}, {}],

            // current page of portfolio items
            portfolioItemsPage: 1,

            // portfolio items per page
            itemsPerPage: 7,

            // portfolio items filter by type
            filters: ['All', 'HTML', 'Angular', 'Vue'], currentFilter: 'All',

            // portfolio archive name
            portfolioArchiveName: '',

            // list of portfolio items to loop through it
            allPortfolioItems: [{
                id: 1,
                url: 'single-portfolio.html?id=1',
                imgUrl: 'https://via.placeholder.com/400x400',
                title: 'Lorem Ipsum Dolor 1',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                category: 'HTML',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5'
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4',
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3',
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2',
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1',
                    }
                }
            }, {
                id: 2,
                url: 'single-portfolio.html?id=2',
                imgUrl: 'https://via.placeholder.com/530x300',
                title: 'Lorem Ipsum Dolor 2',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                category: 'Angular',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5',
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4',
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3',
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2',
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1',
                    }
                }
            }, {
                id: 3,
                url: 'single-portfolio.html?id=3',
                imgUrl: 'https://via.placeholder.com/390x390',
                title: 'Lorem Ipsum Dolor 3',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                category: 'Vue',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'Vue', 'Firebase'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5'
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4'
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3'
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2'
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1'
                    }
                }
            }, {
                id: 4,
                url: 'single-portfolio.html?id=4',
                imgUrl: 'https://via.placeholder.com/340x510',
                title: 'Lorem Ipsum Dolor 4',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

                category: 'HTML',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5'
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4'
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3',
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2',
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1',
                    }
                }
            }, {
                id: 5,
                url: 'single-portfolio.html?id=5',
                imgUrl: 'https://via.placeholder.com/380x215',
                title: 'Lorem Ipsum Dolor 5',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                category: 'Angular',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5'
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4'
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3'
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2'
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1'
                    }
                }
            }, {
                id: 6,
                url: 'single-portfolio.html?id=6',
                imgUrl: 'https://via.placeholder.com/400x300',
                title: 'Lorem Ipsum Dolor 6',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                category: 'Vue',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5'
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4'
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3'
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2'
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1'
                    }
                }
            }, {
                id: 7,
                url: 'single-portfolio.html?id=7',
                imgUrl: 'https://via.placeholder.com/380x215',
                title: 'Lorem Ipsum Dolor 7',
                date: 'April 2021',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                category: 'HTML',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
                screenshots: {
                    img1: {
                        url: 'https://via.placeholder.com/355x200', caption: 'caption 5'
                    }, img2: {
                        url: 'https://via.placeholder.com/330x460', caption: 'caption 4'
                    }, img3: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 3'
                    }, img4: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 2'
                    }, img5: {
                        url: 'https://via.placeholder.com/300x225', caption: 'caption 1'
                    }
                }
            }].reverse(),

            // viewed portfolio items
            portfolioItems: [],

            // list of testimonials items to loop through it
            testimonialsItems: [{
                imgUrl: '../assets/images/avatar/avatar-h.png',
                quoteContent: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
                quoteAuthor: 'Terrell Grimes',
                jobTitle: 'Photographer'
            }, {
                imgUrl: '../assets/images/avatar/avatar-f.png',
                quoteContent: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
                quoteAuthor: 'Terrell Grimes',
                jobTitle: 'Photographer'
            }]
        }
    }, created() {
        // get a theme to use
        this.getAppTheme();
    }, mounted() {
        if (window.innerWidth >= 992) {
            // initialize circle cursor
            this.initCircleCursor();

            // apply pan effect hero image
            this.heroImgPanEffect();

            // initialize VanillaTilt library in portfolio section
            this.initializeTilt();
        }

        // nav menu tab trap
        this.navMenuTabTrap();

        // hide the preloader screen after loading
        window.addEventListener('load', () => this.isPreloading = false);

        // scrolling options
        this.scrollingOptions();
        document.addEventListener('scroll', () => this.scrollingOptions());

        // initialize popper.js plugin
        document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
            Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
                placement: 'top', modifiers: [{name: 'offset', options: {offset: [0, 30]}}]
            });
        });

        // get portfolio items
        this.getPortfolioItems();

        // init glightbox plugin
        const lightbox = new GLightbox({
            autoplayVideos: false,
        });

        // initialize the first displayed type of skills
        this.initSkillsFirstType();
    }, methods: {
        // initialize circle cursor
        initCircleCursor() {
            const app = this.$refs.appRef;
            const outer = this.$refs.circleCursorOuter;
            const inner = this.$refs.circleCursorInner;

            // return if disabled
            if (!outer || !inner) {
                return;
            }

            app.addEventListener('mousemove', e => {
                // make the circles follow the cursor
                outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
                inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

                // add link hover style
                (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
            });

            app.addEventListener('click', () => {
                // add pulse effect on click
                inner.classList.add('cursor-click-effect');
                setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
            });
        },

        // get a theme to use
        getAppTheme() {
            // get the saved theme from the localStorage
            const storageSavedTheme = localStorage.getItem('nafieSavedTheme');

            // Check to see if there a saved theme
            if (storageSavedTheme) {
                this.savedTheme = storageSavedTheme;

            } else {
                // So, try to get the browser default theme or make your own default

                // Check to see if Media-Queries are supported
                if (window.matchMedia) {

                    // Check if the dark-mode Media-Query matches
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        this.savedTheme = 'dark_theme';
                    } else {
                        this.savedTheme = 'light_theme';
                    }

                } else {
                    // Default (when Media-Queries are not supported)
                    this.savedTheme = this.appTheme;
                }
            }

            // save the new theme in the localStorage
            localStorage.setItem('nafieSavedTheme', this.savedTheme);
        },

        // detect the theme changes
        changeAppTheme() {
            (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';

            // save the new theme in the localStorage
            localStorage.setItem('nafieSavedTheme', this.savedTheme);
        },

        // toggle nav menu
        toggleNavMenu() {
            this.isNavMenuOpen = !this.isNavMenuOpen;
            this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
        },

        // open nav menu
        openNavMenu() {
            const bodyEl = document.getElementsByTagName('body')[0];

            this.isNavMenuOpen = true;

            bodyEl.setAttribute('style', 'overflow-y: hidden;');

            // set focus on nav menu
            this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
        },

        // close nav menu
        closeNavMenu() {
            const bodyEl = document.getElementsByTagName('body')[0];

            this.isNavMenuOpen = false;

            bodyEl.removeAttribute('style');

            // set focus on nav menu toggle button
            this.$refs.navMenuToggleBtn.focus();
        },

        // nav menu tab trap
        navMenuTabTrap() {
            const nav = this.$refs.headerNav;
            const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
            let firstTabStop;
            let lastTabStop;
            let isFirstTabStop;
            let isLastTabStop;

            document.addEventListener('keyup', e => {
                if (nav.classList.contains('menu-open')) {
                    // get first & last focusable elements in the side menu for the tab trap
                    const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
                        .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
                    firstTabStop = visibleFocusableEls[0];
                    lastTabStop = visibleFocusableEls[visibleFocusableEls.length - 1];

                    if (e.code === 'Tab') {
                        if (e.shiftKey) /* shift + tab */ {
                            // if this is the first item, move to the last item
                            isFirstTabStop && lastTabStop.focus();
                        } else /* tab */ {
                            // if this is the last item, go back to the first item
                            isLastTabStop && firstTabStop.focus();
                        }

                        // close nav menu on Escape button press
                    } else if (e.code === 'Escape') {
                        this.toggleNavMenu();
                    }

                    // get current active element
                    const activeEl = document.activeElement;

                    // check if last item or not
                    isLastTabStop = (activeEl === lastTabStop) ? true : false;

                    // check if first item or not
                    isFirstTabStop = (activeEl === firstTabStop) ? true : false;
                }
            });
        },

        // apply pan effect hero image
        heroImgPanEffect() {
            const parent = this.$refs.heroSection;

            // return if disabled
            if (!parent || !parent.getAttribute('data-paneffect')) {
                return;
            }

            const layer1 = parent.querySelectorAll('.layer')[0];
            const layer2 = parent.querySelectorAll('.layer')[1];

            parent.addEventListener('mousemove', (e) => {
                const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
                const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

                parent.classList.add('parallax-animation');

                layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
                layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
            });
        },

        // scrolling options
        scrollingOptions() {
            const scrollPosition = window.pageYOffset;

            // check for current scroll position to minimize the header
            this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;

            // check for current scroll position to toggle the header
            this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
            this.lastScrollPosition = scrollPosition;

            // check for current scroll position to show the scrollTop button
            this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
        },

        // scroll to top
        scrollToTop() {
            window.scroll({top: 0, behavior: 'smooth'});
        },

        // initialize the first displayed type of skills
        initSkillsFirstType() {
            const skillsSwitchBtn = this.$refs.skillsSwitchBtn;

            // return if disabled
            if (!skillsSwitchBtn) {
                return;
            }

            this.skillsType = skillsSwitchBtn.querySelector('input').value;
        },

        // initialize VanillaTilt library in portfolio section
        initializeTilt() {
            const portfolioItems = this.$refs.portfolioItems;

            // return if disabled
            if (!portfolioItems) {
                return;
            }

            VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
                max: 8, speed: 400, glare: true, 'max-glare': 0.3
            });
        },

        // get portfolio items
        getPortfolioItems() {
            const itemsArr = this.allPortfolioItems
                .filter(item => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const tax = urlParams.get('tax');

                    if (tax) {
                        if (tax === 'cat') {
                            const cat = urlParams.get('cat');

                            this.portfolioArchiveName = cat;
                            return item.category === cat;

                        } else if (tax === 'tools') {
                            const tool = urlParams.get('tools');

                            this.portfolioArchiveName = tool;
                            return item.tools.includes(tool);
                        }

                    } else {
                        return this.currentFilter === 'All' || item.category === this.currentFilter;
                    }
                })
                .slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage);

            // check if have works or not
            if (itemsArr.length) {
                this.portfolioItems.push(...itemsArr);

                // initialize VanillaTilt for new items
                setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

                this.portfolioItemsPage++;

            } else {

                // show message "No works" to the user
                this.setNotify({
                    className: 'danger', msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'), time: 3000
                });
            }
        },

        // filter portfolio items
        filterPortfolioItems(filter) {
            this.currentFilter = filter;
            this.portfolioItemsPage = 1;

            if (this.filteredPortfolioItems.length) {
                // initialize VanillaTilt for new items
                setTimeout(() => this.initializeTilt(), 0);

            } else {
                // get new portfolio items
                this.getPortfolioItems();
            }
        },

        // contact form validation
        contactFormValidation() {
            // contact form
            const contactForm = this.$refs.contactForm;

            // form controls
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const phone = contactForm.querySelector('input[name="phone"]');
            const message = contactForm.querySelector('textarea');

            // form validation status
            let errors = {
                name: {required: true, minLength: true},
                email: {required: true, invalid: true},
                phone: {invalid: true},
                message: {required: true}
            };

            /* --------------- */
            /* name validation */
            /* --------------- */

            // required validation
            if (name.value === '') {
                errors.name.required = true;
                this.setNotify({
                    id: 'nameRequired',
                    className: 'danger',
                    msg: name.closest('.control').querySelector('.errors-msgs .required').value
                });

            } else {
                errors.name.required = false;
                this.dismissNotify('nameRequired');
            }

            // minlength validation
            if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
                errors.name.minLength = true;
                this.setNotify({
                    id: 'nameMinLength',
                    className: 'danger',
                    msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
                });

            } else {
                errors.name.minLength = false;
                this.dismissNotify('nameMinLength');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
                name.classList.remove('valid');
                name.classList.add('invalid');
            } else {
                name.classList.remove('invalid');
                name.classList.add('valid');
            }

            /* ---------------- */
            /* email validation */
            /* ---------------- */

            // required validation
            if (email.value === '') {
                errors.email.required = true;
                this.setNotify({
                    id: 'emailRequired',
                    className: 'danger',
                    msg: email.closest('.control').querySelector('.errors-msgs .required').value
                });

            } else {
                errors.email.required = false;
                this.dismissNotify('emailRequired');
            }

            // email validation
            if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
                errors.email.invalid = true;
                this.setNotify({
                    id: 'emailInvalid',
                    className: 'danger',
                    msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
                });

            } else {
                errors.email.invalid = false;
                this.dismissNotify('emailInvalid');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
                email.classList.remove('valid');
                email.classList.add('invalid');
            } else {
                email.classList.remove('invalid');
                email.classList.add('valid');
            }

            /* ---------------- */
            /* phone validation */
            /* ---------------- */

            // phone validation
            if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
                errors.phone.invalid = true;
                this.setNotify({
                    id: 'phoneInvalid',
                    className: 'danger',
                    msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
                });

            } else {
                errors.phone.invalid = false;
                this.dismissNotify('phoneInvalid');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
                phone.classList.remove('valid');
                phone.classList.add('invalid');
            } else {
                phone.classList.remove('invalid');
                phone.classList.add('valid');
            }

            /* ------------------ */
            /* message validation */
            /* ------------------ */

            // required validation
            if (message.value === '') {
                errors.message.required = true;
                this.setNotify({
                    id: 'messageRequired',
                    className: 'danger',
                    msg: message.closest('.control').querySelector('.errors-msgs .required').value
                });

            } else {
                errors.message.required = false;
                this.dismissNotify('messageRequired');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
                message.classList.remove('valid');
                message.classList.add('invalid');
            } else {
                message.classList.remove('invalid');
                message.classList.add('valid');
            }

            // send the message if the form is valid
            (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
        },

        // send message from contact form
        async sendContactFormMessage(form) {
            const contactForm = this.$refs.contactForm;

            // form controls
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const phone = contactForm.querySelector('input[name="phone"]').value;
            const message = contactForm.querySelector('textarea').value;
            const dataformjson = {name, email, phone, message}
            // start loading spinner
            this.startLoading();
            // send post request
            const resp = await axios.post("/sendMail", dataformjson)
            const data = resp.data
            if (data === 'success') {

                // show success message
                this.setNotify({className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000});

                // reset all form inputs
                form.reset();

                // remove inputs valid classes
                form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

            } else if (data === 'error') {
                // show error message
                this.setNotify({className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000});
            }

            // end loading spinner
            this.endLoading();
        },

        // show messages by toast notifications
        setNotify({id, className, msg, time}) {
            const notify = {
                id: id || `${Date.now()}${this.notifications.length}`, className, msg, time
            };

            if (id) {
                (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

            } else {
                this.notifications.push(notify);
            }

            // remove this notification from the array after (n) seconds
            time && setTimeout(() => this.dismissNotify(notify.id), time);
        },

        // dismiss the notifications
        dismissNotify(id) {
            const index = this.notifications.findIndex(notify => notify.id === id);
            (index > -1) && this.notifications.splice(index, 1);
        },

        // add ajax loading spinner
        startLoading() {
            this.ajaxLoading.push(true);
        },

        // remove ajax loading spinner
        endLoading() {
            this.ajaxLoading.pop();
        }
    }, computed: {
        // flag to toggle ajax loading spinner
        isAjaxLoading() {
            return this.ajaxLoading.some(state => state === true);
        },

        // get the total years of experience
        experienceYears() {
            return new Date().getFullYear() - new Date(String(this.careerStartDate)).getFullYear();
        },

        // split experience items into chunks of 3 items
        experienceChunks() {
            return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
        },

        // filtered portfolio items
        filteredPortfolioItems() {
            const urlParams = new URLSearchParams(window.location.search);
            const tax = urlParams.get('tax');

            if (tax) {
                return this.portfolioItems;

            } else {
                return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
            }
        },

        // get single portfolio item
        getSinglePortfolioItem() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');

            return this.allPortfolioItems.find(item => item.id == id);
        },

        // get the total years of copyright
        copyrightDate() {
            const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
            return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
        }
    }, directives: {
        // clone directive
        clone: {
            mounted(el) {
                el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
            }
        },

        // add stagger delay to children elements
        staggerdelay: {
            mounted(el, binding) {
                [...el.children].forEach((child, i) => {
                    child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
                });
            }
        },

        // tooltip directive
        tooltip: {
            mounted(el, binding) {
                el.classList.add('has-tooltip');
                el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
            }
        }
    }
});
app.mount('#app');
