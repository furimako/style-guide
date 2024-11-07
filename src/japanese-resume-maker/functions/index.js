const functions = require('firebase-functions')
const express = require('express')
const mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// テンプレートファイルの読み込み
const template = fs.readFileSync(path.join(__dirname, 'templates', 'japanese-resume.mustache'), 'utf8')

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/create-japanese-resume', (req, res) => {
    // リクエストボディからデータを取得
    const data = {
        current_date: req.body.current_date || '2023 年 10 月 28 日 現在',
        name_kana: req.body.name_kana || '',
        name_kanji: req.body.name_kanji || '名字 名前',
        birth_date: req.body.birth_date || '1988 年 2 月 6 日生（満 35 歳）',
        is_male: req.body.is_male === 'true',
        postal_code: req.body.postal_code || '000-0000',
        address_kana: req.body.address_kana || 'ほげけん ほげし ほげ 1-2-3',
        address_kanji: req.body.address_kanji || 'ほげ県 ほげ市 ほげ 1-2-3',
        phone_home: req.body.phone_home || 'なし',
        phone_mobile: req.body.phone_mobile || '000-0000-0000',
        fax: req.body.fax || 'なし',
        email: req.body.email || 'hoge@example.com',
        education_history: req.body.education_history || [],
        work_history: req.body.work_history || [],
        licenses: req.body.licenses || [],
        motivations: req.body.motivations || [],
        self_pr: req.body.self_pr || [],
        commute_time: req.body.commute_time || '30 分',
        dependents: req.body.dependents || '0',
        has_spouse: req.body.has_spouse === 'true',
        spouse_dependents: req.body.spouse_dependents === 'true',
        requests: req.body.requests || []
    }

    // テンプレートをレンダリング
    const output = mustache.render(template, data)

    // レスポンスヘッダーを設定
    res.set('Content-Type', 'text/html; charset=utf-8')

    // レンダリング結果を送信
    res.send(output)
})

// Firebase Functionsとしてエクスポート
exports.app = functions.https.onRequest(app)
