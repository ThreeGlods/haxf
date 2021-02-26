(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a85d3c1e"], {
    "06d9": function (e, t, n) {
        "use strict";
        n("b7b3")
    }, "129f": function (e, t) {
        e.exports = Object.is || function (e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
        }
    }, "294d": function (e, t, n) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticStyle: {"line-height": "1.8"}}, [1 == e.qType || 2 == e.qType ? n("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.qLoading,
                    expression: "qLoading"
                }]
            }, [n("div", {
                staticClass: "q-title",
                domProps: {innerHTML: e._s(e.question.title)}
            }), n("div", {staticClass: "q-content"}, e._l(e.question.items, (function (t) {
                return n("span", {
                    key: t.id,
                    staticClass: "q-item-contain"
                }, [n("span", {staticClass: "q-item-prefix"}, [e._v(e._s(t.prefix))]), n("span", {
                    staticClass: "q-item-content",
                    domProps: {innerHTML: e._s(t.content)}
                })])
            })), 0)]) : 3 == e.qType ? n("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.qLoading,
                    expression: "qLoading"
                }]
            }, [n("div", {
                staticClass: "q-title",
                staticStyle: {display: "inline", "margin-right": "10px"},
                domProps: {innerHTML: e._s(e.question.title)}
            }), n("span", [e._v("（")]), e._l(e.question.items, (function (t) {
                return n("span", {key: t.id}, [n("span", {
                    staticClass: "q-item-content",
                    domProps: {innerHTML: e._s(t.content)}
                })])
            })), n("span", [e._v("）")])], 2) : 4 == e.qType || 5 == e.qType ? n("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.qLoading,
                    expression: "qLoading"
                }]
            }, [n("div", {staticClass: "q-title", domProps: {innerHTML: e._s(e.question.title)}})]) : n("div")])
        }, i = [], r = (n("a9e3"), {
            name: "QuestionShow", props: {
                question: {
                    type: Object, default: function () {
                        return {}
                    }
                }, qLoading: {type: Boolean, default: !1}, qType: {type: Number, default: 0}
            }, methods: {}
        }), o = r, s = n("2877"), l = Object(s["a"])(o, a, i, !1, null, null, null);
        t["a"] = l.exports
    }, "2ac8": function (e, t, n) {
        "use strict";
        var a = n("b775");
        t["a"] = {
            pageList: function (e) {
                return Object(a["a"])("/api/admin/question/page", e)
            }, edit: function (e) {
                return Object(a["a"])("/api/admin/question/edit", e)
            }, select: function (e) {
                return Object(a["a"])("/api/admin/question/select/" + e)
            }, deleteQuestion: function (e) {
                return Object(a["a"])("/api/admin/question/delete/" + e)
            }
        }
    }, "333d": function (e, t, n) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "pagination-container",
                class: {hidden: e.hidden}
            }, [n("el-pagination", e._b({
                attrs: {
                    background: e.background,
                    "current-page": e.currentPage,
                    "page-size": e.pageSize,
                    layout: e.layout,
                    "page-sizes": e.pageSizes,
                    total: e.total
                }, on: {
                    "update:currentPage": function (t) {
                        e.currentPage = t
                    }, "update:current-page": function (t) {
                        e.currentPage = t
                    }, "update:pageSize": function (t) {
                        e.pageSize = t
                    }, "update:page-size": function (t) {
                        e.pageSize = t
                    }, "size-change": e.handleSizeChange, "current-change": e.handleCurrentChange
                }
            }, "el-pagination", e.$attrs, !1))], 1)
        }, i = [];
        n("a9e3");
        Math.easeInOutQuad = function (e, t, n, a) {
            return e /= a / 2, e < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t)
        };
        var r = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }();

        function o(e) {
            document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e
        }

        function s() {
            return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
        }

        function l(e, t, n) {
            var a = s(), i = e - a, l = 20, u = 0;
            t = "undefined" === typeof t ? 500 : t;
            var c = function e() {
                u += l;
                var s = Math.easeInOutQuad(u, a, i, t);
                o(s), u < t ? r(e) : n && "function" === typeof n && n()
            };
            c()
        }

        var u = {
            name: "Pagination",
            props: {
                total: {required: !0, type: Number},
                page: {type: Number, default: 1},
                limit: {type: Number, default: 10},
                pageSizes: {
                    type: Array, default: function () {
                        return [5, 10, 20, 30, 50]
                    }
                },
                layout: {type: String, default: "total, sizes, prev, pager, next, jumper"},
                background: {type: Boolean, default: !0},
                autoScroll: {type: Boolean, default: !0},
                hidden: {type: Boolean, default: !1}
            },
            computed: {
                currentPage: {
                    get: function () {
                        return this.page
                    }, set: function (e) {
                        this.$emit("update:page", e)
                    }
                }, pageSize: {
                    get: function () {
                        return this.limit
                    }, set: function (e) {
                        this.$emit("update:limit", e)
                    }
                }
            },
            methods: {
                handleSizeChange: function (e) {
                    this.$emit("pagination", {page: this.currentPage, limit: e}), this.autoScroll && l(0, 800)
                }, handleCurrentChange: function (e) {
                    this.$emit("pagination", {page: e, limit: this.pageSize}), this.autoScroll && l(0, 800)
                }
            }
        }, c = u, m = (n("39d5"), n("2877")), p = Object(m["a"])(c, a, i, !1, null, "90fd946a", null);
        t["a"] = p.exports
    }, "39d5": function (e, t, n) {
        "use strict";
        n("6b4c")
    }, "4a0c": function (e, t, n) {
        "use strict";
        var a = n("b775");
        t["a"] = {
            pageList: function (e) {
                return Object(a["a"])("/api/admin/exam/paper/page", e)
            }, taskExamPage: function (e) {
                return Object(a["a"])("/api/admin/exam/paper/taskExamPage", e)
            }, edit: function (e) {
                return Object(a["a"])("/api/admin/exam/paper/edit", e)
            }, select: function (e) {
                return Object(a["a"])("/api/admin/exam/paper/select/" + e)
            }, deletePaper: function (e) {
                return Object(a["a"])("/api/admin/exam/paper/delete/" + e)
            }
        }
    }, "6b4c": function (e, t, n) {
    }, "841c": function (e, t, n) {
        "use strict";
        var a = n("d784"), i = n("825a"), r = n("1d80"), o = n("129f"), s = n("14c3");
        a("search", 1, (function (e, t, n) {
            return [function (t) {
                var n = r(this), a = void 0 == t ? void 0 : t[e];
                return void 0 !== a ? a.call(t, n) : new RegExp(t)[e](String(n))
            }, function (e) {
                var a = n(t, e, this);
                if (a.done) return a.value;
                var r = i(e), l = String(this), u = r.lastIndex;
                o(u, 0) || (r.lastIndex = 0);
                var c = s(r, l);
                return o(r.lastIndex, u) || (r.lastIndex = u), null === c ? -1 : c.index
            }]
        }))
    }, b7b3: function (e, t, n) {
    }, beb3: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "app-container"}, [n("el-form", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.formLoading,
                        expression: "formLoading"
                    }], ref: "form", attrs: {model: e.form, "label-width": "100px", rules: e.rules}
                }, [n("el-form-item", {
                    attrs: {
                        label: "消防队：",
                        prop: "level",
                        required: ""
                    }
                }, [n("el-select", {
                    attrs: {placeholder: "消防队"},
                    on: {change: e.levelChange},
                    model: {
                        value: e.form.level, callback: function (t) {
                            e.$set(e.form, "level", t)
                        }, expression: "form.level"
                    }
                }, e._l(e.levelEnum, (function (e) {
                    return n("el-option", {key: e.key, attrs: {value: e.key, label: e.value}})
                })), 1)], 1), n("el-form-item", {
                    attrs: {
                        label: "学科：",
                        prop: "subjectId",
                        required: ""
                    }
                }, [n("el-select", {
                    attrs: {placeholder: "学科"}, model: {
                        value: e.form.subjectId, callback: function (t) {
                            e.$set(e.form, "subjectId", t)
                        }, expression: "form.subjectId"
                    }
                }, e._l(e.subjectFilter, (function (e) {
                    return n("el-option", {key: e.id, attrs: {value: e.id, label: e.name + " ( " + e.levelName + " )"}})
                })), 1)], 1), n("el-form-item", {
                    attrs: {
                        label: "试卷类型：",
                        prop: "paperType",
                        required: ""
                    }
                }, [n("el-select", {
                    attrs: {placeholder: "试卷类型"}, model: {
                        value: e.form.paperType, callback: function (t) {
                            e.$set(e.form, "paperType", t)
                        }, expression: "form.paperType"
                    }
                }, e._l(e.paperTypeEnum, (function (e) {
                    return n("el-option", {key: e.key, attrs: {value: e.key, label: e.value}})
                })), 3)], 3), n("el-form-item", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 4 === e.form.paperType,
                        expression: "form.paperType===4"
                    }], attrs: {label: "时间限制：", required: ""}
                }, [n("el-date-picker", {
                    attrs: {
                        "value-format": "yyyy-MM-dd HH:mm:ss",
                        type: "datetimerange",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期"
                    }, model: {
                        value: e.form.limitDateTime, callback: function (t) {
                            e.$set(e.form, "limitDateTime", t)
                        }, expression: "form.limitDateTime"
                    }
                })], 1), n("el-form-item", {
                    attrs: {
                        label: "试卷名称：",
                        prop: "name",
                        required: ""
                    }
                }, [n("el-input", {
                    model: {
                        value: e.form.name, callback: function (t) {
                            e.$set(e.form, "name", t)
                        }, expression: "form.name"
                    }
                })], 1), e._l(e.form.titleItems, (function (t, a) {
                    return n("el-form-item", {
                        key: a,
                        attrs: {label: "标题" + (a + 1) + "：", required: ""}
                    }, [n("el-input", {
                        staticStyle: {width: "80%"}, model: {
                            value: t.name, callback: function (n) {
                                e.$set(t, "name", n)
                            }, expression: "titleItem.name"
                        }
                    }), n("el-button", {
                        staticClass: "link-left",
                        staticStyle: {"margin-left": "20px"},
                        attrs: {type: "text", size: "mini"},
                        on: {
                            click: function (n) {
                                return e.addQuestion(t)
                            }
                        }
                    }, [e._v(" 添加题目 ")]), n("el-button", {
                        staticClass: "link-left",
                        attrs: {type: "text", size: "mini"},
                        on: {
                            click: function (t) {
                                return e.form.titleItems.splice(a, 1)
                            }
                        }
                    }, [e._v("删除")]), 0 !== t.questionItems.length ? n("el-card", {staticClass: "exampaper-item-box"}, e._l(t.questionItems, (function (a, i) {
                        return n("el-form-item", {
                            key: i,
                            staticStyle: {"margin-bottom": "15px"},
                            attrs: {label: "题目" + (i + 1) + "："}
                        }, [n("el-row", [n("el-col", {attrs: {span: 23}}, [n("QuestionShow", {
                            attrs: {
                                qType: a.questionType,
                                question: a
                            }
                        })], 1), n("el-col", {attrs: {span: 1}}, [n("el-button", {
                            attrs: {type: "text", size: "mini"},
                            on: {
                                click: function (e) {
                                    return t.questionItems.splice(i, 1)
                                }
                            }
                        }, [e._v("删除 ")])], 1)], 1)], 1)
                    })), 1) : e._e()], 1)
                })), n("el-form-item", {
                    attrs: {
                        label: "建议时长：",
                        prop: "suggestTime",
                        required: ""
                    }
                }, [n("el-input", {
                    attrs: {placeholder: "分钟"}, model: {
                        value: e.form.suggestTime, callback: function (t) {
                            e.$set(e.form, "suggestTime", t)
                        }, expression: "form.suggestTime"
                    }
                })], 1), n("el-form-item", [n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.submitForm}
                }, [e._v("提交")]), n("el-button", {on: {click: e.resetForm}}, [e._v("重置")]), n("el-button", {
                    attrs: {type: "success"},
                    on: {click: e.addTitle}
                }, [e._v("添加标题")])], 1)], 2), n("el-dialog", {
                    attrs: {visible: e.questionPage.showDialog, width: "70%"},
                    on: {
                        "update:visible": function (t) {
                            return e.$set(e.questionPage, "showDialog", t)
                        }
                    }
                }, [n("el-form", {
                    ref: "queryForm",
                    attrs: {model: e.questionPage.queryParam, inline: !0}
                }, [n("el-form-item", {attrs: {label: "ID："}}, [n("el-input", {
                    attrs: {clearable: ""},
                    model: {
                        value: e.questionPage.queryParam.id, callback: function (t) {
                            e.$set(e.questionPage.queryParam, "id", t)
                        }, expression: "questionPage.queryParam.id"
                    }
                })], 1), n("el-form-item", {attrs: {label: "题型："}}, [n("el-select", {
                    attrs: {clearable: ""},
                    model: {
                        value: e.questionPage.queryParam.questionType, callback: function (t) {
                            e.$set(e.questionPage.queryParam, "questionType", t)
                        }, expression: "questionPage.queryParam.questionType"
                    }
                }, e._l(e.questionTypeEnum, (function (e) {
                    return n("el-option", {key: e.key, attrs: {value: e.key, label: e.value}})
                })), 1)], 1), n("el-form-item", [n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.queryForm}
                }, [e._v("查询")])], 1)], 1), n("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.questionPage.listLoading,
                        expression: "questionPage.listLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {data: e.questionPage.tableData, border: "", fit: "", "highlight-current-row": ""},
                    on: {"selection-change": e.handleSelectionChange}
                }, [n("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "35"
                    }
                }), n("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "Id",
                        width: "60px"
                    }
                }), n("el-table-column", {
                    attrs: {
                        prop: "questionType",
                        label: "题型",
                        formatter: e.questionTypeFormatter,
                        width: "70px"
                    }
                }), n("el-table-column", {
                    attrs: {
                        prop: "shortTitle",
                        label: "题干",
                        "show-overflow-tooltip": ""
                    }
                })], 1), n("pagination", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.questionPage.total > 0,
                        expression: "questionPage.total>0"
                    }],
                    attrs: {
                        total: e.questionPage.total,
                        page: e.questionPage.queryParam.pageIndex,
                        limit: e.questionPage.queryParam.pageSize
                    },
                    on: {
                        "update:page": function (t) {
                            return e.$set(e.questionPage.queryParam, "pageIndex", t)
                        }, "update:limit": function (t) {
                            return e.$set(e.questionPage.queryParam, "pageSize", t)
                        }, pagination: e.search
                    }
                }), n("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [n("el-button", {
                    on: {
                        click: function (t) {
                            e.questionPage.showDialog = !1
                        }
                    }
                }, [e._v("取 消")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.confirmQuestionSelect}
                }, [e._v("确定")])], 1)], 1)], 1)
            }, i = [], r = (n("4de4"), n("4160"), n("ac1f"), n("841c"), n("159b"), n("5530")), o = n("2f62"), s = n("333d"),
            l = n("294d"), u = n("4a0c"), c = n("2ac8"), m = {
                components: {Pagination: s["a"], QuestionShow: l["a"]},
                data: function () {
                    return {
                        form: {
                            id: null,
                            level: null,
                            subjectId: null,
                            paperType: 1,
                            limitDateTime: [],
                            name: "",
                            suggestTime: null,
                            titleItems: []
                        },
                        subjectFilter: null,
                        formLoading: !1,
                        rules: {
                            level: [{required: !0, message: "请选择消防队", trigger: "change"}],
                            subjectId: [{required: !0, message: "请选择学科", trigger: "change"}],
                            paperType: [{required: !0, message: "请选择试卷类型", trigger: "change"}],
                            name: [{required: !0, message: "请输入试卷名称", trigger: "blur"}],
                            suggestTime: [{required: !0, message: "请输入建议时长", trigger: "blur"}]
                        },
                        questionPage: {
                            multipleSelection: [],
                            showDialog: !1,
                            queryParam: {id: null, questionType: null, subjectId: 1, pageIndex: 1, pageSize: 5},
                            listLoading: !0,
                            tableData: [],
                            total: 0
                        },
                        currentTitleItem: null
                    }
                },
                created: function () {
                    var e = this.$route.query.id, t = this;
                    this.initSubject((function () {
                        t.subjectFilter = t.subjects
                    })), e && 0 !== parseInt(e) && (t.formLoading = !0, u["a"].select(e).then((function (e) {
                        t.form = e.response, t.formLoading = !1
                    })))
                },
                methods: Object(r["a"])(Object(r["a"])({
                    submitForm: function () {
                        var e = this, t = this;
                        this.$refs.form.validate((function (n) {
                            if (!n) return !1;
                            e.formLoading = !0, u["a"].edit(e.form).then((function (n) {
                                1 === n.code ? (t.$message.success(n.message), t.delCurrentView(t).then((function () {
                                    t.$router.push("/exam/paper/list")
                                }))) : (t.$message.error(n.message), e.formLoading = !1)
                            })).catch((function (t) {
                                e.formLoading = !1
                            }))
                        }))
                    }, addTitle: function () {
                        this.form.titleItems.push({name: "", questionItems: []})
                    }, addQuestion: function (e) {
                        this.currentTitleItem = e, this.questionPage.showDialog = !0, this.search()
                    }, removeTitleItem: function (e) {
                        this.form.titleItems.remove(e)
                    }, removeQuestion: function (e, t) {
                        e.questionItems.remove(t)
                    }, queryForm: function () {
                        this.questionPage.queryParam.pageIndex = 1, this.search()
                    }, confirmQuestionSelect: function () {
                        var e = this;
                        this.questionPage.multipleSelection.forEach((function (t) {
                            c["a"].select(t.id).then((function (t) {
                                e.currentTitleItem.questionItems.push(t.response)
                            }))
                        })), this.questionPage.showDialog = !1
                    }, levelChange: function () {
                        var e = this;
                        this.form.subjectId = null, this.subjectFilter = this.subjects.filter((function (t) {
                            return t.level === e.form.level
                        }))
                    }, search: function () {
                        var e = this;
                        this.questionPage.queryParam.subjectId = this.form.subjectId, this.questionPage.listLoading = !0, c["a"].pageList(this.questionPage.queryParam).then((function (t) {
                            var n = t.response;
                            e.questionPage.tableData = n.list, e.questionPage.total = n.total, e.questionPage.queryParam.pageIndex = n.pageNum, e.questionPage.listLoading = !1
                        }))
                    }, handleSelectionChange: function (e) {
                        this.questionPage.multipleSelection = e
                    }, questionTypeFormatter: function (e, t, n, a) {
                        return this.enumFormat(this.questionTypeEnum, n)
                    }, subjectFormatter: function (e, t, n, a) {
                        return this.subjectEnumFormat(n)
                    }, resetForm: function () {
                        var e = this.form.id;
                        this.$refs["form"].resetFields(), this.form = {
                            id: null,
                            level: null,
                            subjectId: null,
                            paperType: 1,
                            limitDateTime: [],
                            name: "",
                            suggestTime: null,
                            titleItems: []
                        }, this.form.id = e
                    }
                }, Object(o["b"])("exam", {initSubject: "initSubject"})), Object(o["b"])("tagsView", {delCurrentView: "delCurrentView"})),
                computed: Object(r["a"])(Object(r["a"])(Object(r["a"])({}, Object(o["c"])("enumItem", ["enumFormat"])), Object(o["e"])("enumItem", {
                    questionTypeEnum: function (e) {
                        return e.exam.question.typeEnum
                    }, paperTypeEnum: function (e) {
                        return e.exam.examPaper.paperTypeEnum
                    }, levelEnum: function (e) {
                        return e.user.levelEnum
                    }
                })), Object(o["e"])("exam", {
                    subjects: function (e) {
                        return e.subjects
                    }
                }))
            }, p = m, d = (n("06d9"), n("2877")), f = Object(d["a"])(p, a, i, !1, null, null, null);
        t["default"] = f.exports
    }
}]);