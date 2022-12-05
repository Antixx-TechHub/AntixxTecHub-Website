<template>
    <div :class="['navbar-area bg-white p-relative', { 'is-sticky': isSticky }]">
        <div class="striki-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/img/icon/logo.svg" alt="logo" width="190" height="50">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item megamenu">
                                <a href="/" class="nav-link">
                                    Services <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item-services">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/development.png" alt="image">
                                            Design & Development
                                            <NuxtLink to="/branding" class="nav-link">
                                                <p>Branding</p>
                                            </NuxtLink>
                                            <NuxtLink to="/graphics-design" class="nav-link">
                                                <p>Graphics Design</p>
                                            </NuxtLink>
                                            <NuxtLink to="/software-development" class="nav-link">
                                                <p>Software Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/web-design-development" class="nav-link">
                                                <p>Web Design & Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/eCommerce-development" class="nav-link">
                                                <p>eCommerce Development</p>
                                            </NuxtLink>
                                            <NuxtLink to="/mobile-app-development" class="nav-link">
                                                <p>Mobile App Development</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item-services">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/marketing.png" alt="image">
                                            Online marketing
                                            <NuxtLink to="/seo-smm" class="nav-link">
                                                <p>SEO & SMM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/digital-marketing" class="nav-link">
                                                <p>Digital Marketing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/website-seo-audit" class="nav-link">
                                                <p>Website SEO Audit</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item-services">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/technologies.png" alt="image">
                                            Technologies
                                            <NuxtLink to="/ai-ml" class="nav-link">
                                                <p>AI & ML</p>
                                            </NuxtLink>
                                            <NuxtLink to="/automation" class="nav-link">
                                                <p>Automation</p>
                                            </NuxtLink>
                                            <NuxtLink to="/cloud-strategy" class="nav-link">
                                                <p>Cloud Strategy</p>
                                            </NuxtLink>
                                            <NuxtLink to="/big-data-solutions" class="nav-link">
                                                <p>Big Data Analytics</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item-services">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/staff-augmentation.png" alt="image">
                                            Custom Solutions
                                            <NuxtLink to="/it-consulting" class="nav-link">
                                                <p>IT Consulting</p>
                                            </NuxtLink>
                                            <NuxtLink to="/staff-augmentation" class="nav-link">
                                                <p>Staff Augmentation</p>
                                            </NuxtLink>
                                            <NuxtLink to="/integration-services" class="nav-link">
                                                <p>Integration Services</p>
                                            </NuxtLink>
                                            <NuxtLink to="/implementation-services" class="nav-link">
                                                <p>Implementation Services</p>
                                            </NuxtLink>
                                            <NuxtLink to="/software-testing-and-qa" class="nav-link">
                                                <p>Software Testing & QA</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item megamenu">
                                <a href="/" class="nav-link">
                                    Product Expertise<i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/bmc.svg" alt="image">
                                            BMC
                                            <NuxtLink to="/helix-itsm" class="nav-link">
                                                <p>Helix ITSM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/truesight" class="nav-link">
                                                <p>TrueSight</p>
                                            </NuxtLink>
                                            <NuxtLink to="/control-m" class="nav-link">
                                                <p>Control-M</p>
                                            </NuxtLink>
                                            <NuxtLink to="/bladelogic" class="nav-link">
                                                <p>BladeLogic</p>
                                            </NuxtLink>
                                            <NuxtLink to="/smart-reporting" class="nav-link">
                                                <p>Smart Reporting</p>
                                            </NuxtLink>
                                            <NuxtLink to="/helix-discovery" class="nav-link">
                                                <p>Helix Discovery</p>
                                            </NuxtLink>
                                            <NuxtLink to="/helix-remedyforce" class="nav-link">
                                                <p>Helix Remedyforce</p>
                                            </NuxtLink>
                                            <NuxtLink to="/client-management" class="nav-link">
                                                <p>Client Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/helix-digital-workplace" class="nav-link">
                                                <p>Helix Digital Workplace</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/salesforce.svg" alt="image">
                                            Salesforce
                                            <NuxtLink to="/sales-cloud" class="nav-link">
                                                <p>Sales Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/service-cloud" class="nav-link">
                                                <p>Service Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/commerce-cloud" class="nav-link">
                                                <p>Commerce Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/marketing-cloud" class="nav-link">
                                                <p>Marketing Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/community-cloud" class="nav-link">
                                                <p>Community Cloud</p>
                                            </NuxtLink>
                                            <NuxtLink to="/integration-cloud" class="nav-link">
                                                <p>Integration Cloud</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/servicenow.svg" alt="image">
                                            ServiceNow
                                            <NuxtLink to="/it-workflows" class="nav-link">
                                                <p>IT Workflows</p>
                                            </NuxtLink>
                                            <NuxtLink to="/audit-management" class="nav-link">
                                                <p>Audit Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/it-service-management" class="nav-link">
                                                <p>IT Service Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/knowledge-management" class="nav-link">
                                                <p>Knowledge Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/it-asset-management" class="nav-link">
                                                <p>IT Asset Management</p>
                                            </NuxtLink>
                                            <NuxtLink to="/configuration-compliance" class="nav-link">
                                                <p>Configuration Compliance</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/sap.svg" alt="image">
                                            SAP
                                            <NuxtLink to="/sap-hana" class="nav-link">
                                                <p>SAP HANA</p>
                                            </NuxtLink>
                                            <NuxtLink to="/sap-crm" class="nav-link">
                                                <p>SAP CRM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/sap-erp" class="nav-link">
                                                <p>SAP ERP</p>
                                            </NuxtLink>
                                            <NuxtLink to="/sap-hr" class="nav-link">
                                                <p>SAP HR</p>
                                            </NuxtLink>
                                            <NuxtLink to="/sap-plm" class="nav-link">
                                                <p>SAP PLM</p>
                                            </NuxtLink>
                                            <NuxtLink to="/sap-business-objects" class="nav-link">
                                                <p>SAP Business Objects</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/aws.svg" alt="image">
                                            AWS
                                            <NuxtLink to="/aws-consulting" class="nav-link">
                                                <p>AWS Consulting</p>
                                            </NuxtLink>
                                            <NuxtLink to="/aws-cloud-security" class="nav-link">
                                                <p>AWS Cloud Security</p>
                                            </NuxtLink>
                                            <NuxtLink to="/aws-cloud-migration" class="nav-link">
                                                <p>AWS Cloud Migration</p>
                                            </NuxtLink>
                                            <NuxtLink to="/serverless-computing" class="nav-link">
                                                <p>Serverless Computing</p>
                                            </NuxtLink>
                                            <NuxtLink to="/aws-market-enablement" class="nav-link">
                                                <p>AWS Market Enablement</p>
                                            </NuxtLink>
                                            <NuxtLink to="/managed-cloud-services" class="nav-link">
                                                <p>Managed Cloud Services</p>
                                            </NuxtLink>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link">
                                            <img src="~/assets/img/icon/analytics.svg" alt="image">
                                            Analytics
                                            <NuxtLink to="/powerbi" class="nav-link">
                                                <p>Power BI</p>
                                            </NuxtLink>
                                            <NuxtLink to="/qlik-sense" class="nav-link">
                                                <p>Qlik Sense</p>
                                            </NuxtLink>
                                            <NuxtLink to="/qlikview" class="nav-link">
                                                <p>QlikView</p>
                                            </NuxtLink>
                                            <NuxtLink to="/tableau" class="nav-link">
                                                <p>Tableau</p>
                                            </NuxtLink>
                                            <NuxtLink to="/sap-analytics" class="nav-link">
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
                                <a href="/" class="nav-link">
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
                                <a href="/" class="nav-link">
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
                                </ul>
                            </li>

                        </ul>

                        <div class="others-options">
                            <NuxtLink to="/contact-us" class="default-btn">
                                <i class="bx bxs-hot"></i>Contact Us<span></span>
                            </NuxtLink>
                            <NuxtLink to="/our-products" class="optional-btn">
                                <i class="bx bx-log-in"></i>Get Free Demo<span></span>
                            </NuxtLink>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>

        <div class="others-option-for-responsive">
            <div class="container">
                <div class="dot-menu">
                    <div class="inner">
                        <div class="circle circle-one"></div>
                        <div class="circle circle-two"></div>
                        <div class="circle circle-three"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarStyleTwo',
    data() {
        return {
            isSticky: false,
        }
    },

    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>