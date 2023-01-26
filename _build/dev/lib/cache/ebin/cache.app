{application,cache,
             [{compile_env,[{cache,['Elixir.CacheWeb.Gettext'],error}]},
              {applications,[kernel,stdlib,elixir,logger,runtime_tools,
                             phoenix,phoenix_ecto,ecto_sql,postgrex,
                             phoenix_html,phoenix_live_reload,
                             phoenix_live_view,phoenix_live_dashboard,esbuild,
                             swoosh,telemetry_metrics,telemetry_poller,
                             gettext,jason,plug_cowboy,tailwind]},
              {description,"cache"},
              {modules,['Elixir.Cache','Elixir.Cache.Application',
                        'Elixir.Cache.Mailer','Elixir.Cache.Manager',
                        'Elixir.Cache.Repo','Elixir.Cache.Store',
                        'Elixir.Cache.Weather','Elixir.Cache.Worker',
                        'Elixir.Cache.WorkerVisor','Elixir.CacheWeb',
                        'Elixir.CacheWeb.Endpoint',
                        'Elixir.CacheWeb.ErrorHelpers',
                        'Elixir.CacheWeb.ErrorView','Elixir.CacheWeb.Gettext',
                        'Elixir.CacheWeb.LayoutView',
                        'Elixir.CacheWeb.PageController',
                        'Elixir.CacheWeb.PageView','Elixir.CacheWeb.Router',
                        'Elixir.CacheWeb.Router.Helpers',
                        'Elixir.CacheWeb.Telemetry']},
              {registered,[]},
              {vsn,"0.1.0"},
              {mod,{'Elixir.Cache.Application',[]}}]}.