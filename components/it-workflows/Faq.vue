<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>Get to know about <span>Striki</span></h2>

                        <div class="accordion" role="tablist">
                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-1 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        What access do I have on the free plan?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-1" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-2 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        What access do I have on a free trial?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-2" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-3 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        Does the price go up as my team gets larger?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-3" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-4 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        How can I cancel/pause my subscription?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-4" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card 
                                no-body 
                                class="accordion-item"
                            >
                                <b-card-header 
                                    header-tag="header" 
                                    class="p-1" 
                                    role="tab"
                                >
                                    <b-button 
                                        block 
                                        v-b-toggle.accordion-5 
                                        variant="info"
                                        class="accordion-title"
                                    >
                                        <i class="bx bx-plus"></i>
                                        Can I pay via an invoice?
                                    </b-button>
                                </b-card-header>

                                <b-collapse 
                                    id="accordion-5" 
                                    visible 
                                    accordion="my-accordion" 
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text class="accordion-content">
                                            {{ text }}
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
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        }
    }
}
</script>