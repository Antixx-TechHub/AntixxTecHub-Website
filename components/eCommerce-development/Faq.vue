<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Ecommerce Design, Development, Maintenance, & Management <span>Antixx
                                TechHub</span></h2>

                        <div class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q1. What are the must-have requirements and essential features for a start-up
                                        eCommerce business?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q1 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q2. What are the common mistakes that an eCommerce business owner often commits?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q2 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-3 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q3. What are different types of eCommerce development Antixx TechHub do?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q3 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-4 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q4. What are the eCommerce management services do you offer?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q4 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-5 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q5. What are the common challenges for start-up eCommerce businesses?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q5 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-6 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q6. How much do you charge for graphic design services? What is the cost of
                                        graphic design packages?
                                    </b-button>
                                </b-card-header>

                                <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ Q6 }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="faq-image">
                        <img src="~/assets/img/faq-img1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data() {
        return {
            Q1: `Content management system, professional products listing, email marketing tools, social media integration third-party shipment integration, flexible return policy, customizable themes, interactive UI, engaging UX are some must-have requirements and essential features for any eCommerce business.`,
            Q2: `The less or no prior experience in eCommerce often leads the eCommerce store owners to commit different mistakes unknowingly or because of wrong guidance. Some of the often committed mistakes by eCommerce owners are- less marketing research, doing everything by self, less focus on business development, failing to interact with customers, choosing an imperfect eCommerce platform, etc.`,
            Q3: `We have experience and capabilities in developing all types of eCommerce developments:
• Consumer-to-Consumer (C2C)
• Business-to-Business (B2B)
• Business-to-Consumer (B2C)
• Business-to-Administration (B2A)
• Consumer-to-Business (C2B)
• Consumer-to-Administration (C2A)`,
            Q4: `As being the user-friendly leading eCommerce development system, Antixx TechHub offers a range of eCommerce management support services:
• Importing new categories, products, brands, and suppliers
• Products listing and inventory management 
• Regular security checks
• SEO upgrades
• Bugs removal 
• Google Analytics reporting 
• Integration with top product directories like Amazon, Google Products, and others
• Social Media Marketing (SMM)`,
            Q5: `Facing and managing challenges are the parts of eCommerce business management. Evolving technologies, changing buyers’ behavior, increasing expectations, emergence of new competitors, introduction f new regulations, etc will continue to put new challenges. Some key challenges for eCommerce businesses are- 
• Converting shoppers into buyers 
• Competitive pricing
• Faster product listing 
• Attracting potential customers
• Managing competition
• Cyber & data security management`,
        }
    }
}
</script>