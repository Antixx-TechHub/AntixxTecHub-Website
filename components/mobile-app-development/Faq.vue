<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>FAQs for Mobile App Design, Development, Testing <span>Antixx TechHub</span></h2>

                        <div class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info" class="accordion-title">
                                        <i class="bx bx-plus"></i>
                                        Q1. How long does it take for a mobile app to be approved?
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
                                        Q2. Can you change features and functionalities after delivering the mobile app?
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
                                        Q3. Can you provide a fixed-price quote for mobile app development?
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
                                        Q4. Can you create apps for both Android and iOS?
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
                                        Q5. What kind of support do you provide during the mobile app development
                                        process?
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
            Q1: `The approval time depends upon the particular app store; however, you can take it to be at least one week. Android mobile apps are approved usually within a week; while iOS mobile apps take around 1-2 weeks.  As a turnkey mobile app development services provider agency, Antixx TechHub supports for quick and hassle-free approval.`,
            Q2: `Yes, we can. Our mobile app developers can even add pages also to your business mobile app as per your requirements.`,
            Q3: `As a prominent mobile app development agency, Antixx TechHub always believes in transparency. We understand your requirements and fix the agreed project specifications. Once we fix the mobile app specifications, we will give the least priced offer for mobile app development.`,
            Q4: `As being one of the top agencies for mobile app development, Antixx TechHub has time-tested capabilities to develop Android and iOS apps as per clients’ requirements. We offer mobile app maintenance services also.`,
            Q5: `We assign a dedicated project manager to address all your concerns swiftly. Your mobile app project manager is the primary point of contact. All of your concerns are professionally managed through our support portal with a priority.`,
        }
    }
}
</script>