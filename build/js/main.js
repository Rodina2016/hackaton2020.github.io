function openMobMenu(){var e=document.getElementById("open-menu"),t=document.getElementById("menu"),s=document.getElementById("header-menu"),o=document.body;e.onclick=function(){this.classList.contains("active")?(this.classList.remove("active"),t.classList.remove("active"),s.classList.remove("active"),o.classList.remove("unscroll")):(this.classList.add("active"),t.classList.add("active"),s.classList.add("active"),o.classList.add("unscroll"))}}function sendForm(){const e=$(".formAction"),t=e.find("input, textarea");t.keyup(function(){const e=$(this),t=e.closest(".form__row");t.hasClass("error")&&t.removeClass("error")}),e.each(function(e,t){t=$(t);const s=t.find('button[type="submit"]');"FORM"===t.prop("tagName")&&t.submit(function(e){if(e.preventDefault(),s.attr("disabled",!0),!validateForm(t))return void s.attr("disabled",!1);new FormData(this);return $.ajax({}),!1})})}function validateForm(e){const t=e.find(".req");var s=!0;return t.each(function(e,t){const o=$(t);if("email"==o.attr("type")){const n=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]{1,20}\.[a-zA-Z0-9-]+/;s=!!n.test(o.val())&&s,n.test(o.val())||o.closest(".form__row").addClass("error")}else o.val().length<1&&(o.closest(".form__row").addClass("error"),s=!1)}),s}$(document).ready(function(){openMobMenu(),sendForm(),$(".owl-carousel-four").owlCarousel({responsive:{0:{items:1,dots:!0,nav:!1},567:{items:2},768:{items:2},960:{items:3},1280:{items:4}},nav:!0,dots:!1,margin:32,navText:['<svg class=\'carousel__icon\' width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z"/>\n</svg>','<svg class=\'carousel__icon\' width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z"/>\n</svg>']}),$(".owl-carousel-two").owlCarousel({responsive:{0:{items:1,dots:!0,nav:!1},567:{items:1},768:{items:2},960:{items:2},1280:{items:2}},nav:!0,dots:!1,margin:32,navText:['<svg class=\'carousel__icon\' width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z"/>\n</svg>','<svg class=\'carousel__icon\' width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z"/>\n</svg>']}),$(".select").select2({selectOnClose:!0,width:"100%"})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsib3Blbk1vYk1lbnUiLCJidXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsImhlYWRlciIsImJvZHkiLCJvbmNsaWNrIiwidGhpcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwic2VuZEZvcm0iLCJmb3JtRmVlZGJhY2tBY3Rpb24iLCIkIiwiZmllbGRzIiwiZmluZCIsImtleXVwIiwic2VsZiIsImZpZWxkIiwiY2xvc2VzdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50Iiwic3VibWl0QnRuIiwicHJvcCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF0dHIiLCJ2YWxpZGF0ZUZvcm0iLCJGb3JtRGF0YSIsImFqYXgiLCJmb3JtIiwiaXNWYWxpZCIsImkiLCJmaWVsZEVsIiwiZW1haWxSZWdFeHAiLCJ0ZXN0IiwidmFsIiwiYWRkQ2xhc3MiLCJsZW5ndGgiLCJyZWFkeSIsIm93bENhcm91c2VsIiwicmVzcG9uc2l2ZSIsIjAiLCJpdGVtcyIsImRvdHMiLCJuYXYiLCI1NjciLCI3NjgiLCI5NjAiLCIxMjgwIiwibWFyZ2luIiwibmF2VGV4dCIsInNlbGVjdDIiLCJzZWxlY3RPbkNsb3NlIiwid2lkdGgiXSwibWFwcGluZ3MiOiJBQStFQSxRQUFTQSxlQUNMLEdBQUlDLEdBQVNDLFNBQVNDLGVBQWUsYUFDakNDLEVBQU9GLFNBQVNDLGVBQWUsUUFDL0JFLEVBQVNILFNBQVNDLGVBQWUsZUFDakNHLEVBQU9KLFNBQVNJLElBRXBCTCxHQUFPTSxRQUFVLFdBQ1ZDLEtBQUtDLFVBQVVDLFNBQVMsV0FDdkJGLEtBQUtDLFVBQVVFLE9BQU8sVUFDdEJQLEVBQUtLLFVBQVVFLE9BQU8sVUFDdEJOLEVBQU9JLFVBQVVFLE9BQU8sVUFDeEJMLEVBQUtHLFVBQVVFLE9BQU8sY0FHdEJILEtBQUtDLFVBQVVHLElBQUksVUFDbkJSLEVBQUtLLFVBQVVHLElBQUksVUFDbkJQLEVBQU9JLFVBQVVHLElBQUksVUFDckJOLEVBQUtHLFVBQVVHLElBQUksY0FPL0IsUUFBU0MsWUFDTCxLQUFNQyxHQUFxQkMsRUFBRSxlQUN2QkMsRUFBU0YsRUFBbUJHLEtBQUssa0JBRXZDRCxHQUFPRSxNQUFNLFdBQ1QsS0FBTUMsR0FBT0osRUFBRVAsTUFDVFksRUFBUUQsRUFBS0UsUUFBUSxhQUV2QkQsR0FBTUUsU0FBUyxVQUNmRixFQUFNRyxZQUFZLFdBTTFCVCxFQUFtQlUsS0FBSyxTQUFTQyxFQUFPQyxHQUNwQ0EsRUFBVVgsRUFBRVcsRUFDWixNQUFNQyxHQUFZRCxFQUFRVCxLQUFLLHdCQUVDLFVBQTVCUyxFQUFRRSxLQUFLLFlBQ2JGLEVBQVFHLE9BQU8sU0FBU0MsR0FJcEIsR0FIQUEsRUFBRUMsaUJBQ0ZKLEVBQVVLLEtBQUssWUFBWSxJQUV0QkMsYUFBYVAsR0FFZCxXQURBQyxHQUFVSyxLQUFLLFlBQVksRUFHcEIsSUFBSUUsVUFBUzFCLEtBS3hCLE9BSEFPLEdBQUVvQixVQUdLLE1BT3ZCLFFBQVNGLGNBQWFHLEdBQ2xCLEtBQU1wQixHQUFTb0IsRUFBS25CLEtBQUssT0FDekIsSUFBS29CLElBQVUsQ0FtQmYsT0FqQkFyQixHQUFPUSxLQUFLLFNBQVNjLEVBQUdDLEdBQ3BCLEtBQU1uQixHQUFRTCxFQUFFd0IsRUFFaEIsSUFBMEIsU0FBdEJuQixFQUFNWSxLQUFLLFFBQW9CLENBQy9CLEtBQU1RLEdBQWMscURBRXBCSCxLQUFVRyxFQUFZQyxLQUFLckIsRUFBTXNCLFFBQVNMLEVBQ3RDRyxFQUFZQyxLQUFLckIsRUFBTXNCLFFBQ3ZCdEIsRUFBTUMsUUFBUSxjQUFjc0IsU0FBUyxhQUdwQ3ZCLEdBQU1zQixNQUFNRSxPQUFTLElBQzFCeEIsRUFBTUMsUUFBUSxjQUFjc0IsU0FBUyxTQUNyQ04sR0FBVSxLQUlYQSxFQWpLWHRCLEVBQUViLFVBQVUyQyxNQUFNLFdBQ2Q3QyxjQUNBYSxXQUVBRSxFQUFFLHNCQUFzQitCLGFBQ3BCQyxZQUNJQyxHQUNJQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsS0FBSyxHQUVUQyxLQUNJSCxNQUFNLEdBRVZJLEtBQ0lKLE1BQU0sR0FFVkssS0FDSUwsTUFBTSxHQUVWTSxNQUNJTixNQUFNLElBR2RFLEtBQUssRUFDTEQsTUFBTSxFQUNOTSxPQUFRLEdBQ1JDLFNBQ0ssc1FBR0QseVFBSVIxQyxFQUFFLHFCQUFxQitCLGFBQ25CQyxZQUNJQyxHQUNJQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsS0FBSyxHQUVUQyxLQUNJSCxNQUFNLEdBRVZJLEtBQ0lKLE1BQU0sR0FFVkssS0FDSUwsTUFBTSxHQUVWTSxNQUNJTixNQUFNLElBR2RFLEtBQUssRUFDTEQsTUFBTSxFQUNOTSxPQUFRLEdBQ1JDLFNBQ0ssc1FBR0cseVFBS1oxQyxFQUFFLFdBQVcyQyxTQUNUQyxlQUFlLEVBQ2ZDLE1BQU8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEN1c3RvbVxyXG4gKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIG9wZW5Nb2JNZW51KCk7XHJcbiAgICBzZW5kRm9ybSgpO1xyXG5cclxuICAgICQoXCIub3dsLWNhcm91c2VsLWZvdXJcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTY3OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5NjA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI4MDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo0LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAzMixcclxuICAgICAgICBuYXZUZXh0OlxyXG4gICAgICAgICAgICBbXCI8c3ZnIGNsYXNzPSdjYXJvdXNlbF9faWNvbicgd2lkdGg9XFxcIjEwXFxcIiBoZWlnaHQ9XFxcIjE1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAgMTVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxuXCIgK1xyXG4gICAgICAgICAgICBcIjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMS44OCAwTDAgMS43MTc5M0w2LjEwNjY3IDcuMzEwMzRMMCAxMi45MDI4TDEuODggMTQuNjIwN0w5Ljg4IDcuMzEwMzRMMS44OCAwWlxcXCIvPlxcblwiICtcclxuICAgICAgICAgICAgXCI8L3N2Zz5cIixcclxuICAgICAgICAgICAgXCI8c3ZnIGNsYXNzPSdjYXJvdXNlbF9faWNvbicgd2lkdGg9XFxcIjEwXFxcIiBoZWlnaHQ9XFxcIjE1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAgMTVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxuXCIgK1xyXG4gICAgICAgICAgICBcIjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMS44OCAwTDAgMS43MTc5M0w2LjEwNjY3IDcuMzEwMzRMMCAxMi45MDI4TDEuODggMTQuNjIwN0w5Ljg4IDcuMzEwMzRMMS44OCAwWlxcXCIvPlxcblwiICtcclxuICAgICAgICAgICAgXCI8L3N2Zz5cIl0sXHJcbiAgICB9KTtcclxuICAgICQoXCIub3dsLWNhcm91c2VsLXR3b1wiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1Njc6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk2MDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjgwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBtYXJnaW46IDMyLFxyXG4gICAgICAgIG5hdlRleHQ6XHJcbiAgICAgICAgICAgIFtcIjxzdmcgY2xhc3M9J2Nhcm91c2VsX19pY29uJyB3aWR0aD1cXFwiMTBcXFwiIGhlaWdodD1cXFwiMTVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMCAxNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiPHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xLjg4IDBMMCAxLjcxNzkzTDYuMTA2NjcgNy4zMTAzNEwwIDEyLjkwMjhMMS44OCAxNC42MjA3TDkuODggNy4zMTAzNEwxLjg4IDBaXFxcIi8+XFxuXCIgK1xyXG4gICAgICAgICAgICBcIjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgXCI8c3ZnIGNsYXNzPSdjYXJvdXNlbF9faWNvbicgd2lkdGg9XFxcIjEwXFxcIiBoZWlnaHQ9XFxcIjE1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAgMTVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEuODggMEwwIDEuNzE3OTNMNi4xMDY2NyA3LjMxMDM0TDAgMTIuOTAyOEwxLjg4IDE0LjYyMDdMOS44OCA3LjMxMDM0TDEuODggMFpcXFwiLz5cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjwvc3ZnPlwiXSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2VsZWN0XCIpLnNlbGVjdDIoe1xyXG4gICAgICAgIHNlbGVjdE9uQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2JNZW51KCkge1xyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLW1lbnUnKTtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW1lbnUnKTtcclxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgndW5zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Vuc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbmRGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUZlZWRiYWNrQWN0aW9uID0gJCgnLmZvcm1BY3Rpb24nKTtcclxuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm1GZWVkYmFja0FjdGlvbi5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKTtcclxuXHJcbiAgICBmaWVsZHMua2V5dXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBzZWxmLmNsb3Nlc3QoJy5mb3JtX19yb3cnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLmhhc0NsYXNzKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZm9ybUZlZWRiYWNrQWN0aW9uLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpe1xyXG4gICAgICAgIGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGVsZW1lbnQuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQucHJvcCgndGFnTmFtZScpID09PSAnRk9STScpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZvcm0oZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdG4uYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZm9ybSkge1xyXG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5maW5kKCcucmVxJyk7XHJcbiAgICB2YXIgIGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGZpZWxkcy5lYWNoKGZ1bmN0aW9uKGksIGZpZWxkRWwpe1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gJChmaWVsZEVsKTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLmF0dHIoJ3R5cGUnKSA9PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUmVnRXhwID0gL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXXsxLDIwfVxcLlthLXpBLVowLTktXSsvO1xyXG5cclxuICAgICAgICAgICAgaXNWYWxpZCA9IGVtYWlsUmVnRXhwLnRlc3QoZmllbGQudmFsKCkpID8gaXNWYWxpZCA6IGZhbHNlO1xyXG4gICAgICAgICAgICBpZighZW1haWxSZWdFeHAudGVzdChmaWVsZC52YWwoKSkpe1xyXG4gICAgICAgICAgICAgICAgZmllbGQuY2xvc2VzdCgnLmZvcm1fX3JvdycpLmFkZENsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpZWxkLnZhbCgpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgZmllbGQuY2xvc2VzdCgnLmZvcm1fX3JvdycpLmFkZENsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbn0iXX0=
