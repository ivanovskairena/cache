sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"}],"modules":[{"group":"","id":"Cache","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:get_returns/0","id":"get_returns/0","title":"get_returns()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"get/1","id":"get/1","title":"get(key)"},{"anchor":"store/3","id":"store/3","title":"store(key, value, ttl \\\\ 3600)"}]}],"sections":[{"anchor":"module-feature","id":"Feature"},{"anchor":"module-use-case","id":"Use Case"},{"anchor":"module-test-run-utility","id":"Test-Run Utility"}],"title":"Cache"},{"group":"","id":"Cache.Mailer","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"deliver/2","id":"deliver/2","title":"deliver(email, config \\\\ [])"},{"anchor":"deliver!/2","id":"deliver!/2","title":"deliver!(email, config \\\\ [])"},{"anchor":"deliver_many/2","id":"deliver_many/2","title":"deliver_many(emails, config \\\\ [])"}]}],"sections":[],"title":"Cache.Mailer"},{"group":"","id":"Cache.Repo","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"aggregate/3","id":"aggregate/3","title":"aggregate(queryable, aggregate, opts \\\\ [])"},{"anchor":"aggregate/4","id":"aggregate/4","title":"aggregate(queryable, aggregate, field, opts)"},{"anchor":"all/2","id":"all/2","title":"all(queryable, opts \\\\ [])"},{"anchor":"checked_out?/0","id":"checked_out?/0","title":"checked_out?()"},{"anchor":"checkout/2","id":"checkout/2","title":"checkout(fun, opts \\\\ [])"},{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(opts)"},{"anchor":"config/0","id":"config/0","title":"config()"},{"anchor":"default_options/1","id":"default_options/1","title":"default_options(operation)"},{"anchor":"delete/2","id":"delete/2","title":"delete(struct, opts \\\\ [])"},{"anchor":"delete!/2","id":"delete!/2","title":"delete!(struct, opts \\\\ [])"},{"anchor":"delete_all/2","id":"delete_all/2","title":"delete_all(queryable, opts \\\\ [])"},{"anchor":"disconnect_all/2","id":"disconnect_all/2","title":"disconnect_all(interval, opts \\\\ [])"},{"anchor":"exists?/2","id":"exists?/2","title":"exists?(queryable, opts \\\\ [])"},{"anchor":"explain/3","id":"explain/3","title":"explain(operation, queryable, opts \\\\ [])"},{"anchor":"get/3","id":"get/3","title":"get(queryable, id, opts \\\\ [])"},{"anchor":"get!/3","id":"get!/3","title":"get!(queryable, id, opts \\\\ [])"},{"anchor":"get_by/3","id":"get_by/3","title":"get_by(queryable, clauses, opts \\\\ [])"},{"anchor":"get_by!/3","id":"get_by!/3","title":"get_by!(queryable, clauses, opts \\\\ [])"},{"anchor":"get_dynamic_repo/0","id":"get_dynamic_repo/0","title":"get_dynamic_repo()"},{"anchor":"in_transaction?/0","id":"in_transaction?/0","title":"in_transaction?()"},{"anchor":"insert/2","id":"insert/2","title":"insert(struct, opts \\\\ [])"},{"anchor":"insert!/2","id":"insert!/2","title":"insert!(struct, opts \\\\ [])"},{"anchor":"insert_all/3","id":"insert_all/3","title":"insert_all(schema_or_source, entries, opts \\\\ [])"},{"anchor":"insert_or_update/2","id":"insert_or_update/2","title":"insert_or_update(changeset, opts \\\\ [])"},{"anchor":"insert_or_update!/2","id":"insert_or_update!/2","title":"insert_or_update!(changeset, opts \\\\ [])"},{"anchor":"load/2","id":"load/2","title":"load(schema_or_types, data)"},{"anchor":"one/2","id":"one/2","title":"one(queryable, opts \\\\ [])"},{"anchor":"one!/2","id":"one!/2","title":"one!(queryable, opts \\\\ [])"},{"anchor":"preload/3","id":"preload/3","title":"preload(struct_or_structs_or_nil, preloads, opts \\\\ [])"},{"anchor":"prepare_query/3","id":"prepare_query/3","title":"prepare_query(operation, query, opts)"},{"anchor":"put_dynamic_repo/1","id":"put_dynamic_repo/1","title":"put_dynamic_repo(dynamic)"},{"anchor":"query/3","id":"query/3","title":"query(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"query!/3","id":"query!/3","title":"query!(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"query_many/3","id":"query_many/3","title":"query_many(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"query_many!/3","id":"query_many!/3","title":"query_many!(sql, params \\\\ [], opts \\\\ [])"},{"anchor":"reload/2","id":"reload/2","title":"reload(queryable, opts \\\\ [])"},{"anchor":"reload!/2","id":"reload!/2","title":"reload!(queryable, opts \\\\ [])"},{"anchor":"rollback/1","id":"rollback/1","title":"rollback(value)"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(opts \\\\ [])"},{"anchor":"stop/1","id":"stop/1","title":"stop(timeout \\\\ 5000)"},{"anchor":"stream/2","id":"stream/2","title":"stream(queryable, opts \\\\ [])"},{"anchor":"to_sql/2","id":"to_sql/2","title":"to_sql(operation, queryable)"},{"anchor":"transaction/2","id":"transaction/2","title":"transaction(fun_or_multi, opts \\\\ [])"},{"anchor":"update/2","id":"update/2","title":"update(struct, opts \\\\ [])"},{"anchor":"update!/2","id":"update!/2","title":"update!(struct, opts \\\\ [])"},{"anchor":"update_all/3","id":"update_all/3","title":"update_all(queryable, updates, opts \\\\ [])"}]}],"sections":[],"title":"Cache.Repo"},{"group":"","id":"CacheWeb","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__using__/1","id":"__using__/1","title":"__using__(which)"},{"anchor":"channel/0","id":"channel/0","title":"channel()"},{"anchor":"component/0","id":"component/0","title":"component()"},{"anchor":"controller/0","id":"controller/0","title":"controller()"},{"anchor":"live_component/0","id":"live_component/0","title":"live_component()"},{"anchor":"live_view/0","id":"live_view/0","title":"live_view()"},{"anchor":"router/0","id":"router/0","title":"router()"},{"anchor":"view/0","id":"view/0","title":"view()"}]}],"sections":[],"title":"CacheWeb"},{"group":"","id":"CacheWeb.Endpoint","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"broadcast/3","id":"broadcast/3","title":"broadcast(topic, event, msg)"},{"anchor":"broadcast!/3","id":"broadcast!/3","title":"broadcast!(topic, event, msg)"},{"anchor":"broadcast_from/4","id":"broadcast_from/4","title":"broadcast_from(from, topic, event, msg)"},{"anchor":"broadcast_from!/4","id":"broadcast_from!/4","title":"broadcast_from!(from, topic, event, msg)"},{"anchor":"call/2","id":"call/2","title":"call(conn, opts)"},{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(opts)"},{"anchor":"config/2","id":"config/2","title":"config(key, default \\\\ nil)"},{"anchor":"config_change/2","id":"config_change/2","title":"config_change(changed, removed)"},{"anchor":"host/0","id":"host/0","title":"host()"},{"anchor":"init/1","id":"init/1","title":"init(opts)"},{"anchor":"local_broadcast/3","id":"local_broadcast/3","title":"local_broadcast(topic, event, msg)"},{"anchor":"local_broadcast_from/4","id":"local_broadcast_from/4","title":"local_broadcast_from(from, topic, event, msg)"},{"anchor":"path/1","id":"path/1","title":"path(path)"},{"anchor":"script_name/0","id":"script_name/0","title":"script_name()"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(opts \\\\ [])"},{"anchor":"static_integrity/1","id":"static_integrity/1","title":"static_integrity(path)"},{"anchor":"static_lookup/1","id":"static_lookup/1","title":"static_lookup(path)"},{"anchor":"static_path/1","id":"static_path/1","title":"static_path(path)"},{"anchor":"static_url/0","id":"static_url/0","title":"static_url()"},{"anchor":"struct_url/0","id":"struct_url/0","title":"struct_url()"},{"anchor":"subscribe/2","id":"subscribe/2","title":"subscribe(topic, opts \\\\ [])"},{"anchor":"unsubscribe/1","id":"unsubscribe/1","title":"unsubscribe(topic)"},{"anchor":"url/0","id":"url/0","title":"url()"}]}],"sections":[],"title":"CacheWeb.Endpoint"},{"group":"","id":"CacheWeb.ErrorHelpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"error_tag/2","id":"error_tag/2","title":"error_tag(form, field)"},{"anchor":"translate_error/1","id":"translate_error/1","title":"translate_error(arg)"}]}],"sections":[],"title":"CacheWeb.ErrorHelpers"},{"group":"","id":"CacheWeb.ErrorView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0","title":"__resource__()"},{"anchor":"render/2","id":"render/2","title":"render(template, assigns \\\\ %{})"},{"anchor":"template_not_found/2","id":"template_not_found/2","title":"template_not_found(template, assigns)"}]}],"sections":[],"title":"CacheWeb.ErrorView"},{"group":"","id":"CacheWeb.Gettext","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"dgettext/3","id":"dgettext/3","title":"dgettext(domain, msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dgettext_noop/2","id":"dgettext_noop/2","title":"dgettext_noop(domain, msgid)"},{"anchor":"dngettext/5","id":"dngettext/5","title":"dngettext(domain, msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dngettext_noop/3","id":"dngettext_noop/3","title":"dngettext_noop(domain, msgid, msgid_plural)"},{"anchor":"dpgettext/4","id":"dpgettext/4","title":"dpgettext(domain, msgctxt, msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dpgettext_noop/3","id":"dpgettext_noop/3","title":"dpgettext_noop(domain, msgctxt, msgid)"},{"anchor":"dpngettext/6","id":"dpngettext/6","title":"dpngettext(domain, msgctxt, msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"dpngettext_noop/4","id":"dpngettext_noop/4","title":"dpngettext_noop(domain, msgctxt, msgid, msgid_plural)"},{"anchor":"gettext/2","id":"gettext/2","title":"gettext(msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"gettext_comment/1","id":"gettext_comment/1","title":"gettext_comment(comment)"},{"anchor":"gettext_noop/1","id":"gettext_noop/1","title":"gettext_noop(msgid)"},{"anchor":"handle_missing_bindings/2","id":"handle_missing_bindings/2","title":"handle_missing_bindings(exception, incomplete)"},{"anchor":"handle_missing_plural_translation/7","id":"handle_missing_plural_translation/7","title":"handle_missing_plural_translation(locale, domain, msgctxt, msgid, msgid_plural, n, bindings)"},{"anchor":"handle_missing_translation/5","id":"handle_missing_translation/5","title":"handle_missing_translation(locale, domain, msgctxt, msgid, bindings)"},{"anchor":"lgettext/5","id":"lgettext/5","title":"lgettext(locale, domain, msgctxt \\\\ nil, msgid, bindings)"},{"anchor":"lngettext/7","id":"lngettext/7","title":"lngettext(locale, domain, msgctxt \\\\ nil, msgid, msgid_plural, n, bindings)"},{"anchor":"ngettext/4","id":"ngettext/4","title":"ngettext(msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"ngettext_noop/2","id":"ngettext_noop/2","title":"ngettext_noop(msgid, msgid_plural)"},{"anchor":"pgettext/3","id":"pgettext/3","title":"pgettext(msgctxt, msgid, bindings \\\\ Macro.escape(%{}))"},{"anchor":"pgettext_noop/2","id":"pgettext_noop/2","title":"pgettext_noop(msgid, context)"},{"anchor":"pngettext/5","id":"pngettext/5","title":"pngettext(msgctxt, msgid, msgid_plural, n, bindings \\\\ Macro.escape(%{}))"},{"anchor":"pngettext_noop/3","id":"pngettext_noop/3","title":"pngettext_noop(msgctxt, msgid, msgid_plural)"}]}],"sections":[],"title":"CacheWeb.Gettext"},{"group":"","id":"CacheWeb.LayoutView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0","title":"__resource__()"},{"anchor":"app.html/1","id":"app.html/1","title":"app.html(assigns)"},{"anchor":"live.html/1","id":"live.html/1","title":"live.html(assigns)"},{"anchor":"render/2","id":"render/2","title":"render(template, assigns \\\\ %{})"},{"anchor":"root.html/1","id":"root.html/1","title":"root.html(assigns)"},{"anchor":"template_not_found/2","id":"template_not_found/2","title":"template_not_found(template, assigns)"}]}],"sections":[],"title":"CacheWeb.LayoutView"},{"group":"","id":"CacheWeb.PageController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"index/2","id":"index/2","title":"index(conn, params)"},{"anchor":"manager/2","id":"manager/2","title":"manager(conn, params)"},{"anchor":"store/2","id":"store/2","title":"store(conn, params)"},{"anchor":"weather/2","id":"weather/2","title":"weather(conn, params)"},{"anchor":"worker/2","id":"worker/2","title":"worker(conn, params)"},{"anchor":"worker_visor/2","id":"worker_visor/2","title":"worker_visor(conn, params)"}]}],"sections":[],"title":"CacheWeb.PageController"},{"group":"","id":"CacheWeb.PageView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0","title":"__resource__()"},{"anchor":"index.html/1","id":"index.html/1","title":"index.html(assigns)"},{"anchor":"manager.html/1","id":"manager.html/1","title":"manager.html(assigns)"},{"anchor":"render/2","id":"render/2","title":"render(template, assigns \\\\ %{})"},{"anchor":"store.html/1","id":"store.html/1","title":"store.html(assigns)"},{"anchor":"template_not_found/2","id":"template_not_found/2","title":"template_not_found(template, assigns)"},{"anchor":"weather.html/1","id":"weather.html/1","title":"weather.html(assigns)"},{"anchor":"worker.html/1","id":"worker.html/1","title":"worker.html(assigns)"},{"anchor":"worker_visor.html/1","id":"worker_visor.html/1","title":"worker_visor.html(assigns)"}]}],"sections":[],"title":"CacheWeb.PageView"},{"group":"","id":"CacheWeb.Router","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"api/2","id":"api/2","title":"api(conn, _)"},{"anchor":"browser/2","id":"browser/2","title":"browser(conn, _)"},{"anchor":"call/2","id":"call/2","title":"call(conn, opts)"},{"anchor":"init/1","id":"init/1","title":"init(opts)"}]}],"sections":[],"title":"CacheWeb.Router"},{"group":"","id":"CacheWeb.Router.Helpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"live_dashboard_path/2","id":"live_dashboard_path/2","title":"live_dashboard_path(conn_or_endpoint, action)"},{"anchor":"live_dashboard_path/3","id":"live_dashboard_path/3","title":"live_dashboard_path(conn_or_endpoint, action, params)"},{"anchor":"live_dashboard_path/4","id":"live_dashboard_path/4","title":"live_dashboard_path(conn_or_endpoint, action, page, params)"},{"anchor":"live_dashboard_path/5","id":"live_dashboard_path/5","title":"live_dashboard_path(conn_or_endpoint, action, node, page, params)"},{"anchor":"live_dashboard_url/2","id":"live_dashboard_url/2","title":"live_dashboard_url(conn_or_endpoint, action)"},{"anchor":"live_dashboard_url/3","id":"live_dashboard_url/3","title":"live_dashboard_url(conn_or_endpoint, action, params)"},{"anchor":"live_dashboard_url/4","id":"live_dashboard_url/4","title":"live_dashboard_url(conn_or_endpoint, action, page, params)"},{"anchor":"live_dashboard_url/5","id":"live_dashboard_url/5","title":"live_dashboard_url(conn_or_endpoint, action, node, page, params)"},{"anchor":"page_path/2","id":"page_path/2","title":"page_path(conn_or_endpoint, action)"},{"anchor":"page_path/3","id":"page_path/3","title":"page_path(conn_or_endpoint, action, params)"},{"anchor":"page_url/2","id":"page_url/2","title":"page_url(conn_or_endpoint, action)"},{"anchor":"page_url/3","id":"page_url/3","title":"page_url(conn_or_endpoint, action, params)"},{"anchor":"path/2","id":"path/2","title":"path(data, path)"},{"anchor":"static_integrity/2","id":"static_integrity/2","title":"static_integrity(endpoint, path)"},{"anchor":"static_path/2","id":"static_path/2","title":"static_path(conn, path)"},{"anchor":"static_url/2","id":"static_url/2","title":"static_url(conn, path)"},{"anchor":"url/1","id":"url/1","title":"url(data)"}]}],"sections":[],"title":"CacheWeb.Router.Helpers"},{"group":"","id":"CacheWeb.Telemetry","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"metrics/0","id":"metrics/0","title":"metrics()"},{"anchor":"start_link/1","id":"start_link/1","title":"start_link(arg)"}]}],"sections":[],"title":"CacheWeb.Telemetry"}],"tasks":[]}