<template>
    <div :class="['navbar-area bg-white', {'is-sticky': isSticky}]">
        <div class="striki-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/img/logo.png" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            
                            <li class="nav-item megamenu">
                                <a href="#" class="nav-link">
                                    Services <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">

                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/design.png" alt="image">
                                            Design
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Visual Design</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Web & App Design</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Logo & Brand Identity</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Art & Illustration</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Packaging & Covers</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Product & Characters Design</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/development.png" alt="image">
                                            Development
                                            <NuxtLink to="/software-development" class="nav-link">
                                                <p>Software Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Product Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Web Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>App Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Software Testing & QA</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Technology Consulting</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/marketing.png" alt="image">
                                            Online marketing
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SEO & SEM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Digital Marketing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Content Marketing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Email Marketing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Mobile Marketing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Website SEO Audit</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/technologies.png" alt="image">
                                            Technologies
                                            <NuxtLink to="/" class="nav-link">
                                                <p>AI & ML</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Automation</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Cloud Strategy</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Digital Commerce</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Data & Analytics</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Business Strategy</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/media.png" alt="image">
                                            Big Data Solutions
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Big Data Integration</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Big Data Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Big Data Analytics</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Content Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Cloud Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>System Management</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/staff-augmentation.png" alt="image">
                                            Custom Solutions
                                            <NuxtLink to="/" class="nav-link">
                                                <p>IT Consulting</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Advisory Services</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Development Teams</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Staff Augmentation</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Integration Services</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Implementation Services</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item megamenu">
                                <a href="#" class="nav-link">
                                    Product Expertise<i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/bmc.svg" alt="image">
                                            BMC
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Helix ITSM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>TrueSight</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Control-M</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>BladeLogic</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Smart Reporting</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Helix Discovery</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Helix Remedyforce</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Client Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Helix Digital Workplace</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/salesforce.svg" alt="image">
                                            Salesforce
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Sales Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Service Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Commerce Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Marketing Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Community Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Integration Cloud</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/servicenow.svg" alt="image">
                                            ServiceNow
                                            <NuxtLink to="/" class="nav-link">
                                                <p>IT Workflows</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Audit Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>IT Service Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Knowledge Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>IT Asset Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Configuration Compliance</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/sap.svg" alt="image">
                                            SAP
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP HANA</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP CRM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP ERP</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP HR</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP PLM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP Business Objects</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/aws.svg" alt="image">
                                            AWS
                                            <NuxtLink to="/" class="nav-link">
                                                <p>AWS Consulting</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>AWS Cloud Security</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>AWS Cloud Migration</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Serverless Computing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>AWS Market Enablement</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Managed Cloud Services</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/analytics.svg" alt="image">
                                            Analytics
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Power BI</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Qlik Sense</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>QlikView</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>Tableau</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p>SAP Analytics</p>
                                            </NuxtLink>
                                            <NuxtLink to="/" class="nav-link">
                                                <p></p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Explore & Learn <i class='bx bx-chevron-down'></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blogs" class="nav-link" exact>
                                            Blogs
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/insights" class="nav-link">
                                            Insights
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/case-studies" class="nav-link">
                                            Case Studies
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Company <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/our-history" class="nav-link">Our History
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/why-antixx-techhub-global" class="nav-link">Why Antixx TechHub
                                            Global
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/executive-leadership" class="nav-link">Executive Leadership
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/team" class="nav-link">Experts Team
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/careers" class="nav-link">Careers</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/faq" class="nav-link">FAQ's</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <div class="others-options">
                            <NuxtLink to="/contact" class="default-btn">
                                <i class="bx bxs-hot"></i>Get Started<span></span>
                            </NuxtLink>
                            <NuxtLink to="/" class="default-btn black-btn">
                                <i class="bx bx-log-in"></i>Our Products<span></span>
                            </NuxtLink>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarStyleOne',
    data(){
        return {
            isSticky: false,
        }
    },

    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>