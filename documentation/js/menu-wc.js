'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">2.second-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' : 'data-bs-target="#xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' :
                                            'id="xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BaseModule-8629a13c79e011036a3d3f407bad9f80c0a42caa09a4881d77c784ddcde65ebe6f6e24ca81129789a6fb79ec019d10a4074d775eb6cd7f4ed94154c1fbb05161"' : 'data-bs-target="#xs-components-links-module-BaseModule-8629a13c79e011036a3d3f407bad9f80c0a42caa09a4881d77c784ddcde65ebe6f6e24ca81129789a6fb79ec019d10a4074d775eb6cd7f4ed94154c1fbb05161"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-8629a13c79e011036a3d3f407bad9f80c0a42caa09a4881d77c784ddcde65ebe6f6e24ca81129789a6fb79ec019d10a4074d775eb6cd7f4ed94154c1fbb05161"' :
                                            'id="xs-components-links-module-BaseModule-8629a13c79e011036a3d3f407bad9f80c0a42caa09a4881d77c784ddcde65ebe6f6e24ca81129789a6fb79ec019d10a4074d775eb6cd7f4ed94154c1fbb05161"' }>
                                            <li class="link">
                                                <a href="components/BaseButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-6f01b2097a67d1d002e54dea8f44247c3fe16095da6636137cd8d0827976063f9d04cadba2fb058df26b75baf4375252e8028a2237ad9b7a5c006463e85cab54"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-6f01b2097a67d1d002e54dea8f44247c3fe16095da6636137cd8d0827976063f9d04cadba2fb058df26b75baf4375252e8028a2237ad9b7a5c006463e85cab54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-6f01b2097a67d1d002e54dea8f44247c3fe16095da6636137cd8d0827976063f9d04cadba2fb058df26b75baf4375252e8028a2237ad9b7a5c006463e85cab54"' :
                                        'id="xs-injectables-links-module-CoreModule-6f01b2097a67d1d002e54dea8f44247c3fe16095da6636137cd8d0827976063f9d04cadba2fb058df26b75baf4375252e8028a2237ad9b7a5c006463e85cab54"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MessageModule-84eff7edf3a2b8cfb42f9ade2cf1a01c92f55cbb078ed1b0fe3d0234cd564ffe6ca9ff863dbcb9af272cb403c562b8283849d6acad23ace4a081ab81960b3c47"' : 'data-bs-target="#xs-components-links-module-MessageModule-84eff7edf3a2b8cfb42f9ade2cf1a01c92f55cbb078ed1b0fe3d0234cd564ffe6ca9ff863dbcb9af272cb403c562b8283849d6acad23ace4a081ab81960b3c47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessageModule-84eff7edf3a2b8cfb42f9ade2cf1a01c92f55cbb078ed1b0fe3d0234cd564ffe6ca9ff863dbcb9af272cb403c562b8283849d6acad23ace4a081ab81960b3c47"' :
                                            'id="xs-components-links-module-MessageModule-84eff7edf3a2b8cfb42f9ade2cf1a01c92f55cbb078ed1b0fe3d0234cd564ffe6ca9ff863dbcb9af272cb403c562b8283849d6acad23ace4a081ab81960b3c47"' }>
                                            <li class="link">
                                                <a href="components/MessageFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgExportModule.html" data-type="entity-link" >NgExportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotificationModule-0ad04a3d45b32c62675991880bfcf01fdbc79e9ea04019b8a8983ee766590cc90dd40f7c402e6d467869e2519c211200b2d1e5c48afe6077bcbcd5f4a255d00c"' : 'data-bs-target="#xs-components-links-module-NotificationModule-0ad04a3d45b32c62675991880bfcf01fdbc79e9ea04019b8a8983ee766590cc90dd40f7c402e6d467869e2519c211200b2d1e5c48afe6077bcbcd5f4a255d00c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationModule-0ad04a3d45b32c62675991880bfcf01fdbc79e9ea04019b8a8983ee766590cc90dd40f7c402e6d467869e2519c211200b2d1e5c48afe6077bcbcd5f4a255d00c"' :
                                            'id="xs-components-links-module-NotificationModule-0ad04a3d45b32c62675991880bfcf01fdbc79e9ea04019b8a8983ee766590cc90dd40f7c402e6d467869e2519c211200b2d1e5c48afe6077bcbcd5f4a255d00c"' }>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-170aa3e635fd3cce76f40fa4d0ca88a5f875df3ba50fc432b8723e61fbaab228bb0eaeca26b1765d2c4ed49bc5943ce9d1c453f246c400b3b7864658ee9dc0dc"' : 'data-bs-target="#xs-components-links-module-UserModule-170aa3e635fd3cce76f40fa4d0ca88a5f875df3ba50fc432b8723e61fbaab228bb0eaeca26b1765d2c4ed49bc5943ce9d1c453f246c400b3b7864658ee9dc0dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-170aa3e635fd3cce76f40fa4d0ca88a5f875df3ba50fc432b8723e61fbaab228bb0eaeca26b1765d2c4ed49bc5943ce9d1c453f246c400b3b7864658ee9dc0dc"' :
                                            'id="xs-components-links-module-UserModule-170aa3e635fd3cce76f40fa4d0ca88a5f875df3ba50fc432b8723e61fbaab228bb0eaeca26b1765d2c4ed49bc5943ce9d1c453f246c400b3b7864658ee9dc0dc"' }>
                                            <li class="link">
                                                <a href="components/UserActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRegisterFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegisterFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewModule.html" data-type="entity-link" >ViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewModule-f1a93e7437c21113b41aa75298ad9971fb81ecc49479bf528f352391840c39e9fcb04aa2d33bac1dc3c533d53dc47543678fc5a848c892d2095e59ddc86bb39e"' : 'data-bs-target="#xs-components-links-module-ViewModule-f1a93e7437c21113b41aa75298ad9971fb81ecc49479bf528f352391840c39e9fcb04aa2d33bac1dc3c533d53dc47543678fc5a848c892d2095e59ddc86bb39e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewModule-f1a93e7437c21113b41aa75298ad9971fb81ecc49479bf528f352391840c39e9fcb04aa2d33bac1dc3c533d53dc47543678fc5a848c892d2095e59ddc86bb39e"' :
                                            'id="xs-components-links-module-ViewModule-f1a93e7437c21113b41aa75298ad9971fb81ecc49479bf528f352391840c39e9fcb04aa2d33bac1dc3c533d53dc47543678fc5a848c892d2095e59ddc86bb39e"' }>
                                            <li class="link">
                                                <a href="components/ViewHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewRoutingModule.html" data-type="entity-link" >ViewRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/MessageListItemComponent.html" data-type="entity-link" >MessageListItemComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link" >EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppEvent.html" data-type="entity-link" >AppEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrudService.html" data-type="entity-link" >CrudService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReactiveService.html" data-type="entity-link" >ReactiveService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});