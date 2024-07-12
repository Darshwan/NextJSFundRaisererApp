"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[4193,4433],{34193:(e,a,t)=>{t.r(a),t.d(a,{fetchOperationUsage:()=>o,fetchPlanFeatures:()=>l,fetchTemplateMessages:()=>u,getPlanFeatures:()=>p,getTemplateMessages:()=>g,getUsageForOperation:()=>c,trialBootstrap:()=>d,trialBootstrapQuery:()=>b,useGetOperationUsage:()=>y,useGetPlanFeatures:()=>w,useGetTemplateMessages:()=>h,useTrialBootstrap:()=>f});var _=t(45860),r=t(26663),n=t.n(r);const o=async({signal:e,operation:a})=>await _.postmanGateway.get({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/usage/operations/${a}`,service:"usage",signal:e}),s=["ai_generated_test_suites","ai_generated_tests","ai_generated_fql","api_repo_integration_staticip_enabled","public_link_governance_enabled","viewer_roles_enabled","true_up_allowed","custom_domain_enabled","user_groups_enabled","community_manager_role_allowed","sso_enabled","scim_enabled","iam_data_governance_allowed","apisec_custom_tokens_enabled","secret_scanner_dashboard_enabled","secret_scanner_workspace_visibility","pr_settings_access_allowed","monitor_resolution_enabled","monitor_region_selection_enabled","monitor_default_frequency","monitor_premium_cluster_enabled","scheduled_run_default_frequency","scheduled_run_resolution_enabled","can_opt_for_limited_duration_trial","onboarding_show_free_tier_migration_alert","show_true_up_billing_opt_in_banner","onboarding_show_upgrade_to_paid_alert","reporting_enabled","looker_reporting_enabled","super_admin_role_allowed","api_governance_feature_set_enabled","api_security_feature_set_enabled","api_governance_owasp_library_enabled","api_governance_security_overview_enabled","network_manager_role_enabled","is_paid_plan_growth","is_enterprise_plan_growth","private_team_workspaces_enabled","partner_workspace_enabled","isolated_partner_lead_role_management","partner_anonymization_enabled","enterprise_app_download_allowed","public_workspace_creation_enabled","publish_documentation_governance_enabled","limit_publish_documentation","audit_logs_enabled","audit_logs_retention_period","private_network_enabled","growth_experimentation_enabled","collection_run_usage_limit","guest_viewer_enabled","flows_enabled","flow_editor_role_allowed","enable_publish_customisations","documentation_editor_without_action_buttons","api_authentication_enabled","api_authentication_multiple_config_support","auto_upgrade_flow_editor","auto_approve_invite_suggestions_enabled","workspace_templates_enabled","templates_on_create_workspace_enabled","personal_workspaces_access_to_team_allowed","performance_run_usage_limit","api_key_governance_enabled","universal_tagging_enabled","search_api_definition","private_network_folder_nested_limit","restrict_team_workspace_creation","team_settings_workspace_management_allowed","api_builder_enabled","rewards_enabled"],i="billing-service",l=async({signal:e,userId:a})=>await _.postmanGateway.post({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/features/list?entityType=user&entityValue=${a}`,service:"features",data:{body:{features:s}},signal:e}),u=async({signal:e,templatePath:a})=>await _.postmanGateway.get({url:`${n().RUNTIME_ASSET_URL}${a}`,credentials:"omit",signal:e}),d=async({signal:e})=>await _.postmanGateway.get({url:`${n().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/trials/bootstrap",service:"billing",signal:e}),p=({signal:e,userId:a,enabled:t=!0})=>({queryKey:[i,a],queryFn:()=>l({signal:e,userId:a}),retry:!1,retryOnMount:!1,enabled:!!a&&t,useErrorBoundary:!1}),c=({signal:e,operation:a})=>({queryKey:[i,a],queryFn:()=>o({signal:e,operation:a}),retry:!1,retryOnMount:!1,enabled:!!a,useErrorBoundary:!1}),g=({signal:e,templatePath:a})=>({queryKey:[i,a],queryFn:()=>u({signal:e,templatePath:a}),retry:!1,retryOnMount:!1,enabled:!!a,useErrorBoundary:!1}),b=({signal:e})=>({queryKey:[i,"trial-bootstrap"],queryFn:()=>d({signal:e}),retry:!1,retryOnMount:!1,useErrorBoundary:!1});var m=t(97201);const y=e=>(0,m.useDataFetch)(c({operation:e})),w=(e,a)=>(0,m.useDataFetch)(p({userId:e,enabled:a})),h=e=>(0,m.useDataFetch)(g({templatePath:e})),f=()=>(0,m.useDataFetch)(b({}))}}]);
//# sourceMappingURL=4193.ed9579d647818144.js.map