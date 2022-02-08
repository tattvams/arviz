(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("a84d522f-2115-44a0-adee-acf33b0ae8bc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a84d522f-2115-44a0-adee-acf33b0ae8bc' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"f3a9efc2-9aab-43b6-9bde-3060f6861604":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18081","type":"PanTool"},{"attributes":{"source":{"id":"18125"}},"id":"18130","type":"CDSView"},{"attributes":{},"id":"18134","type":"BasicTickFormatter"},{"attributes":{},"id":"18145","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"18066","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18088","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"18063"},0,0]]},"id":"18152","type":"GridBox"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18126","type":"Circle"},{"attributes":{"callback":null},"id":"18087","type":"HoverTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18120","type":"MultiLine"},{"attributes":{"overlay":{"id":"18089"}},"id":"18084","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18115","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18099","type":"FixedTicker"},{"attributes":{},"id":"18146","type":"Selection"},{"attributes":{"overlay":{"id":"18088"}},"id":"18082","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18116","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"GFZ2xwOwPsBFCx7Af88+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18144"},"selection_policy":{"id":"18143"}},"id":"18113","type":"ColumnDataSource"},{"attributes":{},"id":"18137","type":"BasicTickFormatter"},{"attributes":{},"id":"18085","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18128","type":"Circle"},{"attributes":{"tools":[{"id":"18080"},{"id":"18081"},{"id":"18082"},{"id":"18083"},{"id":"18084"},{"id":"18085"},{"id":"18086"},{"id":"18087"}]},"id":"18090","type":"Toolbar"},{"attributes":{"source":{"id":"18119"}},"id":"18124","type":"CDSView"},{"attributes":{"toolbars":[{"id":"18090"}],"tools":[{"id":"18080"},{"id":"18081"},{"id":"18082"},{"id":"18083"},{"id":"18084"},{"id":"18085"},{"id":"18086"},{"id":"18087"}]},"id":"18153","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"formatter":{"id":"18134"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18135"},"ticker":{"id":"18099"}},"id":"18076","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"18153"},"toolbar_location":"above"},"id":"18154","type":"ToolbarBox"},{"attributes":{},"id":"18068","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null},"id":"18132","type":"Title"},{"attributes":{},"id":"18083","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18104","type":"Scatter"},{"attributes":{},"id":"18135","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18101"},"glyph":{"id":"18102"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18104"},"nonselection_glyph":{"id":"18103"},"view":{"id":"18106"}},"id":"18105","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18102","type":"Scatter"},{"attributes":{},"id":"18148","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18103","type":"Scatter"},{"attributes":{"axis":{"id":"18076"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18079","type":"Grid"},{"attributes":{},"id":"18073","type":"BasicTicker"},{"attributes":{"axis":{"id":"18072"},"coordinates":null,"group":null,"ticker":null},"id":"18075","type":"Grid"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687557665243816},"id":"18131","type":"Span"},{"attributes":{"data":{"xs":[[-30.89650239461682,-30.724583739978986]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18142"},"selection_policy":{"id":"18141"}},"id":"18107","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18110","type":"MultiLine"},{"attributes":{"data":{"xs":[[-32.05285582175997,-29.32225950872766],[-32.23767500713157,-29.383411127464235]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18146"},"selection_policy":{"id":"18145"}},"id":"18119","type":"ColumnDataSource"},{"attributes":{},"id":"18147","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"18107"},"glyph":{"id":"18108"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18110"},"nonselection_glyph":{"id":"18109"},"view":{"id":"18112"}},"id":"18111","type":"GlyphRenderer"},{"attributes":{},"id":"18080","type":"ResetTool"},{"attributes":{"source":{"id":"18113"}},"id":"18118","type":"CDSView"},{"attributes":{},"id":"18142","type":"Selection"},{"attributes":{},"id":"18086","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18109","type":"MultiLine"},{"attributes":{},"id":"18141","type":"UnionRenderers"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18137"},"group":null,"major_label_policy":{"id":"18138"},"ticker":{"id":"18073"}},"id":"18072","type":"LinearAxis"},{"attributes":{},"id":"18143","type":"UnionRenderers"},{"attributes":{},"id":"18064","type":"DataRange1d"},{"attributes":{},"id":"18140","type":"Selection"},{"attributes":{"children":[{"id":"18154"},{"id":"18152"}]},"id":"18155","type":"Column"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18089","type":"PolyAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18121","type":"MultiLine"},{"attributes":{},"id":"18139","type":"UnionRenderers"},{"attributes":{"source":{"id":"18107"}},"id":"18112","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18148"},"selection_policy":{"id":"18147"}},"id":"18125","type":"ColumnDataSource"},{"attributes":{},"id":"18070","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18114","type":"Circle"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18108","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"RQsewH/PPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18140"},"selection_policy":{"id":"18139"}},"id":"18101","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18122","type":"MultiLine"},{"attributes":{"source":{"id":"18101"}},"id":"18106","type":"CDSView"},{"attributes":{},"id":"18144","type":"Selection"},{"attributes":{"below":[{"id":"18072"}],"center":[{"id":"18075"},{"id":"18079"}],"height":500,"left":[{"id":"18076"}],"output_backend":"webgl","renderers":[{"id":"18105"},{"id":"18111"},{"id":"18117"},{"id":"18123"},{"id":"18129"},{"id":"18131"}],"title":{"id":"18132"},"toolbar":{"id":"18090"},"toolbar_location":null,"width":500,"x_range":{"id":"18064"},"x_scale":{"id":"18068"},"y_range":{"id":"18066"},"y_scale":{"id":"18070"}},"id":"18063","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"18119"},"glyph":{"id":"18120"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18122"},"nonselection_glyph":{"id":"18121"},"view":{"id":"18124"}},"id":"18123","type":"GlyphRenderer"},{"attributes":{},"id":"18138","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18113"},"glyph":{"id":"18114"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18116"},"nonselection_glyph":{"id":"18115"},"view":{"id":"18118"}},"id":"18117","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"18125"},"glyph":{"id":"18126"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18128"},"nonselection_glyph":{"id":"18127"},"view":{"id":"18130"}},"id":"18129","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18127","type":"Circle"}],"root_ids":["18155"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"f3a9efc2-9aab-43b6-9bde-3060f6861604","root_ids":["18155"],"roots":{"18155":"a84d522f-2115-44a0-adee-acf33b0ae8bc"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();