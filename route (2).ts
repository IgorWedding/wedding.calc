<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Свадебный калькулятор PRO</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    
    :root {
      --cream-50: #FDFBF7;
      --cream-100: #FAF6F0;
      --cream-200: #F5EDE3;
      --cream-300: #EDE0D0;
      --rose-500: #B8956C;
      --rose-600: #A67C52;
      --ink-900: #1A1612;
      --ink-800: #2C2620;
      --ink-700: #3D352D;
      --ink-600: #5C5248;
      --ink-500: #7A6F63;
      --ink-400: #9C9185;
      --ink-300: #BDB5AB;
    }

    body {
      font-family: Georgia, "Times New Roman", serif;
      background: var(--cream-50);
      color: var(--ink-900);
      line-height: 1.5;
      min-height: 100vh;
    }

    /* Fallback sans for UI */
    .sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

    header {
      border-bottom: 1px solid var(--cream-300);
      background: rgba(253, 251, 247, 0.92);
      position: sticky;
      top: 0;
      z-index: 40;
      backdrop-filter: blur(8px);
    }
    .header-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 18px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo-mark {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--ink-900);
      color: var(--cream-50);
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: italic;
      font-size: 15px;
    }
    .logo-title { font-size: 20px; letter-spacing: 0.02em; }
    .logo-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--rose-600);
      font-weight: 600;
    }
    .header-right {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-400);
    }

    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 20px 80px;
    }

    /* HERO */
    .hero { text-align: center; margin-bottom: 48px; }
    .hero-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--rose-600);
      font-weight: 600;
      margin-bottom: 16px;
    }
    .hero h1 {
      font-size: clamp(32px, 6vw, 52px);
      font-weight: 500;
      line-height: 1.15;
      margin-bottom: 18px;
    }
    .hero h1 em {
      font-style: italic;
      color: var(--rose-600);
    }
    .hero-desc {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 16px;
      color: var(--ink-500);
      font-weight: 400;
      max-width: 480px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* FORM CARD */
    .form-wrap { max-width: 460px; margin: 0 auto; }
    .form-card {
      background: #fff;
      border: 1px solid var(--cream-200);
      border-radius: 24px;
      padding: 36px 32px;
      box-shadow: 0 20px 50px -12px rgba(26, 22, 18, 0.1);
    }

    .field { margin-bottom: 26px; }
    .field label {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-400);
      font-weight: 600;
      margin-bottom: 10px;
    }
    .field input[type="text"],
    .field input[type="date"],
    .field input[type="number"] {
      width: 100%;
      padding: 14px 16px;
      border: 1px solid var(--cream-300);
      border-radius: 14px;
      background: var(--cream-50);
      font-size: 15px;
      color: var(--ink-900);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      outline: none;
    }
    .field input:focus {
      border-color: var(--rose-600);
      box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.12);
    }

    .suggestions {
      position: absolute;
      left: 0; right: 0;
      margin-top: 6px;
      background: #fff;
      border: 1px solid var(--cream-200);
      border-radius: 14px;
      box-shadow: 0 16px 40px -8px rgba(26,22,18,0.12);
      max-height: 240px;
      overflow-y: auto;
      z-index: 30;
      display: none;
      list-style: none;
    }
    .suggestions li {
      padding: 12px 16px;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px;
      border-bottom: 1px solid var(--cream-100);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .suggestions li:last-child { border-bottom: none; }
    .suggestions li:hover { background: var(--cream-100); }
    .suggestions .region { color: var(--ink-400); font-size: 13px; margin-left: 6px; }
    .suggestions .size { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-300); }

    .small-note {
      margin-top: 10px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      color: #8B5E3C;
      background: var(--cream-100);
      padding: 10px 14px;
      border-radius: 12px;
      display: none;
      line-height: 1.4;
    }

    .date-row { display: flex; gap: 12px; align-items: center; }
    .date-row input { flex: 1; }
    .season-badge {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      font-weight: 600;
      padding: 10px 14px;
      border-radius: 12px;
      white-space: nowrap;
      display: none;
    }
    .season-red { background: #FEF2F2; color: #991B1B; border: 1px solid #FECACA; }
    .season-green { background: #ECFDF5; color: #065F46; border: 1px solid #A7F3D0; }
    .season-yellow { background: #FFFBEB; color: #92400E; border: 1px solid #FDE68A; }

    .slider-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }
    .slider-value {
      font-size: 22px;
      font-weight: 500;
    }
    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 3px;
      background: var(--cream-300);
      border-radius: 99px;
      outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      background: var(--ink-900);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .slider-ends {
      display: flex;
      justify-content: space-between;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      color: var(--ink-300);
      margin-top: 8px;
      letter-spacing: 0.04em;
    }

    .btn-primary {
      width: 100%;
      padding: 16px;
      background: var(--ink-900);
      color: var(--cream-50);
      border: none;
      border-radius: 14px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.02em;
      cursor: pointer;
      margin-top: 8px;
    }
    .btn-primary:hover {
      background: var(--ink-800);
    }
    .form-note {
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      color: var(--ink-300);
      margin-top: 14px;
      letter-spacing: 0.03em;
    }

    /* RESULTS */
    #results-section { display: none; }
    #form-section { display: block; }
    #avg-budgets { display: block; }

    .summary-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid var(--cream-300);
      margin-bottom: 40px;
    }
    .summary-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-400);
      margin-bottom: 4px;
    }
    .summary-text { font-size: 20px; }
    .btn-ghost {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      padding: 10px 18px;
      border: 1px solid var(--cream-300);
      border-radius: 999px;
      background: transparent;
      color: var(--ink-600);
      cursor: pointer;
    }
    .btn-ghost:hover { background: var(--cream-100); }

    .section-title {
      font-size: 28px;
      margin-bottom: 6px;
    }
    .section-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 15px;
      color: var(--ink-500);
      margin-bottom: 28px;
    }

    .scenarios-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin-bottom: 48px;
    }
    .scenario-card {
      background: #fff;
      border: 1px solid var(--cream-200);
      border-radius: 20px;
      padding: 24px;
      cursor: pointer;
      box-shadow: 0 4px 20px -4px rgba(26,22,18,0.06);
    }
    .scenario-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 40px -10px rgba(26,22,18,0.1);
    }
    .scenario-card.selected {
      border-color: var(--rose-600);
      background: linear-gradient(145deg, #FDFBF7, #FAF6F0);
      box-shadow: 0 8px 32px -6px rgba(166,124,82,0.18);
    }
    .scenario-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 8px;
    }
    .scenario-title { font-size: 20px; }
    .scenario-price { font-size: 20px; white-space: nowrap; }
    .scenario-desc {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      color: var(--ink-500);
      line-height: 1.5;
      margin-bottom: 14px;
    }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
    .tag {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      padding: 4px 10px;
      background: var(--cream-100);
      color: var(--ink-500);
      border-radius: 999px;
      letter-spacing: 0.03em;
    }
    .scenario-blocks {
      border-top: 1px solid var(--cream-200);
      padding-top: 14px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
    }
    .scenario-block-row {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
      color: var(--ink-600);
    }
    .scenario-block-row .time { color: var(--ink-400); }
    .scenario-btn {
      margin-top: 16px;
      width: 100%;
      padding: 11px;
      border-radius: 12px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      font-weight: 500;
      background: var(--cream-100);
      color: var(--ink-700);
    }
    .scenario-card.selected .scenario-btn {
      background: var(--ink-900);
      color: var(--cream-50);
    }

    .details-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 24px;
    }
    @media (max-width: 860px) {
      .details-grid { grid-template-columns: 1fr; }
    }

    .panel {
      background: #fff;
      border: 1px solid var(--cream-200);
      border-radius: 20px;
      box-shadow: 0 4px 20px -4px rgba(26,22,18,0.06);
    }
    .panel-pad { padding: 28px; }
    .panel-title {
      font-size: 22px;
      margin-bottom: 28px;
    }

    /* Timeline */
    .tl-item { display: flex; gap: 18px; padding-bottom: 28px; }
    .tl-item:last-child { padding-bottom: 0; }
    .tl-time {
      width: 90px;
      flex-shrink: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: var(--rose-600);
      letter-spacing: 0.02em;
      padding-top: 2px;
    }
    .tl-body {
      flex: 1;
      position: relative;
      padding-left: 18px;
      border-left: 1px solid var(--cream-300);
    }
    .tl-dot {
      position: absolute;
      left: -5px;
      top: 6px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--rose-500);
    }
    .tl-title { font-size: 15px; font-weight: 600; margin-bottom: 2px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .tl-desc { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-500); margin-bottom: 2px; }
    .tl-contractor { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-400); margin-bottom: 8px; }
    .tl-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
    .tl-price { font-size: 17px; }
    .tl-logistics {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      background: var(--cream-100);
      color: #8B5E3C;
      padding: 3px 10px;
      border-radius: 999px;
    }
    .tl-book {
      margin-left: auto;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      color: var(--ink-500);
      text-decoration: underline;
      text-underline-offset: 3px;
      background: none;
      border: none;
      cursor: pointer;
    }
    .tl-book:hover { color: var(--ink-900); }

    /* Style buttons */
    .style-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-400);
      font-weight: 600;
      margin-bottom: 14px;
    }
    .style-btn {
      display: block;
      width: 100%;
      text-align: left;
      padding: 12px 14px;
      border-radius: 12px;
      border: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      margin-bottom: 8px;
      background: var(--cream-100);
      color: var(--ink-700);
    }
    .style-btn.active {
      background: var(--ink-900);
      color: var(--cream-50);
    }

    /* Estimate */
    .est-header {
      padding: 18px 22px;
      border-bottom: 1px solid var(--cream-200);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-400);
      font-weight: 600;
    }
    .est-row {
      padding: 14px 22px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid var(--cream-100);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .est-cat { font-size: 13px; font-weight: 600; color: var(--ink-800); }
    .est-desc { font-size: 12px; color: var(--ink-400); margin-top: 2px; }
    .est-note { font-size: 11px; color: #8B5E3C; margin-top: 3px; }
    .est-sum { font-size: 13px; font-weight: 600; white-space: nowrap; }
    .est-footer {
      padding: 18px 22px;
      background: var(--cream-50);
      border-top: 1px solid var(--cream-200);
    }
    .est-total-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;
    }
    .est-total-label { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-500); }
    .est-total-val { font-size: 24px; }
    .est-line {
      display: flex;
      justify-content: space-between;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      margin-bottom: 4px;
    }
    .est-remain { font-weight: 600; }
    .est-remain.ok { color: #065F46; }
    .est-remain.bad { color: #991B1B; }
    .progress {
      height: 4px;
      background: var(--cream-200);
      border-radius: 99px;
      overflow: hidden;
      margin-top: 12px;
    }
    .progress-bar {
      height: 100%;
      border-radius: 99px;
      background: var(--ink-900);
      transition: width 0.4s ease;
    }
    .progress-bar.bad { background: #DC2626; }
    .progress-pct {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      color: var(--ink-300);
      text-align: right;
      margin-top: 6px;
      letter-spacing: 0.04em;
    }

    /* AVG BUDGETS */
    #avg-budgets {
      margin-top: 80px;
      padding-top: 60px;
      border-top: 1px solid var(--cream-300);
    }
    .avg-header { text-align: center; margin-bottom: 40px; }
    .avg-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--rose-600);
      font-weight: 600;
      margin-bottom: 10px;
    }
    .avg-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 700px;
      margin: 0 auto;
    }
    @media (max-width: 600px) { .avg-grid { grid-template-columns: 1fr; } }
    .avg-card {
      background: #fff;
      border: 1px solid var(--cream-200);
      border-radius: 20px;
      padding: 26px;
      box-shadow: 0 4px 20px -4px rgba(26,22,18,0.06);
    }
    .avg-card-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ink-400);
      font-weight: 600;
      margin-bottom: 18px;
    }
    .avg-dot { width: 6px; height: 6px; border-radius: 50%; }
    .avg-dot.red { background: var(--rose-600); }
    .avg-dot.gray { background: var(--ink-400); }
    .avg-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .avg-city { font-size: 14px; color: var(--ink-700); }
    .avg-price { font-family: Georgia, serif; font-size: 17px; }
    .avg-note {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      color: var(--ink-300);
      margin-top: 16px;
      letter-spacing: 0.04em;
    }

    footer {
      border-top: 1px solid var(--cream-300);
      padding: 36px 20px;
      margin-top: 60px;
    }
    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .footer-brand { font-size: 17px; color: var(--ink-700); }
    .footer-copy {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--ink-300);
    }

    .relative { position: relative; }
  
    .header-nav { display: flex; gap: 8px; }
    .nav-btn {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; padding: 8px 16px; border-radius: 999px;
      border: 1px solid transparent; background: transparent;
      color: var(--ink-500); cursor: pointer; font-weight: 500;
    }
    .nav-btn:hover { color: var(--ink-900); background: var(--cream-100); }
    .nav-btn.active { background: var(--ink-900); color: var(--cream-50); }

    #catalog-section { display: none; }
    .catalog-filters {
      display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px;
      align-items: center;
    }
    .filter-select, .filter-input {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; padding: 10px 14px; border: 1px solid var(--cream-300);
      border-radius: 12px; background: #fff; color: var(--ink-800);
      outline: none;
    }
    .filter-select:focus, .filter-input:focus { border-color: var(--rose-600); }
    .filter-chip {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; padding: 8px 14px; border-radius: 999px;
      border: 1px solid var(--cream-300); background: #fff;
      color: var(--ink-600); cursor: pointer;
    }
    .filter-chip.active { background: var(--ink-900); color: var(--cream-50); border-color: var(--ink-900); }
    .contractors-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 18px;
    }
    .contractor-card {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 18px;
      padding: 22px; box-shadow: 0 4px 20px -4px rgba(26,22,18,0.06);
    }
    .contractor-card:hover { box-shadow: 0 12px 32px -8px rgba(26,22,18,0.1); transform: translateY(-2px); }
    .c-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
    .c-name { font-size: 17px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .c-rating { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--rose-600); font-weight: 600; white-space: nowrap; }
    .c-type { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 12px; color: var(--ink-400); margin-bottom: 8px; letter-spacing: 0.04em; text-transform: uppercase; }
    .c-city { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-500); margin-bottom: 6px; }
    .c-price { font-size: 18px; margin: 10px 0 12px; }
    .c-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
    .c-tag { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 11px; padding: 3px 9px; background: var(--cream-100); color: var(--ink-500); border-radius: 999px; }
    .c-travel { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 12px; color: #065F46; margin-bottom: 12px; }
    .c-btn {
      width: 100%; padding: 10px; border-radius: 11px; border: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; font-weight: 500; cursor: pointer;
      background: var(--cream-100); color: var(--ink-800);
    }
    .c-btn:hover { background: var(--ink-900); color: var(--cream-50); }
    .catalog-empty { text-align: center; padding: 60px 20px; color: var(--ink-400); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .catalog-count { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-400); margin-bottom: 16px; }

  
    .c-avatar {
      width: 52px; height: 52px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 16px; font-weight: 600; color: #fff;
      flex-shrink: 0; letter-spacing: 0.02em;
    }
    .c-top { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 10px; }
    .c-info { flex: 1; min-width: 0; }
    .c-name-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }

    footer {
      border-top: 1px solid var(--cream-300);
      padding: 48px 20px 32px;
      margin-top: 80px;
      background: #FAF6F0;
    }
    .footer-grid {
      max-width: 1100px; margin: 0 auto 36px;
      display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 32px;
    }
    @media (max-width: 800px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 500px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
    .footer-brand-block .footer-logo {
      font-size: 18px; margin-bottom: 8px; color: var(--ink-800);
    }
    .footer-brand-block p {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; color: var(--ink-500); line-height: 1.55; max-width: 260px;
    }
    .footer-col h4 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--ink-400); font-weight: 600; margin-bottom: 14px;
    }
    .footer-col a, .footer-col button {
      display: block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; color: var(--ink-600); text-decoration: none;
      margin-bottom: 10px; background: none; border: none; padding: 0;
      cursor: pointer; text-align: left;
    }
    .footer-col a:hover, .footer-col button:hover { color: var(--ink-900); }
    .footer-bottom {
      max-width: 1100px; margin: 0 auto;
      padding-top: 24px; border-top: 1px solid var(--cream-300);
      display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px;
    }
    .footer-copy {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; color: var(--ink-400);
    }
    .footer-dev {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; color: var(--ink-500);
    }
    .footer-dev strong { color: var(--ink-800); font-weight: 600; }

    /* Modal */
    .modal-overlay {
      display: none; position: fixed; inset: 0; background: rgba(26,22,18,0.45);
      z-index: 100; align-items: center; justify-content: center; padding: 20px;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: #fff; border-radius: 20px; max-width: 560px; width: 100%;
      max-height: 80vh; overflow-y: auto; padding: 32px 28px;
      box-shadow: 0 24px 60px rgba(0,0,0,0.2);
    }
    .modal h2 {
      font-size: 22px; margin-bottom: 16px;
    }
    .modal .modal-body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px; color: var(--ink-600); line-height: 1.65;
    }
    .modal .modal-body p { margin-bottom: 12px; }
    .modal .modal-body h3 {
      font-size: 14px; color: var(--ink-800); margin: 18px 0 8px;
    }
    .modal-close {
      margin-top: 24px; width: 100%; padding: 12px;
      border-radius: 12px; border: none; cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px; font-weight: 500;
      background: var(--ink-900); color: var(--cream-50);
    }

  
    #photo-section { display: none; }
    .photo-drop {
      border: 2px dashed var(--cream-300); border-radius: 20px;
      padding: 40px 24px; text-align: center; background: #fff;
      margin-bottom: 24px; cursor: pointer; transition: border-color 0.2s;
    }
    .photo-drop:hover, .photo-drop.dragover { border-color: var(--rose-600); background: var(--cream-50); }
    .photo-drop p { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; color: var(--ink-500); margin-top: 8px; }
    .photo-drop .hint { font-size: 12px; color: var(--ink-300); margin-top: 6px; }
    .style-presets {
      display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; justify-content: center;
    }
    .style-preset {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; padding: 10px 18px; border-radius: 999px;
      border: 1px solid var(--cream-300); background: #fff; color: var(--ink-700);
      cursor: pointer;
    }
    .style-preset:hover, .style-preset.active {
      background: var(--ink-900); color: var(--cream-50); border-color: var(--ink-900);
    }
    .photo-city-row {
      display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end;
      margin-bottom: 28px; max-width: 520px; margin-left: auto; margin-right: auto;
    }
    .photo-city-row .field { flex: 1; min-width: 160px; margin-bottom: 0; }
    .match-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px;
    }
    .match-card {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 18px;
      padding: 22px; box-shadow: 0 4px 20px -4px rgba(26,22,18,0.06);
    }
    .match-pct {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; font-weight: 600; color: var(--rose-600);
      background: var(--cream-100); padding: 4px 10px; border-radius: 999px;
    }
    .match-logistics {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; color: #8B5E3C; margin-top: 6px;
    }
    .photo-results-title {
      font-size: 22px; margin-bottom: 8px; text-align: center;
    }
    .photo-results-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px; color: var(--ink-500); text-align: center; margin-bottom: 28px;
    }

  
    header {
      border-bottom: 1px solid rgba(237, 224, 208, 0.9);
      background: rgba(253, 251, 247, 0.85);
      position: sticky;
      top: 0;
      z-index: 40;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .header-inner {
      max-width: 1120px;
      margin: 0 auto;
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      color: inherit;
    }
    .logo-mark {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(145deg, #1A1612 0%, #3D352D 100%);
      color: #F5EDE3;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 18px;
      font-style: italic;
      font-weight: 500;
      letter-spacing: -0.02em;
      box-shadow: 0 2px 8px rgba(26, 22, 18, 0.15), inset 0 1px 0 rgba(255,255,255,0.08);
      position: relative;
    }
    .logo-mark::after {
      content: "";
      position: absolute;
      inset: 1px;
      border-radius: 11px;
      border: 1px solid rgba(196, 164, 132, 0.25);
      pointer-events: none;
    }
    .logo-text { display: flex; flex-direction: column; gap: 1px; }
    .logo-title {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 17px;
      letter-spacing: 0.01em;
      color: #1A1612;
      line-height: 1.2;
    }
    .logo-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 9px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #A67C52;
      font-weight: 600;
    }
    .header-nav {
      display: flex;
      gap: 4px;
      background: rgba(245, 237, 227, 0.6);
      padding: 4px;
      border-radius: 999px;
      border: 1px solid rgba(237, 224, 208, 0.8);
    }
    .nav-btn {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 999px;
      border: none;
      background: transparent;
      color: #5C5248;
      cursor: pointer;
      font-weight: 500;
      letter-spacing: 0.02em;
    }
    .nav-btn:hover { color: #1A1612; }
    .nav-btn.active {
      background: #1A1612;
      color: #FDFBF7;
      box-shadow: 0 2px 8px rgba(26, 22, 18, 0.2);
    }
    .header-right {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #9C9185;
      font-weight: 500;
    }
    @media (max-width: 720px) {
      .header-right { display: none; }
      .nav-btn { padding: 7px 12px; font-size: 11px; }
      .logo-title { font-size: 15px; }
    }

  
    .footer-dev {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      color: #7A6F63;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .footer-dev-label {
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #BDB5AB;
      font-weight: 500;
    }
    .footer-dev-name {
      color: #1A1612;
      font-weight: 600;
      letter-spacing: 0.02em;
      position: relative;
    }
    .footer-dev-name::after {
      content: "";
      position: absolute;
      left: 0; right: 0; bottom: -2px;
      height: 1px;
      background: linear-gradient(90deg, #A67C52, transparent);
      opacity: 0.7;
    }

  
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .anim-fade-up { animation: fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .anim-fade-in { animation: fadeIn 0.4s ease both; }
    .anim-scale { animation: scaleIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .stagger > *:nth-child(1) { animation-delay: 0.04s; }
    .stagger > *:nth-child(2) { animation-delay: 0.08s; }
    .stagger > *:nth-child(3) { animation-delay: 0.12s; }
    .stagger > *:nth-child(4) { animation-delay: 0.16s; }
    .stagger > *:nth-child(5) { animation-delay: 0.20s; }
    .stagger > *:nth-child(6) { animation-delay: 0.24s; }
    .stagger > *:nth-child(7) { animation-delay: 0.28s; }
    .stagger > *:nth-child(8) { animation-delay: 0.32s; }
    .stagger > *:nth-child(9) { animation-delay: 0.36s; }
    .stagger > *:nth-child(10) { animation-delay: 0.40s; }
    .stagger > *:nth-child(n+11) { animation-delay: 0.44s; }
    #map-section { display: none; }
    .map-wrap {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 24px;
      overflow: hidden; box-shadow: 0 12px 40px -12px rgba(26,22,18,0.1); margin-bottom: 28px;
    }
    .map-canvas {
      position: relative; height: 420px;
      background: radial-gradient(ellipse 80% 60% at 50% 40%, #F5EDE3 0%, #EDE0D0 45%, #E5D9CC 100%);
      overflow: hidden;
    }
    .map-canvas::before {
      content: ""; position: absolute; inset: 0;
      background-image: linear-gradient(rgba(166,124,82,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(166,124,82,0.05) 1px, transparent 1px);
      background-size: 36px 36px; pointer-events: none;
    }
    .map-pin {
      position: absolute; transform: translate(-50%, -100%); cursor: pointer; z-index: 2;
      transition: transform 0.2s ease;
    }
    .map-pin:hover, .map-pin.active { transform: translate(-50%, -100%) scale(1.2); z-index: 5; }
    .map-pin-dot {
      width: 14px; height: 14px; background: #1A1612; border: 2px solid #FDFBF7;
      border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    }
    .map-pin-label {
      position: absolute; left: 50%; top: -28px; transform: translateX(-50%);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px; font-weight: 600; white-space: nowrap;
      background: #1A1612; color: #FDFBF7; padding: 4px 10px; border-radius: 8px;
      opacity: 0; pointer-events: none; transition: opacity 0.2s;
    }
    .map-pin:hover .map-pin-label, .map-pin.active .map-pin-label { opacity: 1; }
    .map-sidebar { padding: 20px 22px; border-top: 1px solid var(--cream-200); max-height: 300px; overflow-y: auto; }
    .map-city-title { font-size: 18px; margin-bottom: 4px; }
    .map-city-meta { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-400); margin-bottom: 14px; }
    .map-contractor-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 0; border-bottom: 1px solid var(--cream-100);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px;
    }
    .map-contractor-row:last-child { border-bottom: none; }
    .map-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }

  
    .header-cart-btn {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; font-weight: 500;
      padding: 8px 14px; border-radius: 999px;
      border: 1px solid var(--cream-300); background: #fff;
      color: var(--ink-800); cursor: pointer;
      display: flex; align-items: center; gap: 8px;
    }
    .header-cart-btn:hover { border-color: var(--ink-900); }
    .cart-badge {
      background: var(--ink-900); color: #FDFBF7;
      font-size: 10px; font-weight: 600;
      min-width: 18px; height: 18px; border-radius: 999px;
      display: inline-flex; align-items: center; justify-content: center;
      padding: 0 5px;
    }
    #cart-section { display: none; }
    .cart-empty {
      text-align: center; padding: 60px 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--ink-400);
    }
    .cart-list { max-width: 640px; margin: 0 auto; }
    .cart-item {
      display: flex; justify-content: space-between; align-items: flex-start;
      gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--cream-200);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .cart-item-name { font-weight: 600; font-size: 15px; color: var(--ink-900); }
    .cart-item-meta { font-size: 13px; color: var(--ink-400); margin-top: 4px; }
    .cart-item-price { font-size: 16px; white-space: nowrap; }
    .cart-item-remove {
      background: none; border: none; color: var(--ink-300); cursor: pointer;
      font-size: 12px; text-decoration: underline; margin-top: 6px; padding: 0;
    }
    .cart-item-remove:hover { color: #991B1B; }
    .cart-summary {
      max-width: 640px; margin: 28px auto 0;
      background: #fff; border: 1px solid var(--cream-200); border-radius: 20px;
      padding: 24px; box-shadow: 0 8px 30px -10px rgba(26,22,18,0.08);
    }
    .cart-summary-row {
      display: flex; justify-content: space-between;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px; margin-bottom: 10px; color: var(--ink-600);
    }
    .cart-summary-total {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--cream-200);
    }
    .cart-summary-total span:last-child { font-size: 24px; font-family: Georgia, serif; }
    .cart-toast {
      position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(20px);
      background: #1A1612; color: #FDFBF7;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; padding: 14px 22px; border-radius: 14px;
      opacity: 0; pointer-events: none; transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
      z-index: 90; box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    }
    .cart-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  
    .header-auth {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; font-weight: 500;
      padding: 8px 14px; border-radius: 999px;
      border: 1px solid var(--cream-300); background: transparent;
      color: var(--ink-700); cursor: pointer;
    }
    .header-auth:hover { background: var(--cream-100); }
    .header-user {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; color: var(--ink-600);
      display: flex; align-items: center; gap: 8px;
    }
    .header-user button {
      background: none; border: none; color: var(--ink-400); cursor: pointer;
      font-size: 11px; text-decoration: underline; padding: 0;
    }
    #auth-section, #cabinet-section, #knowledge-section { display: none; }
    .auth-card {
      max-width: 420px; margin: 0 auto;
      background: #fff; border: 1px solid var(--cream-200);
      border-radius: 24px; padding: 36px 32px;
      box-shadow: 0 20px 50px -12px rgba(26,22,18,0.1);
    }
    .auth-tabs {
      display: flex; gap: 4px; background: var(--cream-100);
      padding: 4px; border-radius: 999px; margin-bottom: 28px;
    }
    .auth-tab {
      flex: 1; padding: 10px; border: none; border-radius: 999px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; font-weight: 500; cursor: pointer;
      background: transparent; color: var(--ink-500);
    }
    .auth-tab.active { background: #1A1612; color: #FDFBF7; }
    .auth-roles {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;
    }
    .auth-role {
      padding: 14px; border: 1px solid var(--cream-300); border-radius: 14px;
      text-align: center; cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; color: var(--ink-600); background: #fff;
    }
    .auth-role.active {
      border-color: var(--ink-900); background: var(--cream-50); color: var(--ink-900); font-weight: 600;
    }
    .auth-role small { display: block; font-size: 11px; color: var(--ink-400); margin-top: 4px; font-weight: 400; }
    .cab-grid {
      display: grid; grid-template-columns: 220px 1fr; gap: 28px; max-width: 960px; margin: 0 auto;
    }
    @media (max-width: 720px) { .cab-grid { grid-template-columns: 1fr; } }
    .cab-nav {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 18px; padding: 12px;
    }
    .cab-nav button {
      display: block; width: 100%; text-align: left; padding: 12px 14px;
      border: none; border-radius: 12px; background: transparent; cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; color: var(--ink-600); margin-bottom: 4px;
    }
    .cab-nav button.active, .cab-nav button:hover { background: var(--cream-100); color: var(--ink-900); }
    .cab-panel {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 18px; padding: 28px;
      min-height: 320px;
    }
    .kb-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px;
    }
    .kb-card {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 18px; padding: 22px;
      cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
    }
    .kb-card:hover { transform: translateY(-2px); box-shadow: 0 12px 32px -8px rgba(26,22,18,0.1); }
    .kb-card h3 { font-size: 17px; margin-bottom: 8px; }
    .kb-card p { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-500); line-height: 1.5; }

  
    #admin-section { display: none; }
    .admin-grid {
      display: grid; grid-template-columns: 200px 1fr; gap: 24px; max-width: 1100px; margin: 0 auto;
    }
    @media (max-width: 720px) { .admin-grid { grid-template-columns: 1fr; } }
    .admin-nav {
      background: #1A1612; border-radius: 18px; padding: 12px; color: #FDFBF7;
    }
    .admin-nav button {
      display: block; width: 100%; text-align: left; padding: 12px 14px;
      border: none; border-radius: 12px; background: transparent; cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; color: rgba(253,251,247,0.7); margin-bottom: 4px;
    }
    .admin-nav button.active, .admin-nav button:hover {
      background: rgba(255,255,255,0.1); color: #FDFBF7;
    }
    .admin-panel {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 18px; padding: 24px;
      min-height: 400px;
    }
    .admin-table {
      width: 100%; border-collapse: collapse;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px;
    }
    .admin-table th {
      text-align: left; padding: 10px 8px; border-bottom: 1px solid var(--cream-300);
      color: var(--ink-400); font-weight: 600; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
    }
    .admin-table td {
      padding: 10px 8px; border-bottom: 1px solid var(--cream-100); vertical-align: middle;
    }
    .admin-table input, .admin-table select {
      width: 100%; padding: 6px 8px; border: 1px solid var(--cream-300); border-radius: 8px;
      font-size: 12px; font-family: inherit;
    }
    .admin-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    .admin-btn {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; padding: 8px 14px; border-radius: 10px; border: 1px solid var(--cream-300);
      background: #fff; cursor: pointer; color: var(--ink-700);
    }
    .admin-btn.primary { background: #1A1612; color: #FDFBF7; border-color: #1A1612; }
    .admin-btn.danger { color: #991B1B; border-color: #FECACA; }
    .admin-btn:hover { opacity: 0.9; }
    .dev-badge {
      font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase;
      background: linear-gradient(90deg, #A67C52, #8B6914); color: #fff;
      padding: 2px 7px; border-radius: 6px; font-weight: 600; margin-left: 4px;
    }

  
    #cases-section { display: none; }
    .cases-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;
    }
    .case-card {
      background: #fff; border: 1px solid var(--cream-200); border-radius: 20px; overflow: hidden;
      box-shadow: 0 4px 24px -6px rgba(26,22,18,0.07); cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .case-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px -10px rgba(26,22,18,0.12); }
    .case-cover {
      height: 140px; display: flex; align-items: flex-end; padding: 16px;
      background: linear-gradient(135deg, #3D352D 0%, #A67C52 100%);
      color: #FDFBF7; font-family: Georgia, serif; font-size: 22px;
    }
    .case-body { padding: 18px 20px 22px; }
    .case-meta {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; color: var(--ink-400); margin-bottom: 8px; letter-spacing: 0.04em;
    }
    .case-title { font-size: 17px; margin-bottom: 8px; }
    .case-budget {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px; color: var(--ink-600);
    }
    .case-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
    /* Booking modal */
    #booking-modal.modal-overlay { z-index: 110; }
    .booking-form .field { margin-bottom: 14px; }

  
    #api-section { display: none; }
    .api-block {
      background: #1A1612; color: #EDE0D0; border-radius: 16px; padding: 20px 22px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px;
      line-height: 1.55; overflow-x: auto; margin-bottom: 16px;
    }
    .api-block .c { color: #A67C52; }
    .pay-plans {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px;
    }
    .pay-plan {
      border: 1px solid var(--cream-300); border-radius: 16px; padding: 20px; background: #fff;
    }
    .pay-plan.featured { border-color: var(--ink-900); box-shadow: 0 8px 30px -10px rgba(26,22,18,0.15); }
    .pay-plan h4 { font-size: 16px; margin-bottom: 6px; }
    .pay-plan .price { font-size: 22px; margin: 10px 0; }
    .pay-plan ul { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: var(--ink-500); padding-left: 18px; line-height: 1.6; }

  
    /* Premium auth */
    #auth-section .auth-card {
      max-width: 440px;
      padding: 40px 36px 36px;
      border-radius: 28px;
      border: 1px solid rgba(237, 224, 208, 0.9);
      box-shadow:
        0 4px 6px rgba(26, 22, 18, 0.02),
        0 24px 64px -16px rgba(26, 22, 18, 0.14);
      position: relative;
      overflow: hidden;
    }
    #auth-section .auth-card::before {
      content: "";
      position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, #A67C52, #1A1612 50%, #A67C52);
    }
    #auth-section .auth-tabs {
      background: #F5EDE3;
      padding: 5px;
      border-radius: 14px;
      margin-bottom: 26px;
    }
    #auth-section .auth-tab {
      padding: 11px 12px;
      border-radius: 10px;
      font-size: 13px;
      letter-spacing: 0.01em;
    }
    #auth-section .auth-tab.active {
      background: #1A1612;
      box-shadow: 0 4px 12px rgba(26, 22, 18, 0.2);
    }
    #auth-section .auth-roles { gap: 12px; margin-bottom: 22px; }
    #auth-section .auth-role {
      padding: 16px 12px;
      border-radius: 16px;
      border: 1.5px solid #EDE0D0;
      transition: all 0.2s;
    }
    #auth-section .auth-role:hover { border-color: #C4A484; }
    #auth-section .auth-role.active {
      border-color: #1A1612;
      background: linear-gradient(160deg, #FDFBF7, #FAF6F0);
      box-shadow: 0 4px 16px rgba(26, 22, 18, 0.06);
    }
    #auth-section .field label {
      font-size: 10px;
      letter-spacing: 0.16em;
      margin-bottom: 8px;
    }
    #auth-section .field input {
      padding: 14px 16px;
      border-radius: 14px;
      border: 1.5px solid #EDE0D0;
      background: #FDFBF7;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    #auth-section .field input:focus {
      border-color: #A67C52;
      box-shadow: 0 0 0 4px rgba(166, 124, 82, 0.12);
      outline: none;
    }
    #auth-section .btn-primary {
      margin-top: 8px;
      padding: 15px;
      border-radius: 14px;
      font-size: 14px;
      letter-spacing: 0.03em;
      box-shadow: 0 8px 24px -6px rgba(26, 22, 18, 0.35);
    }
    #auth-section .form-note {
      margin-top: 18px;
      font-size: 11px;
      letter-spacing: 0.04em;
      color: #BDB5AB;
    }
    .auth-divider {
      display: flex; align-items: center; gap: 12px;
      margin: 20px 0 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 11px; color: #BDB5AB; letter-spacing: 0.08em; text-transform: uppercase;
    }
    .auth-divider::before, .auth-divider::after {
      content: ""; flex: 1; height: 1px; background: #EDE0D0;
    }

    /* Toast system */
    .toast-stack {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 200;
      display: flex;
      flex-direction: column-reverse;
      gap: 10px;
      max-width: 360px;
      pointer-events: none;
    }
    @media (max-width: 520px) {
      .toast-stack { left: 16px; right: 16px; bottom: 16px; max-width: none; }
    }
    .toast {
      pointer-events: auto;
      background: #1A1612;
      color: #FDFBF7;
      border-radius: 16px;
      padding: 14px 16px 14px 16px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.28);
      display: flex;
      align-items: flex-start;
      gap: 12px;
      animation: toastIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .toast.hide {
      animation: toastOut 0.35s cubic-bezier(0.4, 0, 1, 1) both;
    }
    .toast-icon {
      width: 32px; height: 32px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; font-size: 14px;
      background: rgba(166, 124, 82, 0.25);
    }
    .toast.success .toast-icon { background: rgba(16, 185, 129, 0.2); }
    .toast.error .toast-icon { background: rgba(239, 68, 68, 0.2); }
    .toast.info .toast-icon { background: rgba(166, 124, 82, 0.25); }
    .toast-body { flex: 1; min-width: 0; }
    .toast-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; font-weight: 600; margin-bottom: 2px;
    }
    .toast-msg {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px; color: rgba(253, 251, 247, 0.7); line-height: 1.4;
    }
    .toast-close {
      background: none; border: none; color: rgba(255,255,255,0.4);
      cursor: pointer; font-size: 16px; line-height: 1; padding: 0 2px;
    }
    .toast-close:hover { color: #fff; }
    @keyframes toastIn {
      from { opacity: 0; transform: translateY(12px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes toastOut {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to { opacity: 0; transform: translateY(8px) scale(0.96); }
    }
    .premium-badge-user {
      font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase;
      background: linear-gradient(90deg, #A67C52, #8B6914);
      color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: 600; margin-left: 4px;
    }

  
    .article-modal .modal {
      max-width: 640px;
      padding: 0;
      overflow: hidden;
    }
    .article-hero {
      padding: 32px 32px 24px;
      background: linear-gradient(145deg, #1A1612 0%, #3D352D 60%, #5C4A3A 100%);
      color: #FDFBF7;
    }
    .article-hero .label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
      color: #C4A484; margin-bottom: 10px; font-weight: 600;
    }
    .article-hero h2 {
      font-size: 26px; line-height: 1.25; margin: 0; color: #FDFBF7;
    }
    .article-body {
      padding: 28px 32px 12px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 15px; line-height: 1.7; color: #3D352D;
    }
    .article-body p { margin-bottom: 14px; }
    .article-body h3 {
      font-family: Georgia, serif; font-size: 17px; margin: 22px 0 10px; color: #1A1612;
    }
    .article-body ul {
      margin: 0 0 14px 18px; padding: 0;
    }
    .article-body li { margin-bottom: 6px; }
    .article-footer {
      padding: 8px 32px 28px;
    }
    .load-more-wrap {
      text-align: center; margin-top: 28px; margin-bottom: 12px;
    }
    .load-more-btn {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px; font-weight: 500;
      padding: 14px 32px; border-radius: 999px;
      border: 1px solid var(--cream-300); background: #fff;
      color: var(--ink-800); cursor: pointer;
      box-shadow: 0 4px 16px rgba(26,22,18,0.06);
    }
    .load-more-btn:hover {
      border-color: var(--ink-900); background: var(--ink-900); color: #FDFBF7;
    }

  </style>
</head>
<body>

  <header>
    <div class="header-inner">
      <div class="logo">
        <div class="logo-mark">W</div>
        <div class="logo-text">
          <div class="logo-title">Wedding Calc</div>
          <div class="logo-sub">PRO · Russia</div>
        </div>
      </div>
      <nav class="header-nav">
        <button type="button" class="nav-btn active" data-view="calc">Калькулятор</button>
        <button type="button" class="nav-btn" data-view="catalog">Каталог</button>
        <button type="button" class="nav-btn" data-view="photo">По фото</button>
        <button type="button" class="nav-btn" data-view="map">Карта</button>
        <button type="button" class="nav-btn" data-view="knowledge">База знаний</button>
        <button type="button" class="nav-btn" data-view="cases">Кейсы</button>
      </nav>
      <button type="button" class="header-cart-btn" id="header-cart-btn" onclick="showView('cart')">
        Моя свадьба <span class="cart-badge" id="cart-badge">0</span>
      </button>
      <div id="header-auth-area">
        <button type="button" class="header-auth" onclick="showView('auth')">Войти</button>
      </div>
      <div class="header-right">Вся Россия</div>
    </div>
  </header>

  <main>
    <!-- FORM -->
    <section id="form-section">
      <div class="hero">
        <p class="hero-label">Бесплатный расчёт за 60 секунд</p>
        <h1>Свадьба вашей мечты<br><em>с точной сметой</em></h1>
        <p class="hero-desc">Сценарий дня по часам и реальные цены вашего региона. Сезонность, логистика и размер города — всё учтено.</p>
      </div>

      <div class="form-wrap">
        <div class="form-card">
          <form id="calc-form">
            <div class="field relative">
              <label>Город проведения</label>
              <input id="city-input" type="text" placeholder="Начните вводить город..." autocomplete="off" />
              <ul id="suggestions" class="suggestions"></ul>
              <p id="small-city-note" class="small-note"></p>
            </div>

            <div class="field">
              <label>Дата свадьбы</label>
              <div class="date-row">
                <input id="date-input" type="date" />
                <span id="season-badge" class="season-badge"></span>
              </div>
            </div>

            <div class="field">
              <div class="slider-header">
                <label style="margin:0">Гости</label>
                <span id="guests-value" class="slider-value">50</span>
              </div>
              <input id="guests-input" type="range" min="10" max="200" step="5" value="50" />
              <div class="slider-ends"><span>10</span><span>200</span></div>
            </div>

            <div class="field">
              <div class="slider-header">
                <label style="margin:0">Бюджет</label>
                <span id="budget-value" class="slider-value">800 000 ₽</span>
              </div>
              <input id="budget-range" type="range" min="200000" max="5000000" step="50000" value="800000" />
              <div class="slider-ends"><span>200 тыс</span><span>5 млн</span></div>
              <input id="budget-input" type="number" value="800000" min="100000" style="margin-top:14px" />
            </div>

            <button type="submit" class="btn-primary">Получить сценарий и смету</button>
            <p class="form-note">Без регистрации · 3 варианта за минуту</p>
          </form>
        </div>
      </div>
    </section>

    <!-- RESULTS -->
    <section id="results-section">
      <div class="summary-bar">
        <div>
          <div class="summary-label">Ваш запрос</div>
          <div id="summary-text" class="summary-text"></div>
        </div>
        <button id="reset-btn" class="btn-ghost">Изменить параметры</button>
      </div>

      <h2 class="section-title">Выберите сценарий дня</h2>
      <p class="section-sub">Цены уже учитывают регион, сезон и логистику</p>
      <div id="scenarios-grid" class="scenarios-grid"></div>

      <div class="details-grid">
        <div class="panel panel-pad">
          <h3 id="timeline-title" class="panel-title"></h3>
          <div id="timeline"></div>
        </div>

        <div>
          <div class="panel panel-pad" style="margin-bottom:18px">
            <div class="style-label">Настроить приоритеты</div>
            <button data-style="balanced" class="style-btn active">Сбалансировано</button>
            <button data-style="more_decor" class="style-btn">Больше декора и флористики</button>
            <button data-style="more_show" class="style-btn">Больше шоу и развлечений</button>
          </div>
          <div id="estimate-box" class="panel"></div>
        </div>
      </div>
    </section>

    <!-- AVG -->
    <section id="avg-budgets">
      <div class="avg-header">
        <p class="avg-label">Ориентиры</p>
        <h2 class="section-title" style="margin:0">Средние бюджеты по городам</h2>
      </div>
      <div class="avg-grid">
        <div class="avg-card">
          <div class="avg-card-label"><span class="avg-dot red"></span> Самые дорогие</div>
          <div class="avg-row"><span class="avg-city">Москва</span><span class="avg-price">1 800 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Сочи</span><span class="avg-price">1 650 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Санкт-Петербург</span><span class="avg-price">1 450 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Казань</span><span class="avg-price">1 100 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Краснодар</span><span class="avg-price">1 050 000 ₽</span></div>
          <p class="avg-note">на 50 гостей · лето</p>
        </div>
        <div class="avg-card">
          <div class="avg-card-label"><span class="avg-dot gray"></span> Более доступные</div>
          <div class="avg-row"><span class="avg-city">Елец</span><span class="avg-price">480 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Липецк</span><span class="avg-price">620 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Тула</span><span class="avg-price">680 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Воронеж</span><span class="avg-price">750 000 ₽</span></div>
          <div class="avg-row"><span class="avg-city">Ярославль</span><span class="avg-price">720 000 ₽</span></div>
          <p class="avg-note">на 50 гостей · лето</p>
        </div>
      </div>
    </section>
  
    <!-- CATALOG -->
    <section id="catalog-section">
      <div class="hero" style="margin-bottom:32px">
        <p class="hero-label">Подрядчики по всей России</p>
        <h1 style="font-size:clamp(28px,5vw,40px)">Каталог подрядчиков</h1>
        <p class="hero-desc">Фильтруйте по городу, типу услуги и готовности приехать</p>
      </div>

      <div class="catalog-filters">
        <select id="filter-type" class="filter-select">
          <option value="">Все услуги</option>
          <option value="ведущий">Ведущий</option>
          <option value="фото">Фотограф</option>
          <option value="видео">Видеограф</option>
          <option value="декор">Декор / флористика</option>
          <option value="площадка">Площадка</option>
          <option value="кейтеринг">Кейтеринг</option>
          <option value="dj">DJ</option>
          <option value="шоу">Шоу-программа</option>
        </select>
        <input id="filter-city" class="filter-input" type="text" placeholder="Город..." style="width:160px" />
        <button type="button" class="filter-chip active" data-travel="all">Все</button>
        <button type="button" class="filter-chip" data-travel="local">В городе</button>
        <button type="button" class="filter-chip" data-travel="travel">Готов приехать</button>
        <select id="filter-price" class="filter-select">
          <option value="">Любая цена</option>
          <option value="0-30000">до 30 000 ₽</option>
          <option value="30000-80000">30–80 тыс</option>
          <option value="80000-150000">80–150 тыс</option>
          <option value="150000">от 150 000 ₽</option>
        </select>
      </div>
      <div id="catalog-count" class="catalog-count"></div>
      <div id="contractors-grid" class="contractors-grid"></div>
    </section>

  
    <!-- PHOTO AI -->
    <section id="photo-section">
      <div class="hero" style="margin-bottom:36px">
        <p class="hero-label">AI-подбор</p>
        <h1 style="font-size:clamp(28px,5vw,42px)">Сборка свадьбы по фото</h1>
        <p class="hero-desc">Загрузите референсы или выберите стиль — подберём подрядчиков с похожими работами</p>
      </div>

      <div class="photo-drop" id="photo-drop">
        <div style="font-size:32px;opacity:0.5">📷</div>
        <p>Перетащите 3–5 фото сюда или нажмите для выбора</p>
        <p class="hint">JPG, PNG · до 5 файлов · в MVP используется распознавание стиля</p>
        <input type="file" id="photo-input" accept="image/*" multiple style="display:none" />
      </div>

      <p style="text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;color:var(--ink-400);margin-bottom:14px">или выберите стиль</p>
      <div class="style-presets" id="style-presets">
        <button type="button" class="style-preset" data-style="рустик">Рустик</button>
        <button type="button" class="style-preset" data-style="минимализм">Минимализм</button>
        <button type="button" class="style-preset" data-style="классика">Классика</button>
        <button type="button" class="style-preset" data-style="бохо">Бохо</button>
        <button type="button" class="style-preset" data-style="гламур">Гламур</button>
        <button type="button" class="style-preset" data-style="эко">Эко / природный</button>
      </div>

      <div class="photo-city-row">
        <div class="field">
          <label>Город свадьбы</label>
          <input id="photo-city" type="text" placeholder="Например, Елец или Москва" />
        </div>
        <button type="button" class="btn-primary" id="photo-search-btn" style="width:auto;padding:14px 28px;margin:0">Подобрать</button>
      </div>

      <div id="photo-results" style="display:none">
        <h2 class="photo-results-title" id="photo-results-title"></h2>
        <p class="photo-results-sub" id="photo-results-sub"></p>
        <div id="match-grid" class="match-grid"></div>
      </div>
    </section>

  
    <section id="map-section">
      <div class="hero anim-fade-up" style="margin-bottom:32px">
        <p class="hero-label">География</p>
        <h1 style="font-size:clamp(28px,5vw,42px)">Карта локаций и подрядчиков</h1>
        <p class="hero-desc">Выберите город на карте — увидите площадки и специалистов в регионе</p>
      </div>
      <div class="map-filters anim-fade-up">
        <button type="button" class="filter-chip active" data-map-type="all">Все</button>
        <button type="button" class="filter-chip" data-map-type="площадка">Площадки</button>
        <button type="button" class="filter-chip" data-map-type="ведущий">Ведущие</button>
        <button type="button" class="filter-chip" data-map-type="фото">Фото</button>
        <button type="button" class="filter-chip" data-map-type="декор">Декор</button>
      </div>
      <div class="map-wrap anim-scale">
        <div class="map-canvas" id="map-canvas"></div>
        <div class="map-sidebar" id="map-sidebar">
          <div class="map-city-title">Выберите город</div>
          <div class="map-city-meta">Нажмите на точку на карте</div>
        </div>
      </div>
    </section>

  
    <section id="cart-section">
      <div class="hero anim-fade-up" style="margin-bottom:36px">
        <p class="hero-label">Ваш проект</p>
        <h1 style="font-size:clamp(28px,5vw,42px)">Моя свадьба</h1>
        <p class="hero-desc">Сохранённые подрядчики и блоки сценария. Данные хранятся в этом браузере.</p>
      </div>
      <div id="cart-content"></div>
    </section>
    <div class="toast-stack" id="toast-stack"></div>

  
    <!-- AUTH -->
    <section id="auth-section">
      <div class="hero anim-fade-up" style="margin-bottom:28px">
        <p class="hero-label">Аккаунт</p>
        <h1 style="font-size:clamp(28px,5vw,40px)">Вход и регистрация</h1>
      </div>
      <div class="auth-card anim-scale">
        <div class="auth-tabs">
          <button type="button" class="auth-tab active" data-auth-mode="login">Вход</button>
          <button type="button" class="auth-tab" data-auth-mode="register">Регистрация</button>
        </div>
        <div class="auth-roles" id="auth-roles">
          <div class="auth-role active" data-role="pair">Пара<small>Сценарий и сметы</small></div>
          <div class="auth-role" data-role="contractor">Подрядчик<small>Заявки и анкета</small></div>
        </div>
        <form id="auth-form">
          <div class="field">
            <label>Имя</label>
            <input id="auth-name" type="text" placeholder="Как к вам обращаться" required />
          </div>
          <div class="field">
            <label>Email</label>
            <input id="auth-email" type="email" placeholder="you@email.ru" required />
          </div>
          <div class="field">
            <label>Пароль</label>
            <input id="auth-pass" type="password" placeholder="Минимум 6 символов" required minlength="6" />
          </div>
          <div class="field" id="auth-city-field" style="display:none">
            <label>Город работы</label>
            <input id="auth-city" type="text" placeholder="Москва, Казань..." />
          </div>
          <button type="submit" class="btn-primary" id="auth-submit">Войти</button>
          <p class="form-note" id="auth-hint">Демо-режим: данные только в вашем браузере</p>
          <div class="auth-divider">безопасно</div>
          <p class="form-note" style="margin-top:0">Нажимая кнопку, вы принимаете политику конфиденциальности</p>
        </form>
      </div>
    </section>

    <!-- CABINET -->
    <section id="cabinet-section">
      <div class="hero anim-fade-up" style="margin-bottom:28px">
        <p class="hero-label">Кабинет</p>
        <h1 style="font-size:clamp(26px,5vw,36px)" id="cab-title">Личный кабинет</h1>
      </div>
      <div class="cab-grid">
        <div class="cab-nav anim-fade-up" id="cab-nav"></div>
        <div class="cab-panel anim-fade-up" id="cab-panel"></div>
      </div>
    </section>

    <!-- KNOWLEDGE -->
    <section id="knowledge-section">
      <div class="hero anim-fade-up" style="margin-bottom:36px">
        <p class="hero-label">Полезно знать</p>
        <h1 style="font-size:clamp(28px,5vw,42px)">База знаний</h1>
        <p class="hero-desc">Сезонность, экономия и особенности свадеб в регионах</p>
      </div>
      <div class="kb-grid stagger" id="kb-grid"></div>
    </section>

  
    <section id="admin-section">
      <div class="hero anim-fade-up" style="margin-bottom:24px">
        <p class="hero-label">Developer</p>
        <h1 style="font-size:clamp(26px,5vw,36px)">Панель разработчика</h1>
        <p class="hero-desc">Управление подрядчиками, статьями и пользователями без правки кода</p>
      </div>
      <div class="admin-grid">
        <div class="admin-nav anim-fade-up" id="admin-nav">
          <button type="button" class="active" data-admin="contractors">Подрядчики</button>
          <button type="button" data-admin="knowledge">База знаний</button>
          <button type="button" data-admin="users">Пользователи</button>
          <button type="button" data-admin="stats">Сводка</button>
        </div>
        <div class="admin-panel anim-fade-up" id="admin-panel"></div>
      </div>
    </section>

  
    <section id="cases-section">
      <div class="hero anim-fade-up" style="margin-bottom:36px">
        <p class="hero-label">Реальные истории</p>
        <h1 style="font-size:clamp(28px,5vw,42px)">Кейсы свадеб по регионам</h1>
        <p class="hero-desc">Примеры бюджетов и форматов — от камерных до крупных торжеств</p>
      </div>
      <div class="cases-grid stagger" id="cases-grid"></div>
    </section>

    <div id="booking-modal" class="modal-overlay" onclick="if(event.target===this)closeBooking()">
      <div class="modal">
        <h2>Заявка подрядчику</h2>
        <div class="modal-body booking-form">
          <p id="booking-target" style="margin-bottom:16px;color:var(--ink-500)"></p>
          <div class="field">
            <label>Ваше имя</label>
            <input id="booking-name" type="text" placeholder="Имя" />
          </div>
          <div class="field">
            <label>Телефон или Telegram</label>
            <input id="booking-contact" type="text" placeholder="+7… или @username" />
          </div>
          <div class="field">
            <label>Дата свадьбы</label>
            <input id="booking-date" type="date" />
          </div>
          <div class="field">
            <label>Комментарий</label>
            <input id="booking-note" type="text" placeholder="Город, формат, пожелания" />
          </div>
        </div>
        <button class="modal-close" type="button" id="booking-send">Отправить заявку</button>
        <button class="modal-close" type="button" onclick="closeBooking()" style="margin-top:8px;background:transparent;color:var(--ink-500);border:1px solid var(--cream-300)">Отмена</button>
      </div>
    </div>

  
    <section id="api-section">
      <div class="hero anim-fade-up" style="margin-bottom:28px">
        <p class="hero-label">Для разработки</p>
        <h1 style="font-size:clamp(26px,5vw,36px)">API и архитектура MVP</h1>
        <p class="hero-desc">Черновик эндпоинтов под NestJS / Next API — чтобы вынести прототип на бэкенд</p>
      </div>
      <div style="max-width:800px;margin:0 auto" class="anim-fade-up">
        <div class="api-block">
<span class="c">POST</span> /api/auth/register<br>
<span class="c">POST</span> /api/auth/login<br>
<span class="c">GET</span>  /api/me<br><br>
<span class="c">POST</span> /api/calculate  { city, date, guests, budget }<br>
<span class="c">GET</span>  /api/scenarios?city=&amp;budget=<br>
<span class="c">GET</span>  /api/contractors?city=&amp;type=&amp;travel=<br>
<span class="c">GET</span>  /api/contractors/:id<br>
<span class="c">POST</span> /api/requests  { contractorId, date, contact, note }<br>
<span class="c">GET</span>  /api/requests/my<br>
<span class="c">POST</span> /api/match-by-photo  multipart + city<br>
<span class="c">POST</span> /api/payments/premium<br>
<span class="c">GET</span>  /api/admin/contractors<br>
<span class="c">PATCH</span> /api/admin/contractors/:id
        </div>
        <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-500);line-height:1.6">
          Стек: Next.js + NestJS + PostgreSQL + Prisma · Карты: Яндекс.Карты · Платежи: ЮKassa · Файлы: S3 · AI: Vision/CLIP<br>
          Почта уведомлений: <strong>dreamwedding@internet.ru</strong>
        </p>
      </div>
    </section>

    <div id="premium-modal" class="modal-overlay" onclick="if(event.target===this)document.getElementById('premium-modal').classList.remove('open')">
      <div class="modal" style="max-width:640px">
        <h2>Премиум для подрядчиков</h2>
        <div class="modal-body">
          <div class="pay-plans">
            <div class="pay-plan">
              <h4>Старт</h4>
              <div class="price">0 ₽</div>
              <ul><li>Базовая карточка</li><li>До 5 заявок/мес</li></ul>
            </div>
            <div class="pay-plan featured">
              <h4>PRO</h4>
              <div class="price">4 900 ₽/мес</div>
              <ul><li>Выше в каталоге</li><li>Безлимит заявок</li><li>Аналитика</li><li>Приоритет в «По фото»</li></ul>
              <button type="button" class="btn-primary" style="margin-top:14px" onclick="mockPay('PRO')">Оплатить (демо)</button>
            </div>
            <div class="pay-plan">
              <h4>Business</h4>
              <div class="price">9 900 ₽/мес</div>
              <ul><li>Всё из PRO</li><li>Несколько филиалов</li><li>Менеджер</li></ul>
              <button type="button" class="admin-btn primary" style="margin-top:14px;width:100%" onclick="mockPay('Business')">Оплатить (демо)</button>
            </div>
          </div>
        </div>
        <button class="modal-close" type="button" onclick="document.getElementById('premium-modal').classList.remove('open')" style="margin-top:12px;background:transparent;color:var(--ink-500);border:1px solid var(--cream-300)">Закрыть</button>
      </div>
    </div>

  </main>

  <footer>
    <div class="footer-grid">
      <div class="footer-brand-block">
        <div class="footer-logo">Свадебный калькулятор PRO</div>
        <p>Точный расчёт бюджета и подбор подрядчиков по всей России. От камерных свадеб до торжеств на 150+ гостей.</p>
      </div>
      <div class="footer-col">
        <h4>Сервис</h4>
        <button type="button" onclick="showView('calc')">Калькулятор</button>
        <button type="button" onclick="showView('catalog')">Каталог</button>
        <button type="button" onclick="showView('knowledge')">База знаний</button>
        <button type="button" onclick="showView('cases')">Кейсы</button>
        <button type="button" onclick="showView('auth')">Войти</button>
        <button type="button" onclick="showView('api')">API</button>
        <button type="button" onclick="showView('cart')">Моя свадьба</button>
        <button type="button" onclick="showView('map')">Карта</button>
      </div>
      <div class="footer-col">
        <h4>Документы</h4>
        <button type="button" onclick="openModal('privacy')">Политика конфиденциальности</button>
        <button type="button" onclick="openModal('terms')">Пользовательское соглашение</button>
        <button type="button" onclick="openModal('data')">Обработка персональных данных</button>
      </div>
      <div class="footer-col">
        <h4>Контакты</h4>
        <a href="mailto:dreamwedding@internet.ru">dreamwedding@internet.ru</a>
        <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;color:var(--ink-500)">Для подрядчиков: партнёрство</span>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 Свадебный калькулятор PRO. Все права защищены.</div>
      <div class="footer-dev">
        <span class="footer-dev-label">Designed &amp; built by</span>
        <span class="footer-dev-name">Igor Minasyan</span>
      </div>
    </div>
  </footer>

  <!-- Modals -->
  <div id="modal-privacy" class="modal-overlay" onclick="if(event.target===this)closeModal('privacy')">
    <div class="modal">
      <h2>Политика конфиденциальности</h2>
      <div class="modal-body">
        <p>Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сервиса «Свадебный калькулятор PRO».</p>
        <h3>1. Какие данные мы собираем</h3>
        <p>Город, дата свадьбы, количество гостей, бюджет, а также данные, которые вы добровольно указываете при обращении к подрядчикам (имя, телефон, email).</p>
        <h3>2. Цели обработки</h3>
        <p>Расчёт сметы, подбор сценария и подрядчиков, связь с вами по заявкам, улучшение сервиса.</p>
        <h3>3. Передача данных</h3>
        <p>Данные заявки могут передаваться выбранному подрядчику исключительно для обработки вашего запроса. Мы не продаём персональные данные третьим лицам.</p>
        <h3>4. Хранение и защита</h3>
        <p>Данные хранятся на защищённых серверах. Доступ ограничен. Срок хранения — не дольше, чем требуется для целей обработки, либо до отзыва согласия.</p>
        <h3>5. Ваши права</h3>
        <p>Вы можете запросить доступ, исправление или удаление своих данных, написав на dreamwedding@internet.ru.</p>
        <p style="margin-top:16px;font-size:12px;color:var(--ink-400)">Документ носит ознакомительный характер для MVP. Финальная редакция будет утверждена при запуске продакшена.</p>
      </div>
      <button class="modal-close" onclick="closeModal('privacy')">Закрыть</button>
    </div>
  </div>

  <div id="modal-terms" class="modal-overlay" onclick="if(event.target===this)closeModal('terms')">
    <div class="modal">
      <h2>Пользовательское соглашение</h2>
      <div class="modal-body">
        <p>Используя сервис «Свадебный калькулятор PRO», вы соглашаетесь с условиями ниже.</p>
        <h3>1. Описание сервиса</h3>
        <p>Сервис предоставляет ориентировочный расчёт бюджета свадьбы, сценарии дня и каталог подрядчиков. Цены и наличие услуг носят справочный характер и могут отличаться от финальных предложений подрядчиков.</p>
        <h3>2. Ограничение ответственности</h3>
        <p>Мы не несём ответственность за качество услуг подрядчиков, изменение цен и отмену бронирований. Договор заключается напрямую между вами и подрядчиком.</p>
        <h3>3. Интеллектуальная собственность</h3>
        <p>Дизайн, тексты, логика расчётов и программный код сервиса защищены. Копирование без разрешения запрещено.</p>
        <h3>4. Изменения</h3>
        <p>Мы можем обновлять соглашение. Актуальная версия всегда доступна на сайте.</p>
      </div>
      <button class="modal-close" onclick="closeModal('terms')">Закрыть</button>
    </div>
  </div>

  <div id="modal-data" class="modal-overlay" onclick="if(event.target===this)closeModal('data')">
    <div class="modal">
      <h2>Согласие на обработку персональных данных</h2>
      <div class="modal-body">
        <p>Отправляя заявку или используя формы сервиса, вы даёте согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>
        <p>Оператор: владелец сервиса «Свадебный калькулятор PRO».</p>
        <p>Цели: предоставление расчётов, подбор подрядчиков, обратная связь, аналитика использования сервиса.</p>
        <p>Вы можете отозвать согласие, направив запрос на dreamwedding@internet.ru.</p>
      </div>
      <button class="modal-close" onclick="closeModal('data')">Закрыть</button>
    </div>
  </div>


<script>
const CITIES = [
  { name: "Москва", region: "Москва", size: "mega", coefficient: 1.7 },
  { name: "Санкт-Петербург", region: "Санкт-Петербург", size: "mega", coefficient: 1.55 },
  { name: "Сочи", region: "Краснодарский край", size: "mega", coefficient: 1.65 },
  { name: "Казань", region: "Татарстан", size: "million", coefficient: 1.25 },
  { name: "Екатеринбург", region: "Свердловская область", size: "million", coefficient: 1.2 },
  { name: "Новосибирск", region: "Новосибирская область", size: "million", coefficient: 1.15 },
  { name: "Нижний Новгород", region: "Нижегородская область", size: "million", coefficient: 1.15 },
  { name: "Краснодар", region: "Краснодарский край", size: "million", coefficient: 1.3 },
  { name: "Челябинск", region: "Челябинская область", size: "million", coefficient: 1.1 },
  { name: "Самара", region: "Самарская область", size: "million", coefficient: 1.15 },
  { name: "Уфа", region: "Башкортостан", size: "million", coefficient: 1.1 },
  { name: "Ростов-на-Дону", region: "Ростовская область", size: "million", coefficient: 1.2 },
  { name: "Красноярск", region: "Красноярский край", size: "million", coefficient: 1.15 },
  { name: "Пермь", region: "Пермский край", size: "million", coefficient: 1.1 },
  { name: "Воронеж", region: "Воронежская область", size: "million", coefficient: 1.1 },
  { name: "Волгоград", region: "Волгоградская область", size: "million", coefficient: 1.1 },
  { name: "Омск", region: "Омская область", size: "million", coefficient: 1.1 },
  { name: "Тюмень", region: "Тюменская область", size: "million", coefficient: 1.2 },
  { name: "Саратов", region: "Саратовская область", size: "million", coefficient: 1.05 },
  { name: "Тольятти", region: "Самарская область", size: "million", coefficient: 1.0 },
  { name: "Ижевск", region: "Удмуртия", size: "million", coefficient: 1.0 },
  { name: "Барнаул", region: "Алтайский край", size: "million", coefficient: 1.05 },
  { name: "Ульяновск", region: "Ульяновская область", size: "million", coefficient: 1.0 },
  { name: "Иркутск", region: "Иркутская область", size: "million", coefficient: 1.1 },
  { name: "Хабаровск", region: "Хабаровский край", size: "million", coefficient: 1.2 },
  { name: "Ярославль", region: "Ярославская область", size: "million", coefficient: 1.05 },
  { name: "Владивосток", region: "Приморский край", size: "million", coefficient: 1.25 },
  { name: "Махачкала", region: "Дагестан", size: "million", coefficient: 0.95 },
  { name: "Томск", region: "Томская область", size: "million", coefficient: 1.1 },
  { name: "Оренбург", region: "Оренбургская область", size: "million", coefficient: 1.0 },
  { name: "Кемерово", region: "Кемеровская область", size: "million", coefficient: 1.0 },
  { name: "Новокузнецк", region: "Кемеровская область", size: "million", coefficient: 0.95 },
  { name: "Рязань", region: "Рязанская область", size: "million", coefficient: 1.05 },
  { name: "Астрахань", region: "Астраханская область", size: "million", coefficient: 1.0 },
  { name: "Пенза", region: "Пензенская область", size: "million", coefficient: 0.95 },
  { name: "Липецк", region: "Липецкая область", size: "million", coefficient: 0.95 },
  { name: "Киров", region: "Кировская область", size: "million", coefficient: 0.95 },
  { name: "Чебоксары", region: "Чувашия", size: "million", coefficient: 0.95 },
  { name: "Калининград", region: "Калининградская область", size: "million", coefficient: 1.2 },
  { name: "Тула", region: "Тульская область", size: "million", coefficient: 1.0 },
  { name: "Курск", region: "Курская область", size: "million", coefficient: 0.95 },
  { name: "Ставрополь", region: "Ставропольский край", size: "million", coefficient: 1.1 },
  { name: "Улан-Удэ", region: "Бурятия", size: "million", coefficient: 1.0 },
  { name: "Тверь", region: "Тверская область", size: "million", coefficient: 1.0 },
  { name: "Магнитогорск", region: "Челябинская область", size: "million", coefficient: 0.95 },
  { name: "Иваново", region: "Ивановская область", size: "million", coefficient: 0.9 },
  { name: "Брянск", region: "Брянская область", size: "million", coefficient: 0.95 },
  { name: "Белгород", region: "Белгородская область", size: "million", coefficient: 1.0 },
  { name: "Владимир", region: "Владимирская область", size: "regional", coefficient: 0.95 },
  { name: "Архангельск", region: "Архангельская область", size: "regional", coefficient: 1.05 },
  { name: "Смоленск", region: "Смоленская область", size: "regional", coefficient: 0.95 },
  { name: "Калуга", region: "Калужская область", size: "regional", coefficient: 1.0 },
  { name: "Чита", region: "Забайкальский край", size: "regional", coefficient: 1.0 },
  { name: "Орёл", region: "Орловская область", size: "regional", coefficient: 0.9 },
  { name: "Волжский", region: "Волгоградская область", size: "regional", coefficient: 0.9 },
  { name: "Череповец", region: "Вологодская область", size: "regional", coefficient: 0.95 },
  { name: "Мурманск", region: "Мурманская область", size: "regional", coefficient: 1.15 },
  { name: "Сургут", region: "ХМАО", size: "regional", coefficient: 1.25 },
  { name: "Вологда", region: "Вологодская область", size: "regional", coefficient: 0.95 },
  { name: "Саранск", region: "Мордовия", size: "regional", coefficient: 0.9 },
  { name: "Якутск", region: "Якутия", size: "regional", coefficient: 1.3 },
  { name: "Тамбов", region: "Тамбовская область", size: "regional", coefficient: 0.9 },
  { name: "Грозный", region: "Чечня", size: "regional", coefficient: 0.9 },
  { name: "Стерлитамак", region: "Башкортостан", size: "regional", coefficient: 0.9 },
  { name: "Кострома", region: "Костромская область", size: "regional", coefficient: 0.9 },
  { name: "Петрозаводск", region: "Карелия", size: "regional", coefficient: 1.0 },
  { name: "Нижневартовск", region: "ХМАО", size: "regional", coefficient: 1.2 },
  { name: "Йошкар-Ола", region: "Марий Эл", size: "regional", coefficient: 0.9 },
  { name: "Новороссийск", region: "Краснодарский край", size: "regional", coefficient: 1.15 },
  { name: "Таганрог", region: "Ростовская область", size: "regional", coefficient: 0.95 },
  { name: "Комсомольск-на-Амуре", region: "Хабаровский край", size: "regional", coefficient: 1.0 },
  { name: "Сыктывкар", region: "Коми", size: "regional", coefficient: 1.0 },
  { name: "Нальчик", region: "Кабардино-Балкария", size: "regional", coefficient: 0.9 },
  { name: "Шахты", region: "Ростовская область", size: "regional", coefficient: 0.85 },
  { name: "Нижний Тагил", region: "Свердловская область", size: "regional", coefficient: 0.9 },
  { name: "Братск", region: "Иркутская область", size: "regional", coefficient: 0.95 },
  { name: "Дзержинск", region: "Нижегородская область", size: "regional", coefficient: 0.9 },
  { name: "Орск", region: "Оренбургская область", size: "regional", coefficient: 0.85 },
  { name: "Ангарск", region: "Иркутская область", size: "regional", coefficient: 0.95 },
  { name: "Благовещенск", region: "Амурская область", size: "regional", coefficient: 1.05 },
  { name: "Псков", region: "Псковская область", size: "regional", coefficient: 0.9 },
  { name: "Бийск", region: "Алтайский край", size: "regional", coefficient: 0.9 },
  { name: "Прокопьевск", region: "Кемеровская область", size: "regional", coefficient: 0.85 },
  { name: "Рыбинск", region: "Ярославская область", size: "regional", coefficient: 0.9 },
  { name: "Балаково", region: "Саратовская область", size: "regional", coefficient: 0.85 },
  { name: "Северодвинск", region: "Архангельская область", size: "regional", coefficient: 1.0 },
  { name: "Петропавловск-Камчатский", region: "Камчатский край", size: "regional", coefficient: 1.35 },
  { name: "Абакан", region: "Хакасия", size: "regional", coefficient: 0.95 },
  { name: "Норильск", region: "Красноярский край", size: "regional", coefficient: 1.4 },
  { name: "Сызрань", region: "Самарская область", size: "regional", coefficient: 0.85 },
  { name: "Волгодонск", region: "Ростовская область", size: "regional", coefficient: 0.9 },
  { name: "Каменск-Уральский", region: "Свердловская область", size: "regional", coefficient: 0.9 },
  { name: "Златоуст", region: "Челябинская область", size: "regional", coefficient: 0.85 },
  { name: "Электросталь", region: "Московская область", size: "regional", coefficient: 1.1 },
  { name: "Альметьевск", region: "Татарстан", size: "regional", coefficient: 0.95 },
  { name: "Миасс", region: "Челябинская область", size: "regional", coefficient: 0.9 },
  { name: "Находка", region: "Приморский край", size: "regional", coefficient: 1.1 },
  { name: "Салават", region: "Башкортостан", size: "regional", coefficient: 0.9 },
  { name: "Ковров", region: "Владимирская область", size: "regional", coefficient: 0.9 },
  { name: "Березники", region: "Пермский край", size: "regional", coefficient: 0.9 },
  { name: "Рубцовск", region: "Алтайский край", size: "regional", coefficient: 0.85 },
  { name: "Майкоп", region: "Адыгея", size: "regional", coefficient: 0.9 },
  { name: "Коломна", region: "Московская область", size: "regional", coefficient: 1.05 },
  { name: "Копейск", region: "Челябинская область", size: "regional", coefficient: 0.85 },
  { name: "Пятигорск", region: "Ставропольский край", size: "regional", coefficient: 1.1 },
  { name: "Одинцово", region: "Московская область", size: "regional", coefficient: 1.3 },
  { name: "Королёв", region: "Московская область", size: "regional", coefficient: 1.25 },
  { name: "Хасавюрт", region: "Дагестан", size: "regional", coefficient: 0.85 },
  { name: "Новочеркасск", region: "Ростовская область", size: "regional", coefficient: 0.95 },
  { name: "Батайск", region: "Ростовская область", size: "regional", coefficient: 0.95 },
  { name: "Кисловодск", region: "Ставропольский край", size: "regional", coefficient: 1.15 },
  { name: "Невинномысск", region: "Ставропольский край", size: "regional", coefficient: 0.95 },
  { name: "Ессентуки", region: "Ставропольский край", size: "regional", coefficient: 1.1 },
  { name: "Раменское", region: "Московская область", size: "regional", coefficient: 1.15 },
  { name: "Первоуральск", region: "Свердловская область", size: "regional", coefficient: 0.95 },
  { name: "Новомосковск", region: "Тульская область", size: "regional", coefficient: 0.9 },
  { name: "Орехово-Зуево", region: "Московская область", size: "regional", coefficient: 1.05 },
  { name: "Долгопрудный", region: "Московская область", size: "regional", coefficient: 1.25 },
  { name: "Нефтекамск", region: "Башкортостан", size: "regional", coefficient: 0.9 },
  { name: "Черкесск", region: "Карачаево-Черкесия", size: "regional", coefficient: 0.9 },
  { name: "Дербент", region: "Дагестан", size: "regional", coefficient: 0.9 },
  { name: "Каспийск", region: "Дагестан", size: "regional", coefficient: 0.9 },
  { name: "Нефтеюганск", region: "ХМАО", size: "regional", coefficient: 1.2 },
  { name: "Балашиха", region: "Московская область", size: "regional", coefficient: 1.2 },
  { name: "Химки", region: "Московская область", size: "regional", coefficient: 1.25 },
  { name: "Подольск", region: "Московская область", size: "regional", coefficient: 1.15 },
  { name: "Мытищи", region: "Московская область", size: "regional", coefficient: 1.2 },
  { name: "Люберцы", region: "Московская область", size: "regional", coefficient: 1.15 },
  { name: "Красногорск", region: "Московская область", size: "regional", coefficient: 1.25 },
  { name: "Энгельс", region: "Саратовская область", size: "regional", coefficient: 0.9 },
  { name: "Новоуральск", region: "Свердловская область", size: "regional", coefficient: 1.0 },
  { name: "Елец", region: "Липецкая область", size: "small", coefficient: 0.75, nearestBigCity: "Липецк", distanceToBig: 70 },
  { name: "Ефремов", region: "Тульская область", size: "small", coefficient: 0.7, nearestBigCity: "Тула", distanceToBig: 90 },
  { name: "Мичуринск", region: "Тамбовская область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 110 },
  { name: "Задонск", region: "Липецкая область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 55 },
  { name: "Данков", region: "Липецкая область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 85 },
  { name: "Грязи", region: "Липецкая область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 30 },
  { name: "Лебедянь", region: "Липецкая область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 60 },
  { name: "Усмань", region: "Липецкая область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 65 },
  { name: "Чаплыгин", region: "Липецкая область", size: "small", coefficient: 0.7, nearestBigCity: "Липецк", distanceToBig: 85 },
  { name: "Скопин", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 90 },
  { name: "Касимов", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 160 },
  { name: "Сасово", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 180 },
  { name: "Ряжск", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 110 },
  { name: "Кораблино", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 90 },
  { name: "Михайлов", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 70 },
  { name: "Новомичуринск", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 80 },
  { name: "Шацк", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 150 },
  { name: "Спасск-Рязанский", region: "Рязанская область", size: "small", coefficient: 0.7, nearestBigCity: "Рязань", distanceToBig: 60 },
  { name: "Георгиевск", region: "Ставропольский край", size: "small", coefficient: 0.8, nearestBigCity: "Ставрополь", distanceToBig: 150 },
  { name: "Минеральные Воды", region: "Ставропольский край", size: "small", coefficient: 0.85, nearestBigCity: "Пятигорск", distanceToBig: 20 },
  { name: "Буденновск", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 180 },
  { name: "Изобильный", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 60 },
  { name: "Светлоград", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 100 },
  { name: "Зеленокумск", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 140 },
  { name: "Благодарный", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 130 },
  { name: "Новоалександровск", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 90 },
  { name: "Ипатово", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 120 },
  { name: "Нефтекумск", region: "Ставропольский край", size: "small", coefficient: 0.75, nearestBigCity: "Ставрополь", distanceToBig: 250 },
];


const CONTRACTORS = [
  { id:1, name:"Никита Волков", type:"ведущий", city:"Москва", price:105000, rating:4.6, travel:true, radius:150, tags:["душевная", "юмор"] },
  { id:2, name:"Татьяна Лебедев", type:"ведущий", city:"Москва", price:145000, rating:4.7, travel:true, radius:100, tags:["юмор", "интерактив"] },
  { id:3, name:"Олег Николаев", type:"ведущий", city:"Москва", price:147000, rating:4.5, travel:true, radius:150, tags:["душевная", "классика"] },
  { id:4, name:"Дарья Смирнов", type:"ведущий", city:"Москва", price:127000, rating:4.8, travel:true, radius:100, tags:["интерактив", "энергия"] },
  { id:5, name:"Проект «Событие»", type:"фото", city:"Москва", price:93000, rating:4.5, travel:true, radius:80, tags:["нежность", "арт"] },
  { id:6, name:"Екатерина Борисов", type:"фото", city:"Москва", price:138000, rating:4.8, travel:true, radius:200, tags:["репортаж", "нежность"] },
  { id:7, name:"Павел Андреев", type:"фото", city:"Москва", price:104000, rating:4.9, travel:true, radius:80, tags:["портрет", "нежность"] },
  { id:8, name:"Агентство «Версаль»", type:"видео", city:"Москва", price:125000, rating:4.7, travel:true, radius:150, tags:["репортаж", "дроны"] },
  { id:9, name:"Проект «Дон»", type:"декор", city:"Москва", price:168000, rating:4.9, travel:true, radius:50, tags:["премиум", "арки"] },
  { id:10, name:"Проект «Люкс»", type:"декор", city:"Москва", price:218000, rating:4.7, travel:true, radius:80, tags:["классика", "рустик"] },
  { id:11, name:"Банкет-холл «Элит»", type:"площадка", city:"Москва", price:216000, rating:4.9, travel:false, radius:0, tags:["до 80 гостей", "терраса"] },
  { id:12, name:"Денис Соловьёв", type:"dj", city:"Москва", price:60000, rating:4.5, travel:true, radius:200, tags:["ретро", "живой звук"] },
  { id:13, name:"Арт Гранд", type:"шоу", city:"Москва", price:81000, rating:4.9, travel:true, radius:300, tags:["артисты", "балет"] },
  { id:14, name:"Вкус Империя", type:"кейтеринг", city:"Москва", price:5400, rating:4.9, travel:true, radius:30, tags:["премиум", "банкет"] },
  { id:15, name:"Никита Новиков", type:"ведущий", city:"Санкт-Петербург", price:150000, rating:4.6, travel:true, radius:250, tags:["классика", "юмор"] },
  { id:16, name:"Наталья Фёдоров", type:"ведущий", city:"Санкт-Петербург", price:146000, rating:5.0, travel:true, radius:300, tags:["тёплая", "классика"] },
  { id:17, name:"Полина Зайцев", type:"фото", city:"Санкт-Петербург", price:148000, rating:4.9, travel:true, radius:150, tags:["репортаж", "нежность"] },
  { id:18, name:"Олег Волков", type:"фото", city:"Санкт-Петербург", price:172000, rating:4.9, travel:true, radius:150, tags:["арт", "портрет"] },
  { id:19, name:"Бюро «Нева»", type:"видео", city:"Санкт-Петербург", price:154000, rating:4.8, travel:true, radius:100, tags:["фильм", "клип"] },
  { id:20, name:"Студия «Волга»", type:"декор", city:"Санкт-Петербург", price:182000, rating:4.7, travel:false, radius:120, tags:["рустик", "арки"] },
  { id:21, name:"Студия «Гармония»", type:"декор", city:"Санкт-Петербург", price:324000, rating:4.8, travel:false, radius:150, tags:["флористика", "премиум"] },
  { id:22, name:"Команда «Гранд»", type:"декор", city:"Санкт-Петербург", price:268000, rating:4.7, travel:true, radius:120, tags:["премиум", "классика"] },
  { id:23, name:"Банкет-холл «Семейный»", type:"площадка", city:"Санкт-Петербург", price:476000, rating:4.9, travel:false, radius:0, tags:["вид", "лофт"] },
  { id:24, name:"Шатер «Лаванда»", type:"площадка", city:"Санкт-Петербург", price:391000, rating:4.7, travel:false, radius:0, tags:["до 150 гостей", "до 80 гостей"] },
  { id:25, name:"Дмитрий Васильев", type:"dj", city:"Санкт-Петербург", price:41000, rating:4.8, travel:true, radius:150, tags:["хиты", "танцы"] },
  { id:26, name:"Catering Момент", type:"кейтеринг", city:"Санкт-Петербург", price:4200, rating:4.8, travel:true, radius:30, tags:["фуршет", "премиум"] },
  { id:27, name:"Ксения Петров", type:"ведущий", city:"Казань", price:109000, rating:4.6, travel:true, radius:300, tags:["классика", "энергия"] },
  { id:28, name:"Тимур Степанов", type:"ведущий", city:"Казань", price:92000, rating:4.6, travel:true, radius:100, tags:["душевная", "энергия"] },
  { id:29, name:"Екатерина Алексеев", type:"ведущий", city:"Казань", price:92000, rating:4.7, travel:true, radius:100, tags:["душевная", "юмор"] },
  { id:30, name:"Алексей Фёдоров", type:"ведущий", city:"Казань", price:83000, rating:4.9, travel:true, radius:100, tags:["интерактив", "душевная"] },
  { id:31, name:"Виктория Алексеев", type:"фото", city:"Казань", price:63000, rating:4.6, travel:true, radius:120, tags:["репортаж", "драйв"] },
  { id:32, name:"Дарья Соколов", type:"фото", city:"Казань", price:123000, rating:5.0, travel:true, radius:80, tags:["репортаж", "портрет"] },
  { id:33, name:"Ателье «Эстетика»", type:"видео", city:"Казань", price:96000, rating:5.0, travel:true, radius:100, tags:["дроны", "клип"] },
  { id:34, name:"Бюро «Букет»", type:"декор", city:"Казань", price:133000, rating:4.7, travel:true, radius:150, tags:["арки", "классика"] },
  { id:35, name:"Бюро «Эстетика»", type:"декор", city:"Казань", price:74000, rating:4.8, travel:true, radius:120, tags:["флористика", "классика"] },
  { id:36, name:"Дворец «Семейный»", type:"площадка", city:"Казань", price:235000, rating:4.5, travel:false, radius:0, tags:["до 150 гостей", "банкет"] },
  { id:37, name:"Ресторан «Панорама»", type:"площадка", city:"Казань", price:252000, rating:4.4, travel:false, radius:0, tags:["лофт", "до 80 гостей"] },
  { id:38, name:"DJ Sky Андреев", type:"dj", city:"Казань", price:27000, rating:4.8, travel:true, radius:200, tags:["живой звук", "хиты"] },
  { id:39, name:"Catering Вдохновение", type:"кейтеринг", city:"Казань", price:4000, rating:4.5, travel:true, radius:80, tags:["национальная", "фуршет"] },
  { id:40, name:"Сергей Волков", type:"ведущий", city:"Екатеринбург", price:98000, rating:4.8, travel:true, radius:300, tags:["юмор", "душевная"] },
  { id:41, name:"Татьяна Петров", type:"ведущий", city:"Екатеринбург", price:104000, rating:4.6, travel:true, radius:200, tags:["юмор", "интерактив"] },
  { id:42, name:"Ольга Попов", type:"ведущий", city:"Екатеринбург", price:60000, rating:4.7, travel:true, radius:300, tags:["душевная", "тёплая"] },
  { id:43, name:"Сергей Зайцев", type:"фото", city:"Екатеринбург", price:53000, rating:5.0, travel:true, radius:120, tags:["нежность", "репортаж"] },
  { id:44, name:"Алина Кузнецов", type:"фото", city:"Екатеринбург", price:76000, rating:4.8, travel:true, radius:150, tags:["портрет", "нежность"] },
  { id:45, name:"Иван Лебедев", type:"видео", city:"Екатеринбург", price:126000, rating:4.7, travel:true, radius:150, tags:["клип", "дроны"] },
  { id:46, name:"Команда «Нева»", type:"видео", city:"Екатеринбург", price:78000, rating:4.6, travel:true, radius:150, tags:["дроны", "фильм"] },
  { id:47, name:"Агентство «Момент»", type:"декор", city:"Екатеринбург", price:98000, rating:4.8, travel:true, radius:80, tags:["минимализм", "арки"] },
  { id:48, name:"Шатер «Олива»", type:"площадка", city:"Екатеринбург", price:110000, rating:4.9, travel:false, radius:0, tags:["лофт", "вид"] },
  { id:49, name:"Марат Алексеев", type:"dj", city:"Екатеринбург", price:34000, rating:5.0, travel:true, radius:150, tags:["хиты", "танцы"] },
  { id:50, name:"Фаер Люкс", type:"шоу", city:"Екатеринбург", price:77000, rating:4.9, travel:true, radius:250, tags:["салют", "балет"] },
  { id:51, name:"Максим Фёдоров", type:"ведущий", city:"Новосибирск", price:44000, rating:4.9, travel:true, radius:150, tags:["интерактив", "энергия"] },
  { id:52, name:"Екатерина Попов", type:"ведущий", city:"Новосибирск", price:69000, rating:4.6, travel:true, radius:150, tags:["энергия", "тёплая"] },
  { id:53, name:"Марат Лебедев", type:"ведущий", city:"Новосибирск", price:75000, rating:4.7, travel:true, radius:300, tags:["энергия", "классика"] },
  { id:54, name:"Мария Волков", type:"ведущий", city:"Новосибирск", price:54000, rating:4.9, travel:true, radius:200, tags:["интерактив", "классика"] },
  { id:55, name:"Мастерская «Империя»", type:"фото", city:"Новосибирск", price:80000, rating:4.7, travel:true, radius:80, tags:["драйв", "портрет"] },
  { id:56, name:"Мастерская «Свет»", type:"фото", city:"Новосибирск", price:106000, rating:5.0, travel:true, radius:120, tags:["нежность", "драйв"] },
  { id:57, name:"Дом «Волга»", type:"фото", city:"Новосибирск", price:80000, rating:4.8, travel:true, radius:80, tags:["нежность", "арт"] },
  { id:58, name:"Бюро «Урал»", type:"видео", city:"Новосибирск", price:61000, rating:4.6, travel:true, radius:200, tags:["дроны", "фильм"] },
  { id:59, name:"Команда «Волга»", type:"видео", city:"Новосибирск", price:117000, rating:4.7, travel:true, radius:200, tags:["клип", "репортаж"] },
  { id:60, name:"Проект «Флора»", type:"декор", city:"Новосибирск", price:142000, rating:4.7, travel:true, radius:80, tags:["премиум", "минимализм"] },
  { id:61, name:"Команда «Дон»", type:"декор", city:"Новосибирск", price:81000, rating:4.6, travel:true, radius:120, tags:["флористика", "арки"] },
  { id:62, name:"Банкет-холл «Престиж»", type:"площадка", city:"Новосибирск", price:150000, rating:4.5, travel:false, radius:0, tags:["банкет", "лофт"] },
  { id:63, name:"Клуб «Речной»", type:"площадка", city:"Новосибирск", price:296000, rating:4.4, travel:false, radius:0, tags:["до 80 гостей", "до 150 гостей"] },
  { id:64, name:"DJ Lux Степанов", type:"dj", city:"Новосибирск", price:50000, rating:4.5, travel:true, radius:250, tags:["танцы", "ретро"] },
  { id:65, name:"Шоу Люкс", type:"шоу", city:"Новосибирск", price:94000, rating:4.5, travel:true, radius:200, tags:["фаер", "салют"] },
  { id:66, name:"Ирина Орлов", type:"ведущий", city:"Краснодар", price:116000, rating:4.7, travel:true, radius:250, tags:["классика", "душевная"] },
  { id:67, name:"Полина Орлов", type:"ведущий", city:"Краснодар", price:97000, rating:4.9, travel:true, radius:250, tags:["энергия", "тёплая"] },
  { id:68, name:"Тимур Захаров", type:"ведущий", city:"Краснодар", price:75000, rating:4.9, travel:true, radius:300, tags:["энергия", "интерактив"] },
  { id:69, name:"Алексей Смирнов", type:"фото", city:"Краснодар", price:74000, rating:4.7, travel:true, radius:80, tags:["портрет", "арт"] },
  { id:70, name:"Команда «Эстетика»", type:"фото", city:"Краснодар", price:48000, rating:4.7, travel:true, radius:150, tags:["арт", "драйв"] },
  { id:71, name:"Ирина Алексеев", type:"фото", city:"Краснодар", price:89000, rating:5.0, travel:true, radius:80, tags:["арт", "драйв"] },
  { id:72, name:"Кирилл Попов", type:"видео", city:"Краснодар", price:94000, rating:4.9, travel:true, radius:150, tags:["репортаж", "дроны"] },
  { id:73, name:"Игорь Степанов", type:"видео", city:"Краснодар", price:48000, rating:4.7, travel:true, radius:200, tags:["дроны", "фильм"] },
  { id:74, name:"Ателье «Гранд»", type:"декор", city:"Краснодар", price:196000, rating:4.5, travel:true, radius:50, tags:["флористика", "минимализм"] },
  { id:75, name:"Клуб «Атмосфера»", type:"площадка", city:"Краснодар", price:112000, rating:4.6, travel:false, radius:0, tags:["терраса", "лофт"] },
  { id:76, name:"Владимир Кузнецов", type:"dj", city:"Краснодар", price:51000, rating:4.6, travel:true, radius:150, tags:["ретро", "танцы"] },
  { id:77, name:"DJ Pulse Михайлов", type:"dj", city:"Краснодар", price:39000, rating:4.8, travel:true, radius:250, tags:["танцы", "ретро"] },
  { id:78, name:"Шоу Свет", type:"шоу", city:"Краснодар", price:54000, rating:4.6, travel:true, radius:250, tags:["фаер", "артисты"] },
  { id:79, name:"Вкус Вдохновение", type:"кейтеринг", city:"Краснодар", price:5200, rating:4.6, travel:true, radius:80, tags:["банкет", "премиум"] },
  { id:80, name:"Максим Андреев", type:"ведущий", city:"Сочи", price:73000, rating:5.0, travel:true, radius:300, tags:["душевная", "энергия"] },
  { id:81, name:"Елена Соловьёв", type:"ведущий", city:"Сочи", price:95000, rating:4.5, travel:true, radius:150, tags:["юмор", "тёплая"] },
  { id:82, name:"Никита Андреев", type:"ведущий", city:"Сочи", price:75000, rating:4.7, travel:true, radius:250, tags:["душевная", "тёплая"] },
  { id:83, name:"Максим Волков", type:"фото", city:"Сочи", price:133000, rating:4.9, travel:true, radius:80, tags:["драйв", "нежность"] },
  { id:84, name:"Олег Соловьёв", type:"фото", city:"Сочи", price:99000, rating:4.7, travel:true, radius:150, tags:["арт", "драйв"] },
  { id:85, name:"Бюро «Событие»", type:"видео", city:"Сочи", price:199000, rating:4.6, travel:true, radius:100, tags:["фильм", "репортаж"] },
  { id:86, name:"Олег Андреев", type:"видео", city:"Сочи", price:168000, rating:4.8, travel:true, radius:150, tags:["клип", "репортаж"] },
  { id:87, name:"Команда «Арктика»", type:"декор", city:"Сочи", price:154000, rating:4.7, travel:false, radius:120, tags:["премиум", "рустик"] },
  { id:88, name:"Студия «Юг»", type:"декор", city:"Сочи", price:342000, rating:4.6, travel:false, radius:150, tags:["минимализм", "премиум"] },
  { id:89, name:"Клуб «Горный»", type:"площадка", city:"Сочи", price:451000, rating:4.7, travel:false, radius:0, tags:["банкет", "вид"] },
  { id:90, name:"Никита Попов", type:"dj", city:"Сочи", price:48000, rating:4.7, travel:true, radius:250, tags:["живой звук", "хиты"] },
  { id:91, name:"DJ Star Михайлов", type:"dj", city:"Сочи", price:54000, rating:4.6, travel:true, radius:200, tags:["хиты", "танцы"] },
  { id:92, name:"Арт Стиль", type:"шоу", city:"Сочи", price:145000, rating:4.8, travel:true, radius:300, tags:["салют", "фаер"] },
  { id:93, name:"Марат Борисов", type:"ведущий", city:"Ростов-на-Дону", price:115000, rating:5.0, travel:true, radius:300, tags:["классика", "тёплая"] },
  { id:94, name:"Максим Петров", type:"ведущий", city:"Ростов-на-Дону", price:77000, rating:4.6, travel:true, radius:150, tags:["тёплая", "юмор"] },
  { id:95, name:"Татьяна Новиков", type:"ведущий", city:"Ростов-на-Дону", price:75000, rating:4.5, travel:true, radius:100, tags:["классика", "тёплая"] },
  { id:96, name:"Руслан Козлов", type:"фото", city:"Ростов-на-Дону", price:41000, rating:4.8, travel:true, radius:200, tags:["драйв", "арт"] },
  { id:97, name:"Студия «Вдохновение»", type:"фото", city:"Ростов-на-Дону", price:101000, rating:4.6, travel:true, radius:80, tags:["драйв", "арт"] },
  { id:98, name:"Студия «Гранд»", type:"видео", city:"Ростов-на-Дону", price:64000, rating:4.9, travel:true, radius:150, tags:["клип", "дроны"] },
  { id:99, name:"Мастерская «Волга»", type:"декор", city:"Ростов-на-Дону", price:117000, rating:4.9, travel:true, radius:150, tags:["рустик", "премиум"] },
  { id:100, name:"Шатер «Речной»", type:"площадка", city:"Ростов-на-Дону", price:258000, rating:4.4, travel:false, radius:0, tags:["вид", "банкет"] },
  { id:101, name:"Банкет-холл «Горный»", type:"площадка", city:"Ростов-на-Дону", price:154000, rating:4.6, travel:false, radius:0, tags:["банкет", "лофт"] },
  { id:102, name:"Дмитрий Морозов", type:"dj", city:"Ростов-на-Дону", price:25000, rating:4.6, travel:true, radius:250, tags:["ретро", "хиты"] },
  { id:103, name:"Алина Лебедев", type:"ведущий", city:"Самара", price:69000, rating:5.0, travel:true, radius:300, tags:["душевная", "интерактив"] },
  { id:104, name:"Полина Козлов", type:"ведущий", city:"Самара", price:109000, rating:4.6, travel:true, radius:150, tags:["тёплая", "интерактив"] },
  { id:105, name:"Сергей Соколов", type:"ведущий", city:"Самара", price:61000, rating:4.9, travel:true, radius:300, tags:["душевная", "классика"] },
  { id:106, name:"Олег Соловьёв", type:"фото", city:"Самара", price:78000, rating:4.8, travel:true, radius:150, tags:["арт", "драйв"] },
  { id:107, name:"Екатерина Алексеев", type:"фото", city:"Самара", price:81000, rating:4.8, travel:true, radius:80, tags:["репортаж", "портрет"] },
  { id:108, name:"Мария Яковлев", type:"фото", city:"Самара", price:126000, rating:4.9, travel:true, radius:80, tags:["портрет", "драйв"] },
  { id:109, name:"Команда «Сибирь»", type:"видео", city:"Самара", price:100000, rating:4.8, travel:true, radius:150, tags:["клип", "репортаж"] },
  { id:110, name:"Дом «Событие»", type:"видео", city:"Самара", price:130000, rating:4.6, travel:true, radius:100, tags:["фильм", "репортаж"] },
  { id:111, name:"Ателье «Праздник»", type:"декор", city:"Самара", price:162000, rating:4.9, travel:true, radius:150, tags:["флористика", "рустик"] },
  { id:112, name:"Бюро «Событие»", type:"декор", city:"Самара", price:89000, rating:5.0, travel:true, radius:50, tags:["классика", "премиум"] },
  { id:113, name:"Ателье «Флора»", type:"декор", city:"Самара", price:73000, rating:4.6, travel:true, radius:150, tags:["классика", "минимализм"] },
  { id:114, name:"Банкет-холл «Империя»", type:"площадка", city:"Самара", price:240000, rating:4.5, travel:false, radius:0, tags:["терраса", "до 80 гостей"] },
  { id:115, name:"Глеб Смирнов", type:"dj", city:"Самара", price:35000, rating:4.6, travel:true, radius:150, tags:["ретро", "танцы"] },
  { id:116, name:"Алексей Егоров", type:"dj", city:"Самара", price:32000, rating:4.8, travel:true, radius:150, tags:["ретро", "живой звук"] },
  { id:117, name:"Вкус Арктика", type:"кейтеринг", city:"Самара", price:4300, rating:4.5, travel:true, radius:80, tags:["фуршет", "премиум"] },
  { id:118, name:"Юлия Борисов", type:"ведущий", city:"Уфа", price:57000, rating:4.9, travel:true, radius:200, tags:["энергия", "тёплая"] },
  { id:119, name:"Юлия Кузнецов", type:"ведущий", city:"Уфа", price:40000, rating:4.6, travel:true, radius:200, tags:["классика", "душевная"] },
  { id:120, name:"Игорь Орлов", type:"фото", city:"Уфа", price:101000, rating:4.7, travel:true, radius:200, tags:["драйв", "нежность"] },
  { id:121, name:"Артём Андреев", type:"фото", city:"Уфа", price:89000, rating:4.6, travel:true, radius:200, tags:["репортаж", "нежность"] },
  { id:122, name:"Роман Фёдоров", type:"фото", city:"Уфа", price:124000, rating:4.9, travel:true, radius:120, tags:["драйв", "репортаж"] },
  { id:123, name:"Дом «Стиль»", type:"видео", city:"Уфа", price:101000, rating:4.5, travel:true, radius:150, tags:["клип", "фильм"] },
  { id:124, name:"Мастерская «Нева»", type:"декор", city:"Уфа", price:99000, rating:4.5, travel:true, radius:120, tags:["рустик", "премиум"] },
  { id:125, name:"Усадьба «Элит»", type:"площадка", city:"Уфа", price:184000, rating:4.9, travel:false, radius:0, tags:["до 150 гостей", "до 80 гостей"] },
  { id:126, name:"Вилла «Горный»", type:"площадка", city:"Уфа", price:283000, rating:4.9, travel:false, radius:0, tags:["до 80 гостей", "до 150 гостей"] },
  { id:127, name:"DJ Sky Захаров", type:"dj", city:"Уфа", price:43000, rating:5.0, travel:true, radius:250, tags:["танцы", "хиты"] },
  { id:128, name:"Фаер Букет", type:"шоу", city:"Уфа", price:56000, rating:4.8, travel:true, radius:200, tags:["фаер", "салют"] },
  { id:129, name:"Кухня Империя", type:"кейтеринг", city:"Уфа", price:3900, rating:4.6, travel:true, radius:30, tags:["премиум", "национальная"] },
  { id:130, name:"Кирилл Морозов", type:"ведущий", city:"Нижний Новгород", price:62000, rating:4.5, travel:true, radius:250, tags:["классика", "интерактив"] },
  { id:131, name:"Ксения Андреев", type:"ведущий", city:"Нижний Новгород", price:58000, rating:4.6, travel:true, radius:200, tags:["энергия", "тёплая"] },
  { id:132, name:"Артём Егоров", type:"ведущий", city:"Нижний Новгород", price:76000, rating:4.8, travel:true, radius:150, tags:["юмор", "энергия"] },
  { id:133, name:"Екатерина Андреев", type:"ведущий", city:"Нижний Новгород", price:78000, rating:4.8, travel:true, radius:250, tags:["душевная", "тёплая"] },
  { id:134, name:"Юлия Фёдоров", type:"фото", city:"Нижний Новгород", price:101000, rating:4.6, travel:true, radius:200, tags:["арт", "нежность"] },
  { id:135, name:"Алексей Волков", type:"фото", city:"Нижний Новгород", price:124000, rating:4.7, travel:true, radius:80, tags:["арт", "репортаж"] },
  { id:136, name:"Руслан Попов", type:"фото", city:"Нижний Новгород", price:69000, rating:4.8, travel:true, radius:150, tags:["портрет", "арт"] },
  { id:137, name:"Команда «Нева»", type:"видео", city:"Нижний Новгород", price:57000, rating:5.0, travel:true, radius:200, tags:["клип", "репортаж"] },
  { id:138, name:"Студия «Сибирь»", type:"видео", city:"Нижний Новгород", price:91000, rating:4.9, travel:true, radius:100, tags:["фильм", "репортаж"] },
  { id:139, name:"Мастерская «Люкс»", type:"декор", city:"Нижний Новгород", price:111000, rating:4.6, travel:true, radius:120, tags:["премиум", "классика"] },
  { id:140, name:"Бюро «Люкс»", type:"декор", city:"Нижний Новгород", price:125000, rating:5.0, travel:true, radius:120, tags:["классика", "рустик"] },
  { id:141, name:"Агентство «Букет»", type:"декор", city:"Нижний Новгород", price:79000, rating:4.6, travel:true, radius:150, tags:["премиум", "рустик"] },
  { id:142, name:"Терраса «Кирпич»", type:"площадка", city:"Нижний Новгород", price:167000, rating:4.7, travel:false, radius:0, tags:["до 80 гостей", "терраса"] },
  { id:143, name:"DJ Star Козлов", type:"dj", city:"Нижний Новгород", price:39000, rating:4.7, travel:true, radius:250, tags:["живой звук", "ретро"] },
  { id:144, name:"Дмитрий Захаров", type:"dj", city:"Нижний Новгород", price:54000, rating:4.9, travel:true, radius:200, tags:["ретро", "танцы"] },
  { id:145, name:"Кухня Арктика", type:"кейтеринг", city:"Нижний Новгород", price:3100, rating:4.4, travel:true, radius:80, tags:["фуршет", "премиум"] },
  { id:146, name:"Ольга Зайцев", type:"ведущий", city:"Челябинск", price:109000, rating:4.7, travel:true, radius:150, tags:["энергия", "юмор"] },
  { id:147, name:"Ксения Макаров", type:"ведущий", city:"Челябинск", price:92000, rating:5.0, travel:true, radius:200, tags:["юмор", "тёплая"] },
  { id:148, name:"Игорь Егоров", type:"ведущий", city:"Челябинск", price:96000, rating:5.0, travel:true, radius:200, tags:["юмор", "тёплая"] },
  { id:149, name:"Бюро «Эстетика»", type:"фото", city:"Челябинск", price:55000, rating:5.0, travel:true, radius:200, tags:["репортаж", "портрет"] },
  { id:150, name:"Мария Соколов", type:"фото", city:"Челябинск", price:82000, rating:4.6, travel:true, radius:120, tags:["арт", "портрет"] },
  { id:151, name:"Проект «Сибирь»", type:"фото", city:"Челябинск", price:67000, rating:4.9, travel:true, radius:120, tags:["нежность", "портрет"] },
  { id:152, name:"Сергей Новиков", type:"видео", city:"Челябинск", price:114000, rating:4.6, travel:true, radius:100, tags:["клип", "фильм"] },
  { id:153, name:"Команда «Свет»", type:"декор", city:"Челябинск", price:151000, rating:4.9, travel:false, radius:120, tags:["флористика", "арки"] },
  { id:154, name:"Лофт «Атмосфера»", type:"площадка", city:"Челябинск", price:289000, rating:4.7, travel:false, radius:0, tags:["банкет", "вид"] },
  { id:155, name:"Клуб «Дубовый»", type:"площадка", city:"Челябинск", price:299000, rating:4.6, travel:false, radius:0, tags:["до 150 гостей", "банкет"] },
  { id:156, name:"DJ Pulse Борисов", type:"dj", city:"Челябинск", price:58000, rating:4.6, travel:true, radius:250, tags:["танцы", "ретро"] },
  { id:157, name:"DJ Lux Алексеев", type:"dj", city:"Челябинск", price:31000, rating:4.7, travel:true, radius:200, tags:["танцы", "ретро"] },
  { id:158, name:"Марат Макаров", type:"ведущий", city:"Воронеж", price:114000, rating:4.8, travel:true, radius:200, tags:["энергия", "классика"] },
  { id:159, name:"Ирина Попов", type:"ведущий", city:"Воронеж", price:98000, rating:4.8, travel:true, radius:250, tags:["юмор", "душевная"] },
  { id:160, name:"Татьяна Алексеев", type:"фото", city:"Воронеж", price:83000, rating:4.9, travel:true, radius:200, tags:["драйв", "репортаж"] },
  { id:161, name:"Дом «Дон»", type:"фото", city:"Воронеж", price:72000, rating:4.7, travel:true, radius:120, tags:["драйв", "репортаж"] },
  { id:162, name:"Агентство «Флора»", type:"видео", city:"Воронеж", price:57000, rating:4.9, travel:true, radius:150, tags:["репортаж", "фильм"] },
  { id:163, name:"Дом «Дон»", type:"декор", city:"Воронеж", price:91000, rating:4.7, travel:true, radius:150, tags:["классика", "флористика"] },
  { id:164, name:"Зал «Империя»", type:"площадка", city:"Воронеж", price:190000, rating:4.5, travel:false, radius:0, tags:["до 150 гостей", "лофт"] },
  { id:165, name:"Ресторан «Горный»", type:"площадка", city:"Воронеж", price:223000, rating:4.5, travel:false, radius:0, tags:["банкет", "терраса"] },
  { id:166, name:"Павел Андреев", type:"dj", city:"Воронеж", price:39000, rating:4.9, travel:true, radius:250, tags:["танцы", "живой звук"] },
  { id:167, name:"DJ Night Волков", type:"dj", city:"Воронеж", price:36000, rating:4.6, travel:true, radius:200, tags:["живой звук", "хиты"] },
  { id:168, name:"Вкус Момент", type:"кейтеринг", city:"Воронеж", price:3200, rating:4.8, travel:true, radius:30, tags:["банкет", "национальная"] },
  { id:169, name:"Игорь Фёдоров", type:"ведущий", city:"Пермь", price:93000, rating:4.7, travel:true, radius:150, tags:["тёплая", "душевная"] },
  { id:170, name:"Анна Яковлев", type:"ведущий", city:"Пермь", price:112000, rating:4.8, travel:true, radius:100, tags:["интерактив", "душевная"] },
  { id:171, name:"Алексей Зайцев", type:"ведущий", city:"Пермь", price:50000, rating:4.6, travel:true, radius:250, tags:["энергия", "классика"] },
  { id:172, name:"Виктория Алексеев", type:"ведущий", city:"Пермь", price:74000, rating:4.6, travel:true, radius:300, tags:["юмор", "тёплая"] },
  { id:173, name:"Ателье «Юг»", type:"фото", city:"Пермь", price:125000, rating:4.7, travel:true, radius:120, tags:["драйв", "репортаж"] },
  { id:174, name:"Бюро «Эстетика»", type:"фото", city:"Пермь", price:57000, rating:4.9, travel:true, radius:150, tags:["нежность", "репортаж"] },
  { id:175, name:"Мастерская «Люкс»", type:"фото", city:"Пермь", price:56000, rating:4.7, travel:true, radius:120, tags:["арт", "нежность"] },
  { id:176, name:"Студия «Флора»", type:"видео", city:"Пермь", price:47000, rating:4.7, travel:true, radius:100, tags:["фильм", "дроны"] },
  { id:177, name:"Мастерская «Нева»", type:"декор", city:"Пермь", price:166000, rating:4.6, travel:true, radius:120, tags:["арки", "премиум"] },
  { id:178, name:"Ателье «Империя»", type:"декор", city:"Пермь", price:82000, rating:4.7, travel:false, radius:150, tags:["премиум", "минимализм"] },
  { id:179, name:"Терраса «Элит»", type:"площадка", city:"Пермь", price:179000, rating:4.8, travel:false, radius:0, tags:["лофт", "терраса"] },
  { id:180, name:"Алексей Николаев", type:"dj", city:"Пермь", price:57000, rating:4.5, travel:true, radius:200, tags:["живой звук", "ретро"] },
  { id:181, name:"Шоу Гармония", type:"шоу", city:"Пермь", price:48000, rating:4.6, travel:true, radius:200, tags:["салют", "артисты"] },
  { id:182, name:"Сергей Морозов", type:"ведущий", city:"Красноярск", price:120000, rating:4.7, travel:true, radius:300, tags:["классика", "энергия"] },
  { id:183, name:"Анна Захаров", type:"ведущий", city:"Красноярск", price:80000, rating:4.6, travel:true, radius:100, tags:["энергия", "душевная"] },
  { id:184, name:"Глеб Кузнецов", type:"ведущий", city:"Красноярск", price:115000, rating:4.5, travel:true, radius:300, tags:["юмор", "тёплая"] },
  { id:185, name:"Алина Егоров", type:"ведущий", city:"Красноярск", price:44000, rating:4.5, travel:true, radius:200, tags:["юмор", "душевная"] },
  { id:186, name:"Екатерина Егоров", type:"фото", city:"Красноярск", price:113000, rating:4.8, travel:true, radius:150, tags:["арт", "драйв"] },
  { id:187, name:"Ольга Егоров", type:"фото", city:"Красноярск", price:53000, rating:4.9, travel:true, radius:150, tags:["репортаж", "портрет"] },
  { id:188, name:"Ателье «Букет»", type:"фото", city:"Красноярск", price:107000, rating:4.8, travel:true, radius:120, tags:["нежность", "арт"] },
  { id:189, name:"Дом «Дон»", type:"видео", city:"Красноярск", price:121000, rating:4.5, travel:true, radius:200, tags:["фильм", "клип"] },
  { id:190, name:"Мастерская «Праздник»", type:"видео", city:"Красноярск", price:77000, rating:4.9, travel:true, radius:200, tags:["репортаж", "дроны"] },
  { id:191, name:"Команда «Империя»", type:"декор", city:"Красноярск", price:139000, rating:5.0, travel:true, radius:150, tags:["арки", "премиум"] },
  { id:192, name:"Шатер «Сосновый»", type:"площадка", city:"Красноярск", price:196000, rating:4.8, travel:false, radius:0, tags:["терраса", "лофт"] },
  { id:193, name:"DJ Lux Николаев", type:"dj", city:"Красноярск", price:48000, rating:4.4, travel:true, radius:200, tags:["хиты", "танцы"] },
  { id:194, name:"Catering Гармония", type:"кейтеринг", city:"Красноярск", price:3200, rating:4.5, travel:true, radius:50, tags:["банкет", "национальная"] },
  { id:195, name:"Ирина Соколов", type:"ведущий", city:"Волгоград", price:83000, rating:4.9, travel:true, radius:300, tags:["интерактив", "классика"] },
  { id:196, name:"Наталья Новиков", type:"ведущий", city:"Волгоград", price:60000, rating:4.6, travel:true, radius:300, tags:["интерактив", "энергия"] },
  { id:197, name:"Дмитрий Алексеев", type:"ведущий", city:"Волгоград", price:86000, rating:4.8, travel:true, radius:150, tags:["энергия", "классика"] },
  { id:198, name:"Денис Яковлев", type:"ведущий", city:"Волгоград", price:97000, rating:4.6, travel:true, radius:150, tags:["тёплая", "энергия"] },
  { id:199, name:"Ателье «Букет»", type:"фото", city:"Волгоград", price:76000, rating:4.9, travel:true, radius:200, tags:["портрет", "арт"] },
  { id:200, name:"Виктория Кузнецов", type:"фото", city:"Волгоград", price:46000, rating:4.8, travel:true, radius:150, tags:["арт", "репортаж"] },
  { id:201, name:"Андрей Кузнецов", type:"видео", city:"Волгоград", price:102000, rating:5.0, travel:true, radius:100, tags:["дроны", "клип"] },
  { id:202, name:"Ателье «Империя»", type:"декор", city:"Волгоград", price:66000, rating:4.7, travel:true, radius:120, tags:["арки", "минимализм"] },
  { id:203, name:"Вилла «Гранд»", type:"площадка", city:"Волгоград", price:107000, rating:4.6, travel:false, radius:0, tags:["банкет", "терраса"] },
  { id:204, name:"Роман Степанов", type:"dj", city:"Волгоград", price:33000, rating:4.9, travel:true, radius:200, tags:["ретро", "живой звук"] },
  { id:205, name:"Игорь Новиков", type:"ведущий", city:"Тюмень", price:110000, rating:5.0, travel:true, radius:300, tags:["классика", "энергия"] },
  { id:206, name:"Никита Яковлев", type:"ведущий", city:"Тюмень", price:76000, rating:4.6, travel:true, radius:100, tags:["юмор", "интерактив"] },
  { id:207, name:"Дарья Захаров", type:"ведущий", city:"Тюмень", price:119000, rating:4.7, travel:true, radius:100, tags:["энергия", "классика"] },
  { id:208, name:"Артём Соловьёв", type:"фото", city:"Тюмень", price:58000, rating:4.6, travel:true, radius:80, tags:["арт", "нежность"] },
  { id:209, name:"Мастерская «Люкс»", type:"фото", city:"Тюмень", price:125000, rating:4.8, travel:true, radius:150, tags:["репортаж", "арт"] },
  { id:210, name:"Студия «Нева»", type:"видео", city:"Тюмень", price:94000, rating:5.0, travel:true, radius:150, tags:["клип", "репортаж"] },
  { id:211, name:"Дом «Гармония»", type:"видео", city:"Тюмень", price:138000, rating:4.8, travel:true, radius:100, tags:["фильм", "клип"] },
  { id:212, name:"Дом «Урал»", type:"декор", city:"Тюмень", price:146000, rating:4.9, travel:false, radius:150, tags:["классика", "минимализм"] },
  { id:213, name:"Ресторан «Панорама»", type:"площадка", city:"Тюмень", price:283000, rating:4.9, travel:false, radius:0, tags:["до 80 гостей", "банкет"] },
  { id:214, name:"Максим Соколов", type:"dj", city:"Тюмень", price:45000, rating:5.0, travel:true, radius:250, tags:["ретро", "живой звук"] },
  { id:215, name:"Иван Яковлев", type:"dj", city:"Тюмень", price:37000, rating:4.6, travel:true, radius:150, tags:["живой звук", "хиты"] },
  { id:216, name:"Вкус Букет", type:"кейтеринг", city:"Тюмень", price:4000, rating:4.6, travel:true, radius:30, tags:["премиум", "национальная"] },
  { id:217, name:"Ольга Николаев", type:"ведущий", city:"Омск", price:74000, rating:4.9, travel:true, radius:250, tags:["юмор", "энергия"] },
  { id:218, name:"Кирилл Орлов", type:"ведущий", city:"Омск", price:77000, rating:4.7, travel:true, radius:100, tags:["тёплая", "душевная"] },
  { id:219, name:"Глеб Егоров", type:"ведущий", city:"Омск", price:117000, rating:4.9, travel:true, radius:150, tags:["душевная", "энергия"] },
  { id:220, name:"Никита Макаров", type:"фото", city:"Омск", price:95000, rating:4.6, travel:true, radius:80, tags:["репортаж", "драйв"] },
  { id:221, name:"Команда «Свет»", type:"фото", city:"Омск", price:58000, rating:4.9, travel:true, radius:200, tags:["репортаж", "портрет"] },
  { id:222, name:"Дом «Империя»", type:"фото", city:"Омск", price:89000, rating:5.0, travel:true, radius:80, tags:["арт", "портрет"] },
  { id:223, name:"Дом «Букет»", type:"видео", city:"Омск", price:54000, rating:4.8, travel:true, radius:200, tags:["фильм", "репортаж"] },
  { id:224, name:"Бюро «Гармония»", type:"видео", city:"Омск", price:59000, rating:4.5, travel:true, radius:100, tags:["дроны", "фильм"] },
  { id:225, name:"Агентство «Вдохновение»", type:"декор", city:"Омск", price:126000, rating:4.9, travel:false, radius:120, tags:["классика", "минимализм"] },
  { id:226, name:"Проект «Стиль»", type:"декор", city:"Омск", price:94000, rating:4.9, travel:true, radius:150, tags:["флористика", "рустик"] },
  { id:227, name:"Усадьба «Сосновый»", type:"площадка", city:"Омск", price:238000, rating:4.6, travel:false, radius:0, tags:["терраса", "лофт"] },
  { id:228, name:"Ресторан «Престиж»", type:"площадка", city:"Омск", price:192000, rating:4.7, travel:false, radius:0, tags:["банкет", "лофт"] },
  { id:229, name:"Тимур Волков", type:"dj", city:"Омск", price:48000, rating:4.7, travel:true, radius:200, tags:["ретро", "живой звук"] },
  { id:230, name:"Банкет Праздник", type:"кейтеринг", city:"Омск", price:4000, rating:4.9, travel:true, radius:80, tags:["премиум", "национальная"] },
  { id:231, name:"Дарья Андреев", type:"ведущий", city:"Саратов", price:49000, rating:4.6, travel:true, radius:200, tags:["душевная", "юмор"] },
  { id:232, name:"Виктория Егоров", type:"ведущий", city:"Саратов", price:106000, rating:4.7, travel:true, radius:300, tags:["душевная", "классика"] },
  { id:233, name:"Кирилл Яковлев", type:"ведущий", city:"Саратов", price:56000, rating:4.7, travel:true, radius:100, tags:["юмор", "классика"] },
  { id:234, name:"Команда «Событие»", type:"фото", city:"Саратов", price:130000, rating:4.6, travel:true, radius:150, tags:["репортаж", "нежность"] },
  { id:235, name:"Бюро «Гранд»", type:"фото", city:"Саратов", price:120000, rating:4.7, travel:true, radius:80, tags:["арт", "портрет"] },
  { id:236, name:"Глеб Борисов", type:"видео", city:"Саратов", price:122000, rating:4.7, travel:true, radius:200, tags:["клип", "дроны"] },
  { id:237, name:"Студия «Нева»", type:"декор", city:"Саратов", price:127000, rating:4.8, travel:true, radius:150, tags:["премиум", "флористика"] },
  { id:238, name:"Дворец «Империя»", type:"площадка", city:"Саратов", price:264000, rating:5.0, travel:false, radius:0, tags:["до 80 гостей", "лофт"] },
  { id:239, name:"Терраса «Империя»", type:"площадка", city:"Саратов", price:216000, rating:4.4, travel:false, radius:0, tags:["банкет", "лофт"] },
  { id:240, name:"Олег Петров", type:"dj", city:"Саратов", price:46000, rating:4.8, travel:true, radius:200, tags:["живой звук", "ретро"] },
  { id:241, name:"DJ Star Фёдоров", type:"dj", city:"Саратов", price:33000, rating:4.9, travel:true, radius:250, tags:["танцы", "хиты"] },
  { id:242, name:"Тимур Новиков", type:"ведущий", city:"Рязань", price:41000, rating:4.4, travel:true, radius:150, tags:["энергия", "местный"] },
  { id:243, name:"Тимур Морозов", type:"ведущий", city:"Рязань", price:55000, rating:5.0, travel:true, radius:200, tags:["классика", "тёплая"] },
  { id:244, name:"Ксения Николаев", type:"фото", city:"Рязань", price:59000, rating:4.7, travel:true, radius:150, tags:["местный", "репортаж"] },
  { id:245, name:"Мастерская «Юг»", type:"декор", city:"Рязань", price:98000, rating:5.0, travel:true, radius:100, tags:["энергия", "классика"] },
  { id:246, name:"Денис Орлов", type:"ведущий", city:"Тула", price:35000, rating:4.9, travel:true, radius:150, tags:["тёплая", "классика"] },
  { id:247, name:"Ольга Яковлев", type:"ведущий", city:"Тула", price:60000, rating:4.6, travel:true, radius:150, tags:["репортаж", "тёплая"] },
  { id:248, name:"Денис Лебедев", type:"фото", city:"Тула", price:54000, rating:4.7, travel:true, radius:200, tags:["классика", "репортаж"] },
  { id:249, name:"Павел Козлов", type:"фото", city:"Тула", price:55000, rating:4.6, travel:true, radius:150, tags:["энергия", "классика"] },
  { id:250, name:"Проект «Волга»", type:"декор", city:"Тула", price:105000, rating:4.6, travel:true, radius:100, tags:["репортаж", "энергия"] },
  { id:251, name:"Ирина Егоров", type:"ведущий", city:"Ставрополь", price:44000, rating:4.8, travel:true, radius:200, tags:["тёплая", "классика"] },
  { id:252, name:"Анна Морозов", type:"ведущий", city:"Ставрополь", price:60000, rating:5.0, travel:true, radius:200, tags:["классика", "энергия"] },
  { id:253, name:"Глеб Степанов", type:"фото", city:"Ставрополь", price:82000, rating:4.4, travel:true, radius:150, tags:["репортаж", "местный"] },
  { id:254, name:"Глеб Борисов", type:"фото", city:"Ставрополь", price:85000, rating:4.8, travel:true, radius:100, tags:["энергия", "местный"] },
  { id:255, name:"Проект «Кадр»", type:"декор", city:"Ставрополь", price:114000, rating:4.7, travel:true, radius:200, tags:["энергия", "местный"] },
  { id:256, name:"Команда «Дон»", type:"декор", city:"Ставрополь", price:71000, rating:4.4, travel:true, radius:200, tags:["репортаж", "тёплая"] },
  { id:257, name:"Дарья Соловьёв", type:"ведущий", city:"Липецк", price:48000, rating:4.6, travel:true, radius:200, tags:["местный", "репортаж"] },
  { id:258, name:"Ирина Петров", type:"фото", city:"Липецк", price:65000, rating:4.6, travel:true, radius:200, tags:["местный", "энергия"] },
  { id:259, name:"Команда «Букет»", type:"декор", city:"Липецк", price:108000, rating:4.6, travel:true, radius:150, tags:["классика", "местный"] },
  { id:260, name:"Проект «Гармония»", type:"декор", city:"Липецк", price:75000, rating:4.7, travel:true, radius:100, tags:["классика", "энергия"] },
  { id:261, name:"Клуб «Олива»", type:"площадка", city:"Липецк", price:131000, rating:4.5, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:262, name:"DJ Борисов", type:"dj", city:"Липецк", price:28000, rating:4.5, travel:true, radius:150, tags:["танцы"] },
  { id:263, name:"Елена Михайлов", type:"ведущий", city:"Калининград", price:44000, rating:4.6, travel:true, radius:150, tags:["репортаж", "классика"] },
  { id:264, name:"Виктория Захаров", type:"ведущий", city:"Калининград", price:51000, rating:4.8, travel:true, radius:100, tags:["тёплая", "классика"] },
  { id:265, name:"Павел Козлов", type:"фото", city:"Калининград", price:69000, rating:4.8, travel:true, radius:100, tags:["тёплая", "репортаж"] },
  { id:266, name:"Ирина Смирнов", type:"фото", city:"Калининград", price:70000, rating:4.5, travel:true, radius:100, tags:["местный", "классика"] },
  { id:267, name:"Агентство «Дон»", type:"декор", city:"Калининград", price:57000, rating:4.4, travel:true, radius:200, tags:["тёплая", "местный"] },
  { id:268, name:"Ателье «Арктика»", type:"декор", city:"Калининград", price:65000, rating:4.9, travel:true, radius:150, tags:["классика", "энергия"] },
  { id:269, name:"Усадьба «Горный»", type:"площадка", city:"Калининград", price:143000, rating:4.4, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:270, name:"DJ Соколов", type:"dj", city:"Калининград", price:25000, rating:4.6, travel:true, radius:150, tags:["танцы"] },
  { id:271, name:"Дмитрий Фёдоров", type:"ведущий", city:"Иркутск", price:66000, rating:4.5, travel:true, radius:200, tags:["классика", "репортаж"] },
  { id:272, name:"Глеб Андреев", type:"фото", city:"Иркутск", price:68000, rating:4.5, travel:true, radius:150, tags:["классика", "местный"] },
  { id:273, name:"Команда «Юг»", type:"декор", city:"Иркутск", price:99000, rating:4.6, travel:true, radius:100, tags:["классика", "тёплая"] },
  { id:274, name:"Ателье «Нева»", type:"декор", city:"Иркутск", price:72000, rating:4.8, travel:true, radius:100, tags:["классика", "энергия"] },
  { id:275, name:"Банкет-холл «Атмосфера»", type:"площадка", city:"Иркутск", price:148000, rating:4.8, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:276, name:"DJ Алексеев", type:"dj", city:"Иркутск", price:36000, rating:4.5, travel:true, radius:150, tags:["танцы"] },
  { id:277, name:"Максим Морозов", type:"ведущий", city:"Хабаровск", price:43000, rating:4.7, travel:true, radius:100, tags:["репортаж", "классика"] },
  { id:278, name:"Наталья Смирнов", type:"ведущий", city:"Хабаровск", price:63000, rating:4.9, travel:true, radius:150, tags:["классика", "репортаж"] },
  { id:279, name:"Ольга Соловьёв", type:"фото", city:"Хабаровск", price:45000, rating:4.4, travel:true, radius:100, tags:["местный", "классика"] },
  { id:280, name:"Егор Фёдоров", type:"фото", city:"Хабаровск", price:73000, rating:4.7, travel:true, radius:200, tags:["классика", "репортаж"] },
  { id:281, name:"Дом «Волга»", type:"декор", city:"Хабаровск", price:68000, rating:4.5, travel:true, radius:100, tags:["местный", "тёплая"] },
  { id:282, name:"Ателье «Волга»", type:"декор", city:"Хабаровск", price:87000, rating:4.6, travel:true, radius:200, tags:["местный", "тёплая"] },
  { id:283, name:"Зал «Элит»", type:"площадка", city:"Хабаровск", price:170000, rating:4.3, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:284, name:"Сергей Андреев", type:"ведущий", city:"Владивосток", price:42000, rating:4.4, travel:true, radius:200, tags:["энергия", "тёплая"] },
  { id:285, name:"Татьяна Новиков", type:"ведущий", city:"Владивосток", price:45000, rating:4.6, travel:true, radius:200, tags:["местный", "репортаж"] },
  { id:286, name:"Ксения Лебедев", type:"фото", city:"Владивосток", price:87000, rating:4.7, travel:true, radius:100, tags:["местный", "тёплая"] },
  { id:287, name:"Ателье «Сибирь»", type:"декор", city:"Владивосток", price:47000, rating:4.7, travel:true, radius:200, tags:["классика", "репортаж"] },
  { id:288, name:"Мастерская «Вдохновение»", type:"декор", city:"Владивосток", price:40000, rating:4.8, travel:true, radius:200, tags:["репортаж", "энергия"] },
  { id:289, name:"Усадьба «Сосновый»", type:"площадка", city:"Владивосток", price:77000, rating:4.9, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:290, name:"Дмитрий Попов", type:"ведущий", city:"Ярославль", price:61000, rating:4.5, travel:true, radius:100, tags:["местный", "классика"] },
  { id:291, name:"Наталья Егоров", type:"ведущий", city:"Ярославль", price:59000, rating:4.6, travel:true, radius:200, tags:["энергия", "тёплая"] },
  { id:292, name:"Никита Морозов", type:"фото", city:"Ярославль", price:64000, rating:4.6, travel:true, radius:100, tags:["тёплая", "репортаж"] },
  { id:293, name:"Иван Попов", type:"фото", city:"Ярославль", price:59000, rating:4.8, travel:true, radius:200, tags:["местный", "энергия"] },
  { id:294, name:"Проект «Букет»", type:"декор", city:"Ярославль", price:84000, rating:4.5, travel:true, radius:100, tags:["репортаж", "энергия"] },
  { id:295, name:"Терраса «Речной»", type:"площадка", city:"Ярославль", price:168000, rating:4.9, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:296, name:"DJ Смирнов", type:"dj", city:"Ярославль", price:26000, rating:4.3, travel:true, radius:150, tags:["танцы"] },
  { id:297, name:"Виктория Макаров", type:"ведущий", city:"Тверь", price:78000, rating:4.8, travel:true, radius:100, tags:["тёплая", "репортаж"] },
  { id:298, name:"Виктория Смирнов", type:"фото", city:"Тверь", price:64000, rating:4.5, travel:true, radius:100, tags:["тёплая", "классика"] },
  { id:299, name:"Олег Борисов", type:"фото", city:"Тверь", price:66000, rating:4.6, travel:true, radius:200, tags:["классика", "тёплая"] },
  { id:300, name:"Команда «Дон»", type:"декор", city:"Тверь", price:106000, rating:4.5, travel:true, radius:150, tags:["классика", "репортаж"] },
  { id:301, name:"Команда «Нева»", type:"декор", city:"Тверь", price:94000, rating:4.7, travel:true, radius:100, tags:["классика", "местный"] },
  { id:302, name:"Вилла «Центральный»", type:"площадка", city:"Тверь", price:123000, rating:4.5, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:303, name:"Татьяна Степанов", type:"ведущий", city:"Белгород", price:50000, rating:4.9, travel:true, radius:150, tags:["тёплая", "местный"] },
  { id:304, name:"Дарья Алексеев", type:"фото", city:"Белгород", price:65000, rating:4.7, travel:true, radius:150, tags:["тёплая", "классика"] },
  { id:305, name:"Дом «Нева»", type:"декор", city:"Белгород", price:50000, rating:5.0, travel:true, radius:150, tags:["репортаж", "тёплая"] },
  { id:306, name:"Сергей Петров", type:"ведущий", city:"Курск", price:72000, rating:4.8, travel:true, radius:200, tags:["тёплая", "местный"] },
  { id:307, name:"Мария Попов", type:"фото", city:"Курск", price:88000, rating:4.4, travel:true, radius:100, tags:["репортаж", "местный"] },
  { id:308, name:"Проект «Версаль»", type:"декор", city:"Курск", price:70000, rating:4.7, travel:true, radius:150, tags:["местный", "энергия"] },
  { id:309, name:"Вилла «Империя»", type:"площадка", city:"Курск", price:103000, rating:4.5, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:310, name:"DJ Егоров", type:"dj", city:"Курск", price:23000, rating:4.8, travel:true, radius:150, tags:["танцы"] },
  { id:311, name:"Анна Петров", type:"ведущий", city:"Пенза", price:58000, rating:4.6, travel:true, radius:100, tags:["энергия", "тёплая"] },
  { id:312, name:"Роман Волков", type:"ведущий", city:"Пенза", price:51000, rating:4.7, travel:true, radius:200, tags:["энергия", "местный"] },
  { id:313, name:"Роман Петров", type:"фото", city:"Пенза", price:51000, rating:4.5, travel:true, radius:200, tags:["тёплая", "местный"] },
  { id:314, name:"Мария Кузнецов", type:"фото", city:"Пенза", price:78000, rating:4.9, travel:true, radius:200, tags:["местный", "энергия"] },
  { id:315, name:"Дом «Люкс»", type:"декор", city:"Пенза", price:57000, rating:4.8, travel:true, radius:150, tags:["тёплая", "репортаж"] },
  { id:316, name:"Усадьба «Элит»", type:"площадка", city:"Пенза", price:155000, rating:4.3, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:317, name:"Олег Лебедев", type:"ведущий", city:"Киров", price:80000, rating:4.5, travel:true, radius:100, tags:["энергия", "местный"] },
  { id:318, name:"Алексей Макаров", type:"фото", city:"Киров", price:70000, rating:4.8, travel:true, radius:200, tags:["местный", "энергия"] },
  { id:319, name:"Иван Волков", type:"фото", city:"Киров", price:64000, rating:4.7, travel:true, radius:100, tags:["репортаж", "классика"] },
  { id:320, name:"Студия «Юг»", type:"декор", city:"Киров", price:95000, rating:4.9, travel:true, radius:100, tags:["репортаж", "энергия"] },
  { id:321, name:"Команда «Гармония»", type:"декор", city:"Киров", price:64000, rating:4.8, travel:true, radius:150, tags:["классика", "энергия"] },
  { id:322, name:"Усадьба «Олива»", type:"площадка", city:"Киров", price:121000, rating:4.6, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:323, name:"Глеб Зайцев", type:"ведущий", city:"Ульяновск", price:40000, rating:4.8, travel:true, radius:200, tags:["репортаж", "энергия"] },
  { id:324, name:"Наталья Фёдоров", type:"фото", city:"Ульяновск", price:65000, rating:4.7, travel:true, radius:200, tags:["репортаж", "тёплая"] },
  { id:325, name:"Андрей Степанов", type:"фото", city:"Ульяновск", price:84000, rating:4.7, travel:true, radius:150, tags:["энергия", "репортаж"] },
  { id:326, name:"Проект «Эстетика»", type:"декор", city:"Ульяновск", price:112000, rating:4.7, travel:true, radius:100, tags:["репортаж", "классика"] },
  { id:327, name:"Зал «Горный»", type:"площадка", city:"Ульяновск", price:74000, rating:4.4, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:328, name:"DJ Волков", type:"dj", city:"Ульяновск", price:26000, rating:4.7, travel:true, radius:150, tags:["танцы"] },
  { id:329, name:"Сергей Попов", type:"ведущий", city:"Ижевск", price:45000, rating:4.7, travel:true, radius:200, tags:["местный", "классика"] },
  { id:330, name:"Наталья Яковлев", type:"ведущий", city:"Ижевск", price:43000, rating:4.9, travel:true, radius:200, tags:["репортаж", "классика"] },
  { id:331, name:"Максим Алексеев", type:"фото", city:"Ижевск", price:44000, rating:4.9, travel:true, radius:150, tags:["энергия", "местный"] },
  { id:332, name:"Студия «Нева»", type:"декор", city:"Ижевск", price:74000, rating:4.9, travel:true, radius:150, tags:["местный", "тёплая"] },
  { id:333, name:"Дом «Урал»", type:"декор", city:"Ижевск", price:88000, rating:4.7, travel:true, radius:200, tags:["энергия", "местный"] },
  { id:334, name:"DJ Смирнов", type:"dj", city:"Ижевск", price:42000, rating:4.3, travel:true, radius:150, tags:["танцы"] },
  { id:335, name:"Роман Фёдоров", type:"ведущий", city:"Барнаул", price:80000, rating:4.9, travel:true, radius:100, tags:["местный", "классика"] },
  { id:336, name:"Ольга Козлов", type:"ведущий", city:"Барнаул", price:40000, rating:4.4, travel:true, radius:150, tags:["местный", "классика"] },
  { id:337, name:"Максим Новиков", type:"фото", city:"Барнаул", price:35000, rating:4.5, travel:true, radius:150, tags:["энергия", "местный"] },
  { id:338, name:"Максим Волков", type:"фото", city:"Барнаул", price:35000, rating:4.6, travel:true, radius:100, tags:["энергия", "классика"] },
  { id:339, name:"Студия «Праздник»", type:"декор", city:"Барнаул", price:92000, rating:4.6, travel:true, radius:100, tags:["энергия", "тёплая"] },
  { id:340, name:"Команда «Дон»", type:"декор", city:"Барнаул", price:88000, rating:4.5, travel:true, radius:150, tags:["классика", "энергия"] },
  { id:341, name:"Усадьба «Атмосфера»", type:"площадка", city:"Барнаул", price:125000, rating:4.5, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:342, name:"Ольга Кузнецов", type:"ведущий", city:"Томск", price:50000, rating:4.8, travel:true, radius:150, tags:["энергия", "тёплая"] },
  { id:343, name:"Максим Новиков", type:"фото", city:"Томск", price:49000, rating:4.4, travel:true, radius:150, tags:["классика", "местный"] },
  { id:344, name:"Мария Егоров", type:"фото", city:"Томск", price:51000, rating:4.7, travel:true, radius:200, tags:["энергия", "тёплая"] },
  { id:345, name:"Дом «Волга»", type:"декор", city:"Томск", price:65000, rating:4.7, travel:true, radius:100, tags:["местный", "классика"] },
  { id:346, name:"Бюро «Нева»", type:"декор", city:"Томск", price:102000, rating:5.0, travel:true, radius:100, tags:["классика", "местный"] },
  { id:347, name:"DJ Михайлов", type:"dj", city:"Томск", price:23000, rating:4.9, travel:true, radius:150, tags:["танцы"] },
  { id:348, name:"Татьяна Морозов", type:"ведущий", city:"Оренбург", price:78000, rating:4.9, travel:true, radius:100, tags:["местный", "тёплая"] },
  { id:349, name:"Денис Соловьёв", type:"фото", city:"Оренбург", price:34000, rating:4.9, travel:true, radius:150, tags:["местный", "тёплая"] },
  { id:350, name:"Глеб Смирнов", type:"фото", city:"Оренбург", price:46000, rating:4.8, travel:true, radius:200, tags:["местный", "энергия"] },
  { id:351, name:"Ателье «Волга»", type:"декор", city:"Оренбург", price:101000, rating:4.7, travel:true, radius:200, tags:["энергия", "местный"] },
  { id:352, name:"Вилла «Центральный»", type:"площадка", city:"Оренбург", price:173000, rating:4.6, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:353, name:"DJ Лебедев", type:"dj", city:"Оренбург", price:23000, rating:4.8, travel:true, radius:150, tags:["танцы"] },
  { id:354, name:"Егор Захаров", type:"ведущий", city:"Астрахань", price:74000, rating:4.4, travel:true, radius:200, tags:["местный", "классика"] },
  { id:355, name:"Полина Козлов", type:"ведущий", city:"Астрахань", price:35000, rating:4.5, travel:true, radius:100, tags:["энергия", "тёплая"] },
  { id:356, name:"Ольга Фёдоров", type:"фото", city:"Астрахань", price:59000, rating:4.9, travel:true, radius:200, tags:["энергия", "тёплая"] },
  { id:357, name:"Екатерина Волков", type:"фото", city:"Астрахань", price:60000, rating:4.5, travel:true, radius:150, tags:["репортаж", "энергия"] },
  { id:358, name:"Дом «Праздник»", type:"декор", city:"Астрахань", price:83000, rating:4.7, travel:true, radius:100, tags:["энергия", "местный"] },
  { id:359, name:"Анна Лебедев", type:"ведущий", city:"Пятигорск", price:54000, rating:4.4, travel:true, radius:200, tags:["репортаж", "энергия"] },
  { id:360, name:"Мария Захаров", type:"ведущий", city:"Пятигорск", price:41000, rating:4.8, travel:true, radius:100, tags:["тёплая", "энергия"] },
  { id:361, name:"Мария Орлов", type:"фото", city:"Пятигорск", price:57000, rating:5.0, travel:true, radius:100, tags:["местный", "тёплая"] },
  { id:362, name:"Мастерская «Версаль»", type:"декор", city:"Пятигорск", price:43000, rating:4.8, travel:true, radius:100, tags:["местный", "энергия"] },
  { id:363, name:"DJ Петров", type:"dj", city:"Пятигорск", price:28000, rating:4.8, travel:true, radius:150, tags:["танцы"] },
  { id:364, name:"Максим Орлов", type:"ведущий", city:"Кисловодск", price:46000, rating:4.6, travel:true, radius:100, tags:["местный", "репортаж"] },
  { id:365, name:"Ксения Николаев", type:"фото", city:"Кисловодск", price:70000, rating:4.6, travel:true, radius:150, tags:["энергия", "местный"] },
  { id:366, name:"Никита Михайлов", type:"фото", city:"Кисловодск", price:52000, rating:4.9, travel:true, radius:200, tags:["тёплая", "классика"] },
  { id:367, name:"Команда «Событие»", type:"декор", city:"Кисловодск", price:55000, rating:4.5, travel:true, radius:100, tags:["тёплая", "классика"] },
  { id:368, name:"Дворец «Лаванда»", type:"площадка", city:"Кисловодск", price:123000, rating:4.7, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:369, name:"DJ Алексеев", type:"dj", city:"Кисловодск", price:25000, rating:4.6, travel:true, radius:150, tags:["танцы"] },
  { id:370, name:"Егор Степанов", type:"ведущий", city:"Ессентуки", price:53000, rating:4.5, travel:true, radius:150, tags:["местный", "репортаж"] },
  { id:371, name:"Артём Степанов", type:"фото", city:"Ессентуки", price:38000, rating:4.5, travel:true, radius:150, tags:["энергия", "местный"] },
  { id:372, name:"Дарья Зайцев", type:"фото", city:"Ессентуки", price:61000, rating:4.6, travel:true, radius:150, tags:["местный", "тёплая"] },
  { id:373, name:"Студия «Гармония»", type:"декор", city:"Ессентуки", price:77000, rating:4.4, travel:true, radius:100, tags:["энергия", "классика"] },
  { id:374, name:"Юлия Козлов", type:"ведущий", city:"Новороссийск", price:71000, rating:4.5, travel:true, radius:200, tags:["классика", "репортаж"] },
  { id:375, name:"Виктория Орлов", type:"ведущий", city:"Новороссийск", price:48000, rating:5.0, travel:true, radius:100, tags:["тёплая", "классика"] },
  { id:376, name:"Виктория Кузнецов", type:"фото", city:"Новороссийск", price:52000, rating:4.9, travel:true, radius:100, tags:["местный", "репортаж"] },
  { id:377, name:"Проект «Сибирь»", type:"декор", city:"Новороссийск", price:84000, rating:4.9, travel:true, radius:200, tags:["местный", "тёплая"] },
  { id:378, name:"Банкет-холл «Элит»", type:"площадка", city:"Новороссийск", price:96000, rating:4.8, travel:false, radius:0, tags:["банкет", "до 100 гостей"] },
  { id:379, name:"DJ Орлов", type:"dj", city:"Новороссийск", price:28000, rating:4.7, travel:true, radius:150, tags:["танцы"] },
  { id:380, name:"Анна Соловьёв", type:"ведущий", city:"Таганрог", price:53000, rating:4.6, travel:true, radius:150, tags:["энергия", "репортаж"] },
  { id:381, name:"Дарья Соколов", type:"фото", city:"Таганрог", price:47000, rating:4.9, travel:true, radius:100, tags:["тёплая", "энергия"] },
  { id:382, name:"Дом «Гармония»", type:"декор", city:"Таганрог", price:90000, rating:4.7, travel:true, radius:200, tags:["классика", "местный"] },
  { id:383, name:"Андрей Фёдоров", type:"ведущий", city:"Елец", price:41000, rating:4.7, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:384, name:"Татьяна Михайлов", type:"фото", city:"Елец", price:34000, rating:4.8, travel:false, radius:0, tags:["камерный"] },
  { id:385, name:"Анна Андреев", type:"ведущий", city:"Мичуринск", price:25000, rating:4.8, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:386, name:"Мария Борисов", type:"фото", city:"Мичуринск", price:34000, rating:4.6, travel:false, radius:0, tags:["камерный"] },
  { id:387, name:"Екатерина Лебедев", type:"ведущий", city:"Скопин", price:42000, rating:4.5, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:388, name:"Ирина Петров", type:"фото", city:"Скопин", price:35000, rating:4.4, travel:false, radius:0, tags:["камерный"] },
  { id:389, name:"Денис Васильев", type:"ведущий", city:"Георгиевск", price:42000, rating:4.6, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:390, name:"Полина Васильев", type:"фото", city:"Георгиевск", price:21000, rating:4.3, travel:false, radius:0, tags:["камерный"] },
  { id:391, name:"Алина Волков", type:"ведущий", city:"Минеральные Воды", price:28000, rating:4.9, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:392, name:"Алина Волков", type:"ведущий", city:"Данков", price:38000, rating:4.4, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:393, name:"Екатерина Захаров", type:"фото", city:"Данков", price:29000, rating:4.4, travel:false, radius:0, tags:["камерный"] },
  { id:394, name:"Марат Лебедев", type:"ведущий", city:"Ефремов", price:45000, rating:4.5, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:395, name:"Егор Соколов", type:"ведущий", city:"Касимов", price:37000, rating:4.7, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:396, name:"Юлия Смирнов", type:"фото", city:"Касимов", price:33000, rating:4.6, travel:false, radius:0, tags:["камерный"] },
  { id:397, name:"Максим Волков", type:"ведущий", city:"Буденновск", price:31000, rating:4.6, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:398, name:"Олег Николаев", type:"ведущий", city:"Грязи", price:39000, rating:4.3, travel:true, radius:80, tags:["местный", "душевный"] },
  { id:399, name:"Ирина Козлов", type:"фото", city:"Грязи", price:33000, rating:4.6, travel:false, radius:0, tags:["камерный"] },
];
let catalogTravel = "all";


function formatPrice(v) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(v)) + " ₽";
}
function findCity(name) {
  return CITIES.find(c => c.name.toLowerCase() === name.toLowerCase());
}
function searchCities(q) {
  if (!q) return CITIES.slice(0, 12);
  q = q.toLowerCase();
  return CITIES.filter(c => c.name.toLowerCase().includes(q) || c.region.toLowerCase().includes(q)).slice(0, 10);
}
function getSeasonInfo(dateStr, cityName) {
  if (!dateStr) return { label: "Выберите дату", coefficient: 1, color: "yellow" };
  const month = new Date(dateStr).getMonth() + 1;
  const isSki = cityName.includes("Сочи");
  if (month >= 6 && month <= 8) {
    if (isSki) return { label: "Низкий сезон", coefficient: 0.85, color: "green" };
    return { label: "Высокий сезон", coefficient: 1.3, color: "red" };
  }
  if (month === 12 || month <= 2) {
    if (isSki) return { label: "Высокий сезон", coefficient: 1.45, color: "red" };
    return { label: "Низкий сезон", coefficient: 0.8, color: "green" };
  }
  return { label: "Средний сезон", coefficient: 1.0, color: "yellow" };
}

function generateEstimate(input, style) {
  const city = findCity(input.city);
  let w = { venue: 0.25, catering: 0.3, host: 0.08, photoVideo: 0.12, decor: 0.1, transport: 0.05, polygraphy: 0.05, attire: 0.05 };
  if (style === "more_decor") { w.decor = 0.18; w.catering = 0.25; w.venue = 0.22; }
  if (style === "more_show") { w.host = 0.14; w.decor = 0.08; w.catering = 0.27; }
  const budget = input.budget, guests = input.guests;
  const isSmall = city && city.size === "small";
  return [
    { category: "Площадка", description: isSmall ? "Местный ресторан / усадьба" : "Аренда + базовый декор", total: Math.round(budget * w.venue) },
    { category: "Кейтеринг", description: Math.round((budget * w.catering) / guests) + " ₽/чел", total: Math.round(budget * w.catering) },
    { category: "Ведущий + DJ", description: isSmall ? "С выездом + трансфер" : "6–8 часов", total: Math.round(budget * w.host), note: isSmall ? "+ трансфер ~" + Math.round((city.distanceToBig || 70) * 80) + " ₽" : null },
    { category: "Фото + видео", description: "10 часов", total: Math.round(budget * w.photoVideo) },
    { category: "Декор + флористика", description: style === "more_decor" ? "Расширенный декор" : "Базовый декор", total: Math.round(budget * w.decor) },
    { category: "Транспорт", description: "Трансфер / кортеж", total: Math.round(budget * w.transport) },
    { category: "Полиграфия", description: "Приглашения + рассадка", total: Math.round(budget * w.polygraphy) },
    { category: "Образ", description: "Платье, костюм, кольца", total: Math.round(budget * w.attire) },
  ];
}

function generateScenarios(input) {
  const city = findCity(input.city);
  const isSmall = city && city.size === "small";
  const season = getSeasonInfo(input.date, input.city);
  const coef = (city ? city.coefficient : 1) * season.coefficient;
  const base = input.budget;
  function make(blocks) {
    return blocks.map(b => ({
      time: b.time, title: b.title, description: b.description, contractor: b.contractor,
      price: Math.round(b.useShare ? base * b.price : b.price * coef),
      logistics: b.logistics || 0
    }));
  }
  const romantic = make([
    { time: "10:00–12:00", title: "Сборы невесты", description: "Макияж, причёска, утро невесты", contractor: isSmall ? "Местный салон" : "Студия красоты", price: 18000 },
    { time: "12:30–13:30", title: "Церемония", description: "Выездная регистрация", contractor: isSmall ? "Регистратор из " + (city.nearestBigCity||"") : "Организатор", price: 28000, logistics: isSmall ? 6000 : 0 },
    { time: "14:00–16:00", title: "Прогулка", description: "Романтическая фотосессия", contractor: isSmall ? "Фотограф из " + (city.nearestBigCity||"") : "Фотограф", price: 45000, logistics: isSmall ? Math.round((city.distanceToBig||70)*70) : 0 },
    { time: "16:30–22:00", title: "Банкет", description: "Камерный ужин с ведущим", contractor: isSmall ? "Местный ресторан" : "Ресторан / лофт", price: 0.45, useShare: true },
    { time: "22:00–23:00", title: "Финал", description: "Фаер-шоу или салют", contractor: isSmall ? "Подрядчик из " + (city.nearestBigCity||"") : "Шоу-агентство", price: 25000, logistics: isSmall ? 9000 : 0 },
  ]);
  const classic = make([
    { time: "09:30–12:00", title: "Сборы", description: "Полный образ жениха и невесты", contractor: "Салон + стилист", price: 32000 },
    { time: "12:30–13:30", title: "Церемония", description: "ЗАГС + выездная часть", contractor: "Организатор", price: 20000 },
    { time: "14:00–16:00", title: "Прогулка", description: "Фото и видео", contractor: "Фото + видеограф", price: 90000 },
    { time: "17:00–23:00", title: "Банкет", description: "Полноценный банкет, ведущий, DJ", contractor: "Ресторан + ведущий", price: 0.5, useShare: true },
  ]);
  const show = make([
    { time: "10:00–12:30", title: "Сборы", description: "Расширенный сборы и контент", contractor: "Команда стилистов", price: 45000 },
    { time: "13:00–14:00", title: "Церемония", description: "Яркая выездная церемония", contractor: "Организатор + декор", price: 55000 },
    { time: "14:30–16:30", title: "Прогулка", description: "Динамичная съёмка", contractor: "Фото + видео команда", price: 110000 },
    { time: "17:00–00:00", title: "Банкет + шоу", description: "Банкет, артисты, фаер-шоу", contractor: "Агентство полного цикла", price: 0.55, useShare: true },
  ]);
  function total(blocks) { return blocks.reduce((s,b) => s + b.price + (b.logistics||0), 0); }
  return [
    { id: "romantic", title: "Камерная", description: "Тёплая атмосфера и максимум эмоций. Идеально для 20–40 гостей.", totalPrice: total(romantic), blocks: romantic, tags: ["камерная", "романтичная"] },
    { id: "classic", title: "Классическая", description: "Традиционный день: церемония, прогулка, полноценный банкет.", totalPrice: total(classic), blocks: classic, tags: ["классика", "банкет"] },
    { id: "show", title: "С шоу", description: "Яркий день с артистами, фаером и насыщенной программой.", totalPrice: total(show), blocks: show, tags: ["шоу", "яркая"] },
  ];
}

let selectedCity = null, currentInput = null, currentScenarios = [], selectedScenarioId = null, currentStyle = "balanced";

const cityInput = document.getElementById("city-input");
const suggestionsEl = document.getElementById("suggestions");
const smallCityNote = document.getElementById("small-city-note");
const dateInput = document.getElementById("date-input");
const seasonBadge = document.getElementById("season-badge");
const guestsInput = document.getElementById("guests-input");
const guestsValue = document.getElementById("guests-value");
const budgetRange = document.getElementById("budget-range");
const budgetInput = document.getElementById("budget-input");
const budgetValue = document.getElementById("budget-value");
const formSection = document.getElementById("form-section");
const resultsSection = document.getElementById("results-section");
const avgBudgets = document.getElementById("avg-budgets");

dateInput.min = new Date().toISOString().split("T")[0];

cityInput.addEventListener("input", () => {
  selectedCity = null;
  const list = searchCities(cityInput.value);
  if (cityInput.value.length >= 1 && list.length) {
    suggestionsEl.innerHTML = list.map(c => `<li data-name="${c.name}"><span>${c.name}<span class="region">${c.region}</span></span><span class="size">${c.size === "small" ? "малый" : c.size === "mega" ? "мега" : ""}</span></li>`).join("");
    suggestionsEl.style.display = "block";
  } else {
    suggestionsEl.style.display = "none";
  }
  updateSmallNote();
  updateSeason();
});

suggestionsEl.addEventListener("click", e => {
  const li = e.target.closest("li");
  if (!li) return;
  selectedCity = findCity(li.dataset.name);
  cityInput.value = li.dataset.name;
  suggestionsEl.style.display = "none";
  updateSmallNote();
  updateSeason();
});

document.addEventListener("click", e => {
  if (!cityInput.contains(e.target) && !suggestionsEl.contains(e.target)) {
    suggestionsEl.style.display = "none";
  }
});

function updateSmallNote() {
  if (selectedCity && selectedCity.size === "small") {
    smallCityNote.textContent = "Малый город — предложим варианты с выездом из " + selectedCity.nearestBigCity + " (" + selectedCity.distanceToBig + " км)";
    smallCityNote.style.display = "block";
  } else {
    smallCityNote.style.display = "none";
  }
}

function updateSeason() {
  if (selectedCity && dateInput.value) {
    const s = getSeasonInfo(dateInput.value, selectedCity.name);
    seasonBadge.textContent = s.label;
    seasonBadge.className = "season-badge season-" + s.color;
    seasonBadge.style.display = "inline-block";
  } else {
    seasonBadge.style.display = "none";
  }
}

dateInput.addEventListener("change", updateSeason);
guestsInput.addEventListener("input", () => { guestsValue.textContent = guestsInput.value; });
budgetRange.addEventListener("input", () => {
  budgetInput.value = budgetRange.value;
  budgetValue.textContent = formatPrice(+budgetRange.value);
});
budgetInput.addEventListener("input", () => {
  budgetRange.value = budgetInput.value;
  budgetValue.textContent = formatPrice(+budgetInput.value);
});

document.getElementById("calc-form").addEventListener("submit", e => {
  e.preventDefault();
  if (!selectedCity || !dateInput.value) {
    alert("Выберите город и дату");
    return;
  }
  currentInput = {
    city: selectedCity.name,
    date: dateInput.value,
    guests: +guestsInput.value,
    budget: +budgetInput.value
  };
  currentScenarios = generateScenarios(currentInput);
  selectedScenarioId = currentScenarios[0].id;
  currentStyle = "balanced";

  formSection.style.display = "none";
  avgBudgets.style.display = "none";
  resultsSection.style.display = "block";

  document.getElementById("summary-text").textContent =
    currentInput.city + "  ·  " + new Date(currentInput.date).toLocaleDateString("ru-RU") + "  ·  " +
    currentInput.guests + " гостей  ·  " + formatPrice(currentInput.budget);

  document.querySelectorAll(".style-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.style === "balanced");
  });

  renderScenarios();
  renderTimeline();
  renderEstimate();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("reset-btn").addEventListener("click", () => {
  resultsSection.style.display = "none";
  formSection.style.display = "block";
  avgBudgets.style.display = "block";
});

document.querySelectorAll(".style-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentStyle = btn.dataset.style;
    document.querySelectorAll(".style-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.style === currentStyle);
    });
    renderEstimate();
  });
});

function renderScenarios() {
  const sg = document.getElementById("scenarios-grid"); sg.className = "scenarios-grid stagger"; sg.innerHTML = currentScenarios.map(s => `
    <div class="scenario-card anim-fade-up ${selectedScenarioId === s.id ? "selected" : ""}" onclick="selectScenario('${s.id}')">
      <div class="scenario-top">
        <div class="scenario-title">${s.title}</div>
        <div class="scenario-price">${formatPrice(s.totalPrice)}</div>
      </div>
      <p class="scenario-desc">${s.description}</p>
      <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="scenario-blocks">
        ${s.blocks.slice(0,3).map(b => `
          <div class="scenario-block-row">
            <span><span class="time">${b.time}</span> · ${b.title}</span>
            <span>${formatPrice(b.price)}</span>
          </div>
        `).join("")}
        ${s.blocks.length > 3 ? `<div style="color:var(--ink-300);font-size:12px;margin-top:4px">+ ещё ${s.blocks.length-3}</div>` : ""}
      </div>
      <div class="scenario-btn">${selectedScenarioId === s.id ? "Выбрано" : "Выбрать"}</div>
    </div>
  `).join("");
}

function selectScenario(id) {
  selectedScenarioId = id;
  renderScenarios();
  renderTimeline();
}

function renderTimeline() {
  const s = currentScenarios.find(x => x.id === selectedScenarioId);
  if (!s) return;
  document.getElementById("timeline-title").textContent = s.title;
  document.getElementById("timeline").innerHTML = s.blocks.map(b => `
    <div class="tl-item">
      <div class="tl-time">${b.time}</div>
      <div class="tl-body">
        <div class="tl-dot"></div>
        <div class="tl-title">${b.title}</div>
        <div class="tl-desc">${b.description}</div>
        <div class="tl-contractor">${b.contractor}</div>
        <div class="tl-meta">
          <span class="tl-price">${formatPrice(b.price)}</span>
          ${b.logistics ? `<span class="tl-logistics">+ ${formatPrice(b.logistics)} логистика</span>` : ""}
          <button class="tl-book">Забронировать</button>
        </div>
      </div>
    </div>
  `).join("");
}

function renderEstimate() {
  const lines = generateEstimate(currentInput, currentStyle);
  const total = lines.reduce((s, l) => s + l.total, 0);
  const remaining = currentInput.budget - total;
  const overspend = remaining < 0;
  const pct = Math.min((total / currentInput.budget) * 100, 100);

  document.getElementById("estimate-box").innerHTML = `
    <div class="est-header">Смета</div>
    ${lines.map(l => `
      <div class="est-row">
        <div>
          <div class="est-cat">${l.category}</div>
          <div class="est-desc">${l.description}</div>
          ${l.note ? `<div class="est-note">${l.note}</div>` : ""}
        </div>
        <div class="est-sum">${formatPrice(l.total)}</div>
      </div>
    `).join("")}
    <div class="est-footer">
      <div class="est-total-row">
        <span class="est-total-label">Итого</span>
        <span class="est-total-val">${formatPrice(total)}</span>
      </div>
      <div class="est-line"><span style="color:var(--ink-400)">Ваш бюджет</span><span>${formatPrice(currentInput.budget)}</span></div>
      <div class="est-line est-remain ${overspend ? "bad" : "ok"}">
        <span>${overspend ? "Перерасход" : "Остаток"}</span>
        <span>${formatPrice(Math.abs(remaining))}</span>
      </div>
      <div class="progress"><div class="progress-bar ${overspend ? "bad" : ""}" style="width:${pct}%"></div></div>
      <div class="progress-pct">${Math.round(pct)}% бюджета</div>
    </div>
  `;
}

// ===== CATALOG =====
function renderCatalog() {
  const type = document.getElementById("filter-type").value;
  const cityQ = (document.getElementById("filter-city").value || "").toLowerCase().trim();
  const priceF = document.getElementById("filter-price").value;

  let list = CONTRACTORS.filter(c => {
    if (type && c.type !== type) return false;
    if (cityQ && !c.city.toLowerCase().includes(cityQ)) return false;
    if (catalogTravel === "local" && c.travel) return false;
    if (catalogTravel === "travel" && !c.travel) return false;
    if (priceF) {
      if (priceF === "0-30000" && c.price > 30000) return false;
      if (priceF === "30000-80000" && (c.price < 30000 || c.price > 80000)) return false;
      if (priceF === "80000-150000" && (c.price < 80000 || c.price > 150000)) return false;
      if (priceF === "150000" && c.price < 150000) return false;
    }
    return true;
  });

  document.getElementById("catalog-count").textContent = "Найдено: " + list.length;

  const grid = document.getElementById("contractors-grid");
  if (!list.length) {
    grid.innerHTML = '<div class="catalog-empty">Ничего не найдено. Попробуйте сбросить фильтры.</div>';
    return;
  }

  grid.className = "contractors-grid stagger";
  grid.innerHTML = list.map(c => {
    const initials = getInitials(c.name);
    const bg = avatarColor(c.name);
    return `
    <div class="contractor-card anim-fade-up">
      <div class="c-top">
        <div class="c-avatar" style="background:${bg}">${initials}</div>
        <div class="c-info">
          <div class="c-name-row">
            <div class="c-name">${c.name}</div>
            <div class="c-rating">★ ${c.rating}</div>
          </div>
          <div class="c-type">${c.type}</div>
        </div>
      </div>
      <div class="c-city">${c.city}${c.travel ? " · выезд до " + c.radius + " км" : ""}</div>
      <div class="c-price">${c.type === "кейтеринг" ? "от " + formatPrice(c.price) + "/чел" : formatPrice(c.price)}</div>
      <div class="c-tags">${c.tags.map(t => '<span class="c-tag">'+t+'</span>').join("")}</div>
      ${c.travel ? '<div class="c-travel">Готов приехать</div>' : ''}
      <button class="c-btn" type="button" data-name="${c.name.replace(/"/g, '&quot;')}">Запросить слот</button>
    </div>`;
  }).join("");
  grid.querySelectorAll(".c-btn").forEach(btn => {
    btn.addEventListener("click", () => alert("Заявка на «" + btn.dataset.name + "» отправлена (демо)"));
  });
}

function showView(view) {
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  document.getElementById("form-section").style.display = "none";
  document.getElementById("results-section").style.display = "none";
  document.getElementById("avg-budgets").style.display = "none";
  document.getElementById("catalog-section").style.display = "none";
  const photoSec = document.getElementById("photo-section");
  if (photoSec) photoSec.style.display = "none";
  const mapSec = document.getElementById("map-section");
  if (mapSec) mapSec.style.display = "none";
  const cartSec0 = document.getElementById("cart-section");
  if (cartSec0) cartSec0.style.display = "none";
  ["auth-section","cabinet-section","knowledge-section","admin-section","cases-section","api-section"].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = "none";
  });

  if (view === "calc") {
    if (currentInput) {
      document.getElementById("results-section").style.display = "block";
    } else {
      document.getElementById("form-section").style.display = "block";
      document.getElementById("avg-budgets").style.display = "block";
    }
  } else if (view === "catalog") {
    document.getElementById("catalog-section").style.display = "block";
    renderCatalog();
  } else if (view === "photo") {
    if (photoSec) photoSec.style.display = "block";
  } else if (view === "map") {
    if (mapSec) mapSec.style.display = "block";
    renderMap();
  } else if (view === "cart") {
    const cartSec = document.getElementById("cart-section");
    if (cartSec) cartSec.style.display = "block";
    renderCart();
  } else if (view === "auth") {
    const s = document.getElementById("auth-section");
    if (s) s.style.display = "block";
  } else if (view === "cabinet") {
    const s = document.getElementById("cabinet-section");
    if (s) { s.style.display = "block"; renderCabinet(); }
  } else if (view === "knowledge") {
    const s = document.getElementById("knowledge-section");
    if (s) { s.style.display = "block"; renderKnowledge(); }
  } else if (view === "admin") {
    const u = getUser();
    if (!u || u.role !== "developer") { alert("Доступ только для разработчика"); showView("auth"); return; }
    const s = document.getElementById("admin-section");
    if (s) { s.style.display = "block"; renderAdmin("contractors"); }
  } else if (view === "cases") {
    const s = document.getElementById("cases-section");
    if (s) { s.style.display = "block"; renderCases(); }
  } else if (view === "api") {
    const s = document.getElementById("api-section");
    if (s) s.style.display = "block";
  }
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

document.getElementById("filter-type").addEventListener("change", renderCatalog);
document.getElementById("filter-city").addEventListener("input", renderCatalog);
document.getElementById("filter-price").addEventListener("change", renderCatalog);
document.querySelectorAll(".filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    catalogTravel = chip.dataset.travel;
    renderCatalog();
  });
});


function getInitials(name) {
  const parts = name.replace(/[«»"]/g, "").trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return (parts[0] || "?").slice(0, 2).toUpperCase();
}
function avatarColor(name) {
  const colors = ["#6B4423","#8B6914","#A67C52","#5C5248","#3D352D","#7A6F63","#9C6B4A","#4A3728","#2C4A3E","#3D4A5C"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return colors[Math.abs(h) % colors.length];
}
function openModal(id) {
  const el = document.getElementById("modal-" + id);
  if (el) el.classList.add("open");
}
function closeModal(id) {
  const el = document.getElementById("modal-" + id);
  if (el) el.classList.remove("open");
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
  }
});


// ===== PHOTO AI MATCH =====
const STYLE_TAGS = {
  "рустик": ["рустик", "эко", "флористика", "дерево", "природный"],
  "минимализм": ["минимализм", "чистый", "современный", "лаконичный"],
  "классика": ["классика", "премиум", "элегант", "традиции"],
  "бохо": ["бохо", "свободный", "макrame", "этно"],
  "гламур": ["гламур", "роскошь", "блеск", "вечерний"],
  "эко": ["эко", "природный", "рустик", "зелень", "флористика"]
};

let selectedPhotoStyle = null;

function scoreContractor(c, styleKey, cityName) {
  const tags = (c.tags || []).map(t => t.toLowerCase());
  const styleWords = STYLE_TAGS[styleKey] || [styleKey];
  let score = 40;
  styleWords.forEach(w => {
    if (tags.some(t => t.includes(w) || w.includes(t))) score += 12;
  });
  // type relevance for decor/photo/venue higher for visual styles
  if (["декор", "фото", "площадка"].includes(c.type)) score += 8;
  if (c.type === "ведущий" || c.type === "dj") score -= 5;

  const city = findCity(cityName);
  let logistics = 0;
  let distanceNote = "";
  if (cityName && c.city.toLowerCase() === cityName.toLowerCase()) {
    score += 15;
  } else if (c.travel && city) {
    // approximate: prefer travel from same region-ish
    score += 5;
    logistics = Math.round((c.radius > 0 ? Math.min(c.radius, 200) : 100) * 60);
    distanceNote = "Выезд из " + c.city + (logistics ? " · ориентир логистики ~" + formatPrice(logistics) : "");
  } else if (cityName && c.city.toLowerCase() !== cityName.toLowerCase()) {
    score -= 10;
  }
  score = Math.max(35, Math.min(98, score + Math.floor(Math.random() * 8)));
  return { score, logistics, distanceNote };
}

function runPhotoMatch() {
  const cityName = (document.getElementById("photo-city").value || "").trim();
  if (!selectedPhotoStyle) {
    alert("Выберите стиль или загрузите фото (в MVP достаточно выбрать стиль)");
    return;
  }
  const city = cityName ? findCity(cityName) : null;
  const isSmall = city && city.size === "small";

  let candidates = CONTRACTORS.filter(c =>
    ["декор", "фото", "видео", "площадка", "ведущий", "шоу"].includes(c.type)
  );

  const scored = candidates.map(c => {
    const s = scoreContractor(c, selectedPhotoStyle, cityName);
    return { ...c, match: s.score, logistics: s.logistics, distanceNote: s.distanceNote };
  });

  scored.sort((a, b) => b.match - a.match);

  let top = scored.slice(0, 12);
  // For small cities boost nearest / travel
  if (isSmall) {
    top = scored.filter(c => c.city === cityName || c.travel).slice(0, 12);
    if (top.length < 6) top = scored.slice(0, 12);
  }

  document.getElementById("photo-results").style.display = "block";
  document.getElementById("photo-results-title").textContent =
    "Подборка в стиле «" + selectedPhotoStyle + "»";
  document.getElementById("photo-results-sub").textContent = cityName
    ? (isSmall
      ? "Малый город: показаны местные и готовые приехать, с ориентиром по логистике"
      : "По городу «" + cityName + "» и с учётом выезда")
    : "По всей базе (укажите город для более точной логистики)";

  const grid = document.getElementById("match-grid");
  grid.innerHTML = top.map(c => {
    const initials = getInitials(c.name);
    const bg = avatarColor(c.name);
    return `
      <div class="match-card">
        <div class="c-top">
          <div class="c-avatar" style="background:${bg}">${initials}</div>
          <div class="c-info">
            <div class="c-name-row">
              <div class="c-name">${c.name}</div>
              <span class="match-pct">${c.match}% совпадение</span>
            </div>
            <div class="c-type">${c.type}</div>
          </div>
        </div>
        <div class="c-city">${c.city}${c.travel ? " · выезд до " + c.radius + " км" : ""}</div>
        <div class="c-price">${c.type === "кейтеринг" ? "от " + formatPrice(c.price) + "/чел" : formatPrice(c.price)}</div>
        <div class="c-tags">${(c.tags||[]).map(t => '<span class="c-tag">'+t+'</span>').join("")}</div>
        ${c.distanceNote ? '<div class="match-logistics">'+c.distanceNote+'</div>' : ''}
        <button class="c-btn" type="button" style="margin-top:12px" onclick="alert('Заявка на «${c.name.replace(/'/g, "")}» отправлена (демо)')">Запросить слот</button>
      </div>
    `;
  }).join("");

  document.getElementById("photo-results").scrollIntoView({ behavior: "smooth", block: "start" });
}

(function initPhotoUI() {
  const drop = document.getElementById("photo-drop");
  const input = document.getElementById("photo-input");
  if (!drop || !input) return;

  drop.addEventListener("click", () => input.click());
  drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("dragover"); });
  drop.addEventListener("dragleave", () => drop.classList.remove("dragover"));
  drop.addEventListener("drop", e => {
    e.preventDefault();
    drop.classList.remove("dragover");
    if (e.dataTransfer.files.length) {
      drop.querySelector("p").textContent = "Загружено фото: " + Math.min(e.dataTransfer.files.length, 5) + " · выберите стиль ниже для уточнения";
      if (!selectedPhotoStyle) selectedPhotoStyle = "классика";
      document.querySelectorAll(".style-preset").forEach(b => {
        b.classList.toggle("active", b.dataset.style === selectedPhotoStyle);
      });
    }
  });
  input.addEventListener("change", () => {
    if (input.files.length) {
      drop.querySelector("p").textContent = "Загружено фото: " + Math.min(input.files.length, 5) + " · выберите стиль ниже для уточнения";
      if (!selectedPhotoStyle) selectedPhotoStyle = "классика";
      document.querySelectorAll(".style-preset").forEach(b => {
        b.classList.toggle("active", b.dataset.style === selectedPhotoStyle);
      });
    }
  });

  document.querySelectorAll(".style-preset").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".style-preset").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedPhotoStyle = btn.dataset.style;
    });
  });

  const searchBtn = document.getElementById("photo-search-btn");
  if (searchBtn) searchBtn.addEventListener("click", runPhotoMatch);
})();


// ===== MAP =====
const MAP_CITIES = [
  { name: "Москва", x: 48, y: 38 },
  { name: "Санкт-Петербург", x: 42, y: 22 },
  { name: "Казань", x: 58, y: 40 },
  { name: "Екатеринбург", x: 68, y: 42 },
  { name: "Новосибирск", x: 78, y: 48 },
  { name: "Краснодар", x: 46, y: 68 },
  { name: "Сочи", x: 48, y: 78 },
  { name: "Ростов-на-Дону", x: 50, y: 62 },
  { name: "Самара", x: 56, y: 48 },
  { name: "Уфа", x: 62, y: 46 },
  { name: "Нижний Новгород", x: 52, y: 36 },
  { name: "Воронеж", x: 48, y: 52 },
  { name: "Ставрополь", x: 50, y: 72 },
  { name: "Рязань", x: 50, y: 42 },
  { name: "Тула", x: 46, y: 44 },
  { name: "Липецк", x: 49, y: 50 },
  { name: "Калининград", x: 28, y: 28 },
  { name: "Владивосток", x: 92, y: 58 },
  { name: "Тюмень", x: 70, y: 36 },
  { name: "Иркутск", x: 82, y: 55 },
];
let mapTypeFilter = "all";
let mapSelectedCity = null;

function renderMap() {
  const canvas = document.getElementById("map-canvas");
  if (!canvas) return;
  canvas.innerHTML = MAP_CITIES.map((c, i) => `
    <div class="map-pin anim-fade-up ${mapSelectedCity === c.name ? "active" : ""}"
         style="left:${c.x}%;top:${c.y}%;animation-delay:${i * 0.03}s"
         data-city="${c.name}" onclick="selectMapCity('${c.name}')">
      <div class="map-pin-label">${c.name}</div>
      <div class="map-pin-dot"></div>
    </div>
  `).join("");
  if (mapSelectedCity) selectMapCity(mapSelectedCity);
  else {
    document.getElementById("map-sidebar").innerHTML =
      '<div class="map-city-title">Выберите город</div><div class="map-city-meta">Нажмите на точку на карте</div>';
  }
}

function selectMapCity(name) {
  mapSelectedCity = name;
  document.querySelectorAll(".map-pin").forEach(p => {
    p.classList.toggle("active", p.dataset.city === name);
  });
  let list = CONTRACTORS.filter(c => c.city === name);
  if (mapTypeFilter !== "all") list = list.filter(c => c.type === mapTypeFilter);
  const side = document.getElementById("map-sidebar");
  if (!list.length) {
    side.innerHTML = `<div class="map-city-title anim-fade-up">${name}</div>
      <div class="map-city-meta">Подрядчиков по фильтру не найдено</div>`;
    return;
  }
  side.innerHTML = `<div class="map-city-title anim-fade-up">${name}</div>
    <div class="map-city-meta anim-fade-up">${list.length} подрядчиков</div>
    <div class="stagger">` + list.slice(0, 15).map(c => `
      <div class="map-contractor-row anim-fade-up">
        <span><strong>${c.name}</strong> · ${c.type}</span>
        <span>${c.type === "кейтеринг" ? "от " + formatPrice(c.price) + "/чел" : formatPrice(c.price)}</span>
      </div>
    `).join("") + "</div>";
}

document.querySelectorAll("[data-map-type]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-map-type]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mapTypeFilter = btn.dataset.mapType;
    if (mapSelectedCity) selectMapCity(mapSelectedCity);
  });
});

// Hero animation on load
document.querySelectorAll("#form-section .hero, #form-section .form-card").forEach((el, i) => {
  el.classList.add("anim-fade-up");
  el.style.animationDelay = (i * 0.1) + "s";
});


// ===== CART / MY WEDDING =====
function loadCart() {
  try { return JSON.parse(localStorage.getItem("wcalc_cart") || "[]"); }
  catch(e) { return []; }
}
function saveCart(items) {
  localStorage.setItem("wcalc_cart", JSON.stringify(items));
  updateCartBadge();
}
function updateCartBadge() {
  const n = loadCart().length;
  const b = document.getElementById("cart-badge");
  if (b) b.textContent = n;
}
function showToast(msg) {
  const t = document.getElementById("cart-toast");
  if (!t) return;
  t.textContent = msg || "Добавлено в «Моя свадьба»";
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
function addToCart(item) {
  const cart = loadCart();
  if (cart.some(x => x.id === item.id && x.kind === item.kind)) {
    showToast("Уже в списке");
    return;
  }
  cart.push(item);
  saveCart(cart);
  showToast();
}
function removeFromCart(id, kind) {
  saveCart(loadCart().filter(x => !(x.id === id && x.kind === kind)));
  renderCart();
}
function renderCart() {
  const box = document.getElementById("cart-content");
  if (!box) return;
  const cart = loadCart();
  if (!cart.length) {
    box.innerHTML = '<div class="cart-empty anim-fade-up">Пока пусто.<br>Добавляйте подрядчиков из каталога, карты или подбора по фото.</div>';
    return;
  }
  const total = cart.reduce((s, i) => s + (i.price || 0), 0);
  box.innerHTML = `
    <div class="cart-list stagger">
      ${cart.map(i => `
        <div class="cart-item anim-fade-up">
          <div>
            <div class="cart-item-name">${i.name}</div>
            <div class="cart-item-meta">${i.meta || ""}</div>
            <button type="button" class="cart-item-remove" onclick="removeFromCart('${String(i.id).replace(/'/g,"")}','${i.kind}')">Удалить</button>
          </div>
          <div class="cart-item-price">${i.priceLabel || formatPrice(i.price || 0)}</div>
        </div>
      `).join("")}
    </div>
    <div class="cart-summary anim-fade-up">
      <div class="cart-summary-row"><span>Позиций</span><span>${cart.length}</span></div>
      <div class="cart-summary-total"><span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-500)">Ориентир суммы</span><span>${formatPrice(total)}</span></div>
      <button type="button" class="btn-primary" style="margin-top:18px" onclick="alert('В MVP заявки уходят демо-режимом. В продакшене — на почту dreamwedding@internet.ru и подрядчикам.')">Отправить заявки подрядчикам</button>
    </div>
  `;
}
updateCartBadge();

// Wire catalog buttons via event delegation
document.addEventListener("click", function(e) {
  const btn = e.target.closest(".c-btn");
  if (!btn || btn.dataset.wired) return;
  // catalog / match cards
  const card = btn.closest(".contractor-card, .match-card");
  if (card) {
    e.preventDefault();
    const nameEl = card.querySelector(".c-name");
    const typeEl = card.querySelector(".c-type");
    const priceEl = card.querySelector(".c-price");
    const cityEl = card.querySelector(".c-city");
    const name = nameEl ? nameEl.textContent.trim() : "Подрядчик";
    const type = typeEl ? typeEl.textContent.trim() : "";
    const city = cityEl ? cityEl.textContent.trim().split("·")[0].trim() : "";
    let price = 0;
    const c = CONTRACTORS.find(x => x.name === name);
    if (c) price = c.price;
    addToCart({
      id: c ? String(c.id) : name,
      kind: "contractor",
      name: name,
      meta: [type, city].filter(Boolean).join(" · "),
      price: price,
      priceLabel: priceEl ? priceEl.textContent.trim() : formatPrice(price)
    });
  }
});


// ===== AUTH + CABINET + KNOWLEDGE =====
let authMode = "login";
let authRole = "pair";

function getUser() {
  try { return JSON.parse(localStorage.getItem("wcalc_user") || "null"); } catch(e) { return null; }
}
function setUser(u) {
  if (u) localStorage.setItem("wcalc_user", JSON.stringify(u));
  else localStorage.removeItem("wcalc_user");
  refreshHeaderAuth();
}
function getUsersDB() {
  try { return JSON.parse(localStorage.getItem("wcalc_users") || "{}"); } catch(e) { return {}; }
}
function saveUsersDB(db) {
  localStorage.setItem("wcalc_users", JSON.stringify(db));
}

function refreshHeaderAuth() {
  const area = document.getElementById("header-auth-area");
  if (!area) return;
  const u = getUser();
  if (u) {
    area.innerHTML = `<div class="header-user">
      <span>${u.name} · ${u.role === "contractor" ? "подрядчик" : "пара"}</span>
      <button type="button" onclick="showView('cabinet')">Кабинет</button>
      <button type="button" onclick="logout()">Выйти</button>
    </div>`;
  } else {
    area.innerHTML = `<button type="button" class="header-auth" onclick="showView('auth')">Войти</button>`;
  }
}

function logout() {
  setUser(null);
  showView("calc");
  showToast("Вы вышли из аккаунта");
}

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    authMode = tab.dataset.authMode;
    document.getElementById("auth-submit").textContent = authMode === "login" ? "Войти" : "Зарегистрироваться";
    document.getElementById("auth-hint").textContent = authMode === "login"
      ? "Демо-режим: данные только в вашем браузере"
      : "Создадим аккаунт локально в этом браузере";
  });
});
document.querySelectorAll(".auth-role").forEach(role => {
  role.addEventListener("click", () => {
    document.querySelectorAll(".auth-role").forEach(r => r.classList.remove("active"));
    role.classList.add("active");
    authRole = role.dataset.role;
    document.getElementById("auth-city-field").style.display = authRole === "contractor" ? "block" : "none";
  });
});

document.getElementById("auth-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("auth-name").value.trim();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const pass = document.getElementById("auth-pass").value;
  const city = document.getElementById("auth-city").value.trim();
  const db = getUsersDB();

  if (authMode === "register") {
    if (db[email]) { alert("Такой email уже зарегистрирован. Войдите."); return; }
    db[email] = { name, email, pass, role: authRole, city: city || "", created: Date.now() };
    saveUsersDB(db);
    setUser({ name, email, role: authRole, city: city || "" });
    showToast("Аккаунт создан");
    showView("cabinet");
  } else {
    const u = db[email];
    if (!u || u.pass !== pass) { alert("Неверный email или пароль"); return; }
    setUser({ name: u.name, email: u.email, role: u.role, city: u.city || "" });
    showToast("С возвращением, " + u.name);
    showView("cabinet");
  }
});

function renderCabinet() {
  const u = getUser();
  if (!u) { showView("auth"); return; }
  document.getElementById("cab-title").textContent = u.role === "contractor" ? "Кабинет подрядчика" : "Кабинет пары";
  const nav = document.getElementById("cab-nav");
  const panel = document.getElementById("cab-panel");
  if (u.role === "contractor") {
    nav.innerHTML = `
      <button type="button" class="active" data-cab="profile">Анкета</button>
      <button type="button" data-cab="requests">Заявки</button>
      <button type="button" data-cab="stats">Статистика</button>
      <button type="button" data-cab="premium">Премиум</button>
    `;
    panel.innerHTML = `
      <h3 style="margin-bottom:16px;font-size:18px">Анкета</h3>
      <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-500);line-height:1.6;margin-bottom:16px">
        ${u.name}<br>${u.email}<br>Город: ${u.city || "не указан"}
      </p>
      <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;color:var(--ink-400)">
        В продакшене здесь: услуги, цены, портфолио, календарь, «готов приехать», модерация.
      </p>
      <button type="button" class="btn-primary" style="margin-top:20px;width:auto;padding:12px 24px" onclick="alert('Сохранено (демо)')">Сохранить анкету</button>
    `;
  } else {
    nav.innerHTML = `
      <button type="button" class="active" data-cab="wedding">Моя свадьба</button>
      <button type="button" data-cab="estimates">Сметы</button>
      <button type="button" data-cab="requests">Мои заявки</button>
      <button type="button" data-cab="profile">Профиль</button>
    `;
    const cart = loadCart();
    panel.innerHTML = `
      <h3 style="margin-bottom:16px;font-size:18px">Обзор</h3>
      <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-500);margin-bottom:12px">
        Здравствуйте, ${u.name}
      </p>
      <div class="cart-summary-row"><span>Позиций в «Моя свадьба»</span><span>${cart.length}</span></div>
      <button type="button" class="btn-primary" style="margin-top:20px;width:auto;padding:12px 24px" onclick="showView('cart')">Открыть список</button>
    `;
  }
  nav.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.dataset.cab;
      if (key === "wedding") { showView("cart"); return; }
      if (key === "profile" && u.role === "pair") {
        panel.innerHTML = `<h3 style="margin-bottom:12px">Профиль</h3>
          <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-600)">${u.name}<br>${u.email}</p>`;
      } else if (key === "requests") {
        panel.innerHTML = `<h3 style="margin-bottom:12px">Заявки</h3>
          <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-400)">Пока пусто. После отправки из «Моя свадьба» заявки появятся здесь.</p>`;
      } else if (key === "estimates") {
        panel.innerHTML = `<h3 style="margin-bottom:12px">Сметы</h3>
          <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-400)">Сохранённые расчёты из калькулятора появятся здесь в продакшене.</p>`;
      } else if (key === "stats") {
        panel.innerHTML = `<h3 style="margin-bottom:12px">Статистика</h3>
          <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-400)">Просмотры анкеты, заявки, конверсия — после запуска бэкенда.</p>`;
      } else if (key === "premium") {
        panel.innerHTML = `<h3 style="margin-bottom:12px">Премиум</h3>
          <p style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:var(--ink-500);line-height:1.6">
            Выше в каталоге · расширенная карточка · аналитика · приоритет в подборе по фото
          </p>
          <button type="button" class="btn-primary" style="margin-top:16px;width:auto;padding:12px 24px" onclick="document.getElementById('premium-modal').classList.add('open')">Подключить премиум</button>`;
      }
    });
  });
}

const KB_ARTICLES = [
  {
    t: "Сезонность цен по России",
    d: "Летом дороже в большинстве регионов.",
    label: "Цены",
    body: `<p>Стоимость свадьбы сильно зависит от месяца. В большинстве городов России <strong>июнь–август</strong> — высокий сезон: спрос на площадки и специалистов максимальный, цены вырастают на 25–40%.</p>
<h3>Как считать сезон</h3>
<ul>
<li>Лето (июнь–август) — пик почти везде, кроме горнолыжных курортов.</li>
<li>Зима — обычно ниже, но в Сочи и на Красной Поляне наоборот дороже.</li>
<li>Май и сентябрь — «мягкий» сезон: хорошая погода и спокойнее цены.</li>
</ul>
<p>Если дата гибкая, сдвиг даже на 3–4 недели может сэкономить сотни тысяч рублей в миллионниках.</p>`
  },
  {
    t: "Как сэкономить без потери качества",
    d: "Приоритет статей бюджета.",
    label: "Бюджет",
    body: `<p>Экономия на свадьбе не значит «всё самое дешёвое». Важно правильно расставить приоритеты.</p>
<h3>Что лучше не резать</h3>
<ul>
<li>Площадка и кейтеринг — гости это чувствуют сразу.</li>
<li>Фото и видео — останутся на годы.</li>
</ul>
<h3>Где можно гибко</h3>
<ul>
<li>Декор: меньше позиций, но качественные акценты.</li>
<li>Шоу и спецэффекты: один сильный номер вместо пяти средних.</li>
<li>Полиграфия: электронные приглашения + минимальный тираж на месте.</li>
</ul>
<p>В калькуляторе используйте переключатель «больше декора» / «больше шоу», чтобы сразу видеть, куда уходит бюджет.</p>`
  },
  {
    t: "Свадьбы в малых городах",
    d: "Логистика и бронирование.",
    label: "Регионы",
    body: `<p>В городах вроде Ельца, Скопина или Георгиевска локальный рынок уже, зато ниже цены на площадку и банкет.</p>
<h3>На что обратить внимание</h3>
<ul>
<li>Ведущего, фотографа и редкий декор часто везут из областного центра.</li>
<li>Заложите трансфер и иногда ночёвку, если расстояние больше 100–150 км.</li>
<li>Бронируйте ключевых специалистов за 6–8 месяцев — выбор меньше, чем в Москве.</li>
</ul>
<p>В нашем калькуляторе для малых городов логистика подставляется автоматически.</p>`
  },
  {
    t: "Сочи и юг летом",
    d: "Пик сезона на Чёрном море.",
    label: "Регионы",
    body: `<p>Сочи, Краснодар и побережье летом — один из самых дорогих рынков свадеб в стране.</p>
<ul>
<li>Площадки с видом на море бронируют очень рано.</li>
<li>Цены на жильё для гостей тоже растут — учитывайте это в общем бюджете.</li>
<li>Альтернатива: май или конец сентября — теплее, чем в средней полосе, и спокойнее по ценам.</li>
</ul>
<p>Если мечтаете про море, но бюджет ограничен, сравните Сочи с менее «раскрученными» точками края.</p>`
  },
  {
    t: "Что входит в логистику",
    d: "Трансфер и выезд подрядчиков.",
    label: "Организация",
    body: `<p>«Готов приехать» — не значит «бесплатно приедет».</p>
<h3>Обычно в логистику входит</h3>
<ul>
<li>Трансфер туда–обратно (фиксированная ставка + км).</li>
<li>Ночёвка, если путь дальнее ~150 км или работа допоздна.</li>
<li>Иногда питание команды в день события.</li>
</ul>
<p>В каталоге смотрите радиус выезда и уточняйте итоговую сумму в заявке — так не будет сюрпризов в день свадьбы.</p>`
  },
  {
    t: "Камерная свадьба на 20–40 гостей",
    d: "Формат и перераспределение бюджета.",
    label: "Формат",
    body: `<p>Маленький гостевой список — не «урезанная большая свадьба», а другой формат.</p>
<ul>
<li>Меньше стол, больше внимания к деталям и сервису.</li>
<li>Бюджет чаще смещают в декор, фото и атмосферу.</li>
<li>Площадки: лофты, усадьбы, рестораны с отдельным залом.</li>
</ul>
<p>В сценарии «Камерная» в калькуляторе уже заложена такая логика по блокам дня.</p>`
  },
  {
    t: "Когда бронировать фотографа",
    d: "Сроки по городам.",
    label: "Тайминг",
    body: `<p>Хорошие фотографы на популярные даты закрываются рано.</p>
<ul>
<li>Москва, СПб, Сочи — часто за 9–12 месяцев.</li>
<li>Миллионники — за 6–9 месяцев.</li>
<li>Малые города — за 3–6 месяцев, но сильных специалистов меньше.</li>
</ul>
<p>Если дата уже близко, смотрите фильтр «готов приехать» — иногда проще пригласить из соседнего крупного города.</p>`
  },
  {
    t: "Региональные коэффициенты",
    d: "Почему Москва и Елец считаются по-разному.",
    label: "Цены",
    body: `<p>Один и тот же сценарий в разных городах стоит по-разному — это нормально.</p>
<ul>
<li>Москва, СПб, Сочи — высокие коэффициенты.</li>
<li>Крупные города (Казань, Екатеринбург, Новосибирск) — средний+.</li>
<li>Областные центры и малые города — ниже, плюс логистика «извне».</li>
</ul>
<p>Калькулятор умножает базовые статьи на региональный и сезонный коэффициент, чтобы смета была ближе к реальности.</p>`
  },
];

function renderKnowledge() {
  const g = document.getElementById("kb-grid");
  if (!g) return;
  g.innerHTML = KB_ARTICLES.map(a => `
    <div class="kb-card anim-fade-up" onclick="alert('${a.t}\\n\\n${a.d}')">
      <h3>${a.t}</h3>
      <p>${a.d}</p>
    </div>
  `).join("");
}

refreshHeaderAuth();


// ===== DEVELOPER ADMIN =====
const DEV_ACCOUNT = {
  email: "igor@dreamwedding.dev",
  pass: "IgorDev2026!",
  name: "Igor Minasyan",
  role: "developer"
};

// Ensure contractor list is mutable via localStorage overlay
function getContractorsLive() {
  try {
    const raw = localStorage.getItem("wcalc_contractors");
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return CONTRACTORS.slice();
}
function setContractorsLive(list) {
  localStorage.setItem("wcalc_contractors", JSON.stringify(list));
  // sync global for catalog/map/photo
  CONTRACTORS.length = 0;
  list.forEach(c => CONTRACTORS.push(c));
}
function getKnowledgeLive() {
  try {
    const raw = localStorage.getItem("wcalc_kb");
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return KB_ARTICLES.slice();
}
function setKnowledgeLive(list) {
  localStorage.setItem("wcalc_kb", JSON.stringify(list));
}

// Bootstrap live contractors once
(function() {
  try {
    if (localStorage.getItem("wcalc_contractors")) {
      const list = JSON.parse(localStorage.getItem("wcalc_contractors"));
      CONTRACTORS.length = 0;
      list.forEach(c => CONTRACTORS.push(c));
    }
  } catch(e) {}
})();

// Inject dev account into login flow - patch by wrapping
const _origAuthSubmit = document.getElementById("auth-form");
if (_origAuthSubmit) {
  _origAuthSubmit.addEventListener("submit", function(e) {
    // runs after? we need intercept - better replace handler logic via capture
  }, true);
}

// Override auth form with enhanced version
document.getElementById("auth-form").onsubmit = function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  const name = document.getElementById("auth-name").value.trim();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const pass = document.getElementById("auth-pass").value;
  const city = document.getElementById("auth-city").value.trim();
  const db = getUsersDB();

  // Developer login (fixed credentials)
  if (email === DEV_ACCOUNT.email && pass === DEV_ACCOUNT.pass) {
    setUser({ name: DEV_ACCOUNT.name, email: DEV_ACCOUNT.email, role: "developer", city: "" });
    showToast("Режим разработчика");
    showView("admin");
    return;
  }

  if (authMode === "register") {
    if (email === DEV_ACCOUNT.email) { alert("Этот email зарезервирован"); return; }
    if (db[email]) { alert("Такой email уже зарегистрирован. Войдите."); return; }
    db[email] = { name, email, pass, role: authRole, city: city || "", created: Date.now() };
    saveUsersDB(db);
    setUser({ name, email, role: authRole, city: city || "" });
    showToast("Аккаунт создан");
    showView("cabinet");
  } else {
    const u = db[email];
    if (!u || u.pass !== pass) { alert("Неверный email или пароль"); return; }
    setUser({ name: u.name, email: u.email, role: u.role, city: u.city || "" });
    showToast("С возвращением, " + u.name);
    showView("cabinet");
  }
};

function refreshHeaderAuth() {
  const area = document.getElementById("header-auth-area");
  if (!area) return;
  const u = getUser();
  if (u) {
    const badge = u.role === "developer" ? '<span class="dev-badge">DEV</span>' : "";
    const cab = u.role === "developer"
      ? `<button type="button" onclick="showView('admin')">Админка</button>`
      : `<button type="button" onclick="showView('cabinet')">Кабинет</button>`;
    area.innerHTML = `<div class="header-user">
      <span>${u.name}${badge}</span>
      ${cab}
      <button type="button" onclick="logout()">Выйти</button>
    </div>`;
  } else {
    area.innerHTML = `<button type="button" class="header-auth" onclick="showView('auth')">Войти</button>`;
  }
}

let adminTab = "contractors";
function renderAdmin(tab) {
  adminTab = tab || adminTab;
  document.querySelectorAll("#admin-nav button").forEach(b => {
    b.classList.toggle("active", b.dataset.admin === adminTab);
  });
  const panel = document.getElementById("admin-panel");
  if (!panel) return;

  if (adminTab === "contractors") {
    const list = getContractorsLive();
    panel.innerHTML = `
      <div class="admin-actions">
        <button type="button" class="admin-btn primary" onclick="adminAddContractor()">+ Добавить подрядчика</button>
        <button type="button" class="admin-btn" onclick="adminExportContractors()">Экспорт JSON</button>
        <button type="button" class="admin-btn danger" onclick="if(confirm('Сбросить к исходным 399?')){localStorage.removeItem('wcalc_contractors');location.reload()}">Сбросить базу</button>
        <span style="font-size:12px;color:var(--ink-400);align-self:center">Всего: ${list.length}</span>
      </div>
      <div style="overflow-x:auto;max-height:520px">
        <table class="admin-table">
          <thead><tr><th>ID</th><th>Имя</th><th>Тип</th><th>Город</th><th>Цена</th><th>Рейтинг</th><th>Выезд</th><th></th></tr></thead>
          <tbody>
            ${list.slice().reverse().slice(0, 80).map(c => `
              <tr>
                <td>${c.id}</td>
                <td><input value="${String(c.name).replace(/"/g,'&quot;')}" onchange="adminUpdateContractor(${c.id},'name',this.value)" /></td>
                <td>
                  <select onchange="adminUpdateContractor(${c.id},'type',this.value)">
                    ${["ведущий","фото","видео","декор","площадка","кейтеринг","dj","шоу"].map(t =>
                      `<option value="${t}" ${c.type===t?"selected":""}>${t}</option>`).join("")}
                  </select>
                </td>
                <td><input value="${String(c.city).replace(/"/g,'&quot;')}" onchange="adminUpdateContractor(${c.id},'city',this.value)" style="min-width:100px" /></td>
                <td><input type="number" value="${c.price}" onchange="adminUpdateContractor(${c.id},'price',+this.value)" style="width:90px" /></td>
                <td><input type="number" step="0.1" min="1" max="5" value="${c.rating}" onchange="adminUpdateContractor(${c.id},'rating',+this.value)" style="width:60px" /></td>
                <td><input type="checkbox" ${c.travel?"checked":""} onchange="adminUpdateContractor(${c.id},'travel',this.checked)" /></td>
                <td><button type="button" class="admin-btn danger" onclick="adminDeleteContractor(${c.id})">×</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <p style="font-size:11px;color:var(--ink-300);margin-top:8px">Показаны последние 80. Правки сохраняются сразу в браузере.</p>
      </div>
    `;
  } else if (adminTab === "knowledge") {
    const list = getKnowledgeLive();
    panel.innerHTML = `
      <div class="admin-actions">
        <button type="button" class="admin-btn primary" onclick="adminAddArticle()">+ Статья</button>
      </div>
      ${list.map((a, i) => `
        <div style="border:1px solid var(--cream-200);border-radius:12px;padding:14px;margin-bottom:10px">
          <input value="${String(a.t).replace(/"/g,'&quot;')}" onchange="adminUpdateArticle(${i},'t',this.value)" style="width:100%;margin-bottom:8px;padding:8px;border:1px solid var(--cream-300);border-radius:8px;font-weight:600" />
          <textarea onchange="adminUpdateArticle(${i},'d',this.value)" style="width:100%;min-height:60px;padding:8px;border:1px solid var(--cream-300);border-radius:8px;font-family:inherit;font-size:13px">${a.d}</textarea>
          <button type="button" class="admin-btn danger" style="margin-top:8px" onclick="adminDeleteArticle(${i})">Удалить</button>
        </div>
      `).join("")}
    `;
  } else if (adminTab === "users") {
    const db = getUsersDB();
    const users = Object.values(db);
    panel.innerHTML = `
      <p style="font-size:13px;color:var(--ink-400);margin-bottom:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Зарегистрированные в этом браузере: ${users.length}</p>
      <table class="admin-table">
        <thead><tr><th>Имя</th><th>Email</th><th>Роль</th><th>Город</th></tr></thead>
        <tbody>
          ${users.map(u => `<tr><td>${u.name}</td><td>${u.email}</td><td>${u.role}</td><td>${u.city||"—"}</td></tr>`).join("") || "<tr><td colspan=4>Пока нет</td></tr>"}
        </tbody>
      </table>
    `;
  } else if (adminTab === "stats") {
    const cart = loadCart();
    const users = Object.keys(getUsersDB()).length;
    panel.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
        <div style="background:var(--cream-50);padding:18px;border-radius:14px"><div style="font-size:11px;color:var(--ink-400);letter-spacing:0.08em;text-transform:uppercase">Подрядчики</div><div style="font-size:28px;margin-top:6px">${getContractorsLive().length}</div></div>
        <div style="background:var(--cream-50);padding:18px;border-radius:14px"><div style="font-size:11px;color:var(--ink-400);letter-spacing:0.08em;text-transform:uppercase">Пользователи</div><div style="font-size:28px;margin-top:6px">${users}</div></div>
        <div style="background:var(--cream-50);padding:18px;border-radius:14px"><div style="font-size:11px;color:var(--ink-400);letter-spacing:0.08em;text-transform:uppercase">В корзине</div><div style="font-size:28px;margin-top:6px">${cart.length}</div></div>
        <div style="background:var(--cream-50);padding:18px;border-radius:14px"><div style="font-size:11px;color:var(--ink-400);letter-spacing:0.08em;text-transform:uppercase">Статьи</div><div style="font-size:28px;margin-top:6px">${getKnowledgeLive().length}</div></div>
      </div>
      <p style="margin-top:20px;font-size:13px;color:var(--ink-400);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
        Почта проекта: dreamwedding@internet.ru · Разработчик: Igor Minasyan
      </p>
    `;
  }
}

document.querySelectorAll("#admin-nav button").forEach(btn => {
  btn.addEventListener("click", () => renderAdmin(btn.dataset.admin));
});

function adminUpdateContractor(id, field, value) {
  const list = getContractorsLive();
  const c = list.find(x => x.id === id);
  if (!c) return;
  c[field] = value;
  setContractorsLive(list);
}
function adminDeleteContractor(id) {
  if (!confirm("Удалить подрядчика #" + id + "?")) return;
  setContractorsLive(getContractorsLive().filter(c => c.id !== id));
  renderAdmin("contractors");
  showToast("Удалено");
}
function adminAddContractor() {
  const list = getContractorsLive();
  const maxId = list.reduce((m, c) => Math.max(m, c.id || 0), 0);
  list.push({
    id: maxId + 1,
    name: "Новый подрядчик",
    type: "ведущий",
    city: "Москва",
    price: 50000,
    rating: 4.8,
    travel: true,
    radius: 150,
    tags: ["новый"]
  });
  setContractorsLive(list);
  renderAdmin("contractors");
  showToast("Подрядчик добавлен");
}
function adminExportContractors() {
  const data = JSON.stringify(getContractorsLive(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "contractors.json";
  a.click();
}
function adminUpdateArticle(i, field, value) {
  const list = getKnowledgeLive();
  if (!list[i]) return;
  list[i][field] = value;
  setKnowledgeLive(list);
}
function adminDeleteArticle(i) {
  const list = getKnowledgeLive();
  list.splice(i, 1);
  setKnowledgeLive(list);
  renderAdmin("knowledge");
}
function adminAddArticle() {
  const list = getKnowledgeLive();
  list.push({ t: "Новая статья", d: "Текст статьи..." });
  setKnowledgeLive(list);
  renderAdmin("knowledge");
}

// Knowledge uses live data
function renderKnowledge() {
  const g = document.getElementById("kb-grid");
  if (!g) return;
  const articles = getKnowledgeLive();
  g.innerHTML = articles.map(a => `
    <div class="kb-card anim-fade-up" onclick="alert((a.t + '\\n\\n' + a.d).replace(/\\\\n/g, String.fromCharCode(10)))">
      <h3>${a.t}</h3>
      <p>${a.d}</p>
    </div>
  `).join("");
}
// fix knowledge onclick - simpler
function renderKnowledge() {
  const g = document.getElementById("kb-grid");
  if (!g) return;
  const articles = getKnowledgeLive();
  g.innerHTML = articles.map((a, i) => `
    <div class="kb-card anim-fade-up" data-kb="${i}">
      <h3>${a.t}</h3>
      <p>${a.d}</p>
    </div>
  `).join("");
  g.querySelectorAll("[data-kb]").forEach(el => {
    el.addEventListener("click", () => {
      const a = articles[+el.dataset.kb];
      if (a) alert(a.t + "\\n\\n" + a.d);
    });
  });
}

refreshHeaderAuth();


// ===== CASES + BOOKING =====
const WEDDING_CASES = [
  { city: "Москва", title: "Камерная в лофте", guests: 35, budget: 1200000, season: "лето", style: "минимализм", note: "Акцент на декор и фото, без большого банкета" },
  { city: "Сочи", title: "У моря на закате", guests: 60, budget: 2100000, season: "июнь", style: "гламур", note: "Площадка у воды, выездная церемония" },
  { city: "Казань", title: "Классика в зале", guests: 90, budget: 950000, season: "август", style: "классика", note: "Полный банкет + ведущий и DJ" },
  { city: "Елец", title: "Свадьба в малом городе", guests: 30, budget: 480000, season: "июль", style: "рустик", note: "Ведущий и фото из Липецка, логистика заложена" },
  { city: "Санкт-Петербург", title: "Дворы и крыши", guests: 45, budget: 1350000, season: "сентябрь", style: "бохо", note: "Прогулка по городу, ужин в ресторане" },
  { city: "Ставрополь", title: "Семейный формат", guests: 70, budget: 720000, season: "май", style: "классика", note: "Местные подрядчики + декор из Пятигорска" },
  { city: "Екатеринбург", title: "Уральский вайб", guests: 55, budget: 880000, season: "лето", style: "эко", note: "Природный декор, живая музыка" },
  { city: "Рязань", title: "Уют на 40 гостей", guests: 40, budget: 560000, season: "июнь", style: "рустик", note: "Оптимальный баланс цена/качество" },
  { city: "Новосибирск", title: "Большой банкет", guests: 120, budget: 1100000, season: "август", style: "классика", note: "Шоу-программа и полный продакшен" },
  { city: "Калининград", title: "Европейский минимализм", guests: 40, budget: 980000, season: "июль", style: "минимализм", note: "Светлый декор, акцент на сервис" },
];

let bookingTarget = null;

function renderCases() {
  const g = document.getElementById("cases-grid");
  if (!g) return;
  g.innerHTML = WEDDING_CASES.map((c, i) => `
    <div class="case-card anim-fade-up" data-case="${i}">
      <div class="case-cover">${c.city}</div>
      <div class="case-body">
        <div class="case-meta">${c.season} · ${c.guests} гостей · ${c.style}</div>
        <div class="case-title">${c.title}</div>
        <div class="case-budget">${formatPrice(c.budget)}</div>
        <div class="case-tags"><span class="tag">${c.style}</span><span class="tag">${c.guests} гостей</span></div>
      </div>
    </div>
  `).join("");
  g.querySelectorAll("[data-case]").forEach(el => {
    el.addEventListener("click", () => {
      const c = WEDDING_CASES[+el.dataset.case];
      alert(c.city + " — " + c.title + "\\n\\nБюджет: " + formatPrice(c.budget) + "\\nГости: " + c.guests + "\\nСтиль: " + c.style + "\\n\\n" + c.note);
    });
  });
}

function openBooking(name, type, city, price) {
  bookingTarget = { name, type, city, price };
  const u = getUser();
  document.getElementById("booking-target").textContent = name + (type ? " · " + type : "") + (city ? " · " + city : "");
  document.getElementById("booking-name").value = u ? u.name : "";
  document.getElementById("booking-contact").value = "";
  document.getElementById("booking-note").value = "";
  const d = document.getElementById("booking-date");
  if (d) d.min = new Date().toISOString().split("T")[0];
  document.getElementById("booking-modal").classList.add("open");
}
function closeBooking() {
  document.getElementById("booking-modal").classList.remove("open");
  bookingTarget = null;
}
document.getElementById("booking-send").addEventListener("click", () => {
  const name = document.getElementById("booking-name").value.trim();
  const contact = document.getElementById("booking-contact").value.trim();
  if (!name || !contact) { alert("Укажите имя и контакт"); return; }
  if (!bookingTarget) return;
  // save request
  try {
    const reqs = JSON.parse(localStorage.getItem("wcalc_requests") || "[]");
    reqs.push({
      ...bookingTarget,
      clientName: name,
      contact,
      date: document.getElementById("booking-date").value,
      note: document.getElementById("booking-note").value,
      at: Date.now(),
      user: getUser() ? getUser().email : null
    });
    localStorage.setItem("wcalc_requests", JSON.stringify(reqs));
  } catch(e) {}
  // also add to cart
  addToCart({
    id: "req-" + Date.now(),
    kind: "request",
    name: bookingTarget.name,
    meta: "Заявка · " + (bookingTarget.type || "") + " · " + contact,
    price: bookingTarget.price || 0,
    priceLabel: bookingTarget.price ? formatPrice(bookingTarget.price) : "—"
  });
  closeBooking();
  showToast("Заявка сохранена. Копия: dreamwedding@internet.ru (демо)");
});

// Replace catalog click handler to open booking modal
document.addEventListener("click", function(e) {
  const btn = e.target.closest(".c-btn");
  if (!btn) return;
  const card = btn.closest(".contractor-card, .match-card");
  if (!card) return;
  e.preventDefault();
  e.stopPropagation();
  const nameEl = card.querySelector(".c-name");
  const typeEl = card.querySelector(".c-type");
  const cityEl = card.querySelector(".c-city");
  const name = nameEl ? nameEl.textContent.trim() : "Подрядчик";
  const type = typeEl ? typeEl.textContent.trim() : "";
  const city = cityEl ? cityEl.textContent.trim().split("·")[0].trim() : "";
  const c = CONTRACTORS.find(x => x.name === name);
  openBooking(name, type, city, c ? c.price : 0);
}, true);


function mockPay(plan) {
  const u = getUser();
  if (!u) { showView("auth"); return; }
  try {
    const sub = JSON.parse(localStorage.getItem("wcalc_subs") || "{}");
    sub[u.email] = { plan, at: Date.now() };
    localStorage.setItem("wcalc_subs", JSON.stringify(sub));
  } catch(e) {}
  document.getElementById("premium-modal").classList.remove("open");
  showToast("Подписка " + plan + " активирована (демо)");
}

// Save estimate when calculating
const _origCalcSubmit = document.getElementById("calc-form");
if (_origCalcSubmit) {
  _origCalcSubmit.addEventListener("submit", function() {
    setTimeout(() => {
      if (!currentInput || !currentScenarios.length) return;
      try {
        const hist = JSON.parse(localStorage.getItem("wcalc_estimates") || "[]");
        hist.unshift({
          at: Date.now(),
          input: currentInput,
          scenario: selectedScenarioId,
          total: currentScenarios.find(s => s.id === selectedScenarioId)?.totalPrice
        });
        localStorage.setItem("wcalc_estimates", JSON.stringify(hist.slice(0, 20)));
      } catch(e) {}
    }, 100);
  });
}

// Admin: show requests tab content enhancement via monkeypatch renderAdmin
const _renderAdmin = typeof renderAdmin === "function" ? renderAdmin : null;
window.renderAdmin = function(tab) {
  if (tab === "requests" || (typeof adminTab !== "undefined" && tab === undefined && adminTab === "requests")) {
    // fallthrough
  }
  if (_renderAdmin) _renderAdmin(tab);
  // inject requests into nav if missing
  const nav = document.getElementById("admin-nav");
  if (nav && !nav.querySelector('[data-admin="requests"]')) {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.admin = "requests";
    b.textContent = "Заявки";
    b.addEventListener("click", () => {
      adminTab = "requests";
      document.querySelectorAll("#admin-nav button").forEach(x => x.classList.toggle("active", x.dataset.admin === "requests"));
      let reqs = [];
      try { reqs = JSON.parse(localStorage.getItem("wcalc_requests") || "[]"); } catch(e) {}
      const panel = document.getElementById("admin-panel");
      panel.innerHTML = `
        <p style="font-size:13px;color:var(--ink-400);margin-bottom:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Всего заявок: ${reqs.length}</p>
        <table class="admin-table">
          <thead><tr><th>Когда</th><th>Подрядчик</th><th>Клиент</th><th>Контакт</th><th>Дата</th></tr></thead>
          <tbody>
            ${reqs.slice().reverse().map(r => `
              <tr>
                <td>${new Date(r.at).toLocaleString("ru-RU")}</td>
                <td>${r.name || ""}</td>
                <td>${r.clientName || ""}</td>
                <td>${r.contact || ""}</td>
                <td>${r.date || "—"}</td>
              </tr>
            `).join("") || "<tr><td colspan=5>Пока нет заявок</td></tr>"}
          </tbody>
        </table>
      `;
    });
    nav.appendChild(b);
  }
  if (tab === "requests") {
    adminTab = "requests";
    document.querySelectorAll("#admin-nav button").forEach(x => x.classList.toggle("active", x.dataset.admin === "requests"));
    let reqs = [];
    try { reqs = JSON.parse(localStorage.getItem("wcalc_requests") || "[]"); } catch(e) {}
    document.getElementById("admin-panel").innerHTML = `
      <table class="admin-table">
        <thead><tr><th>Когда</th><th>Подрядчик</th><th>Клиент</th><th>Контакт</th><th>Дата</th></tr></thead>
        <tbody>
          ${reqs.slice().reverse().map(r => `
            <tr>
              <td>${new Date(r.at).toLocaleString("ru-RU")}</td>
              <td>${r.name || ""}</td>
              <td>${r.clientName || ""}</td>
              <td>${r.contact || ""}</td>
              <td>${r.date || "—"}</td>
            </tr>
          `).join("") || "<tr><td colspan=5>Пока нет заявок</td></tr>"}
        </tbody>
      </table>`;
  }
};

// Case → apply to calculator
function applyCaseToCalc(i) {
  const c = WEDDING_CASES[i];
  if (!c) return;
  showView("calc");
  const city = findCity(c.city);
  if (city) {
    selectedCity = city;
    const inp = document.getElementById("city-input");
    if (inp) inp.value = city.name;
  }
  const g = document.getElementById("guests-input");
  if (g) { g.value = c.guests; document.getElementById("guests-value").textContent = c.guests; }
  const b = document.getElementById("budget-range");
  const bi = document.getElementById("budget-input");
  if (b) b.value = c.budget;
  if (bi) bi.value = c.budget;
  document.getElementById("budget-value").textContent = formatPrice(c.budget);
  showToast("Параметры кейса подставлены — выберите дату и рассчитайте");
}

// re-bind cases to apply
const _renderCases = renderCases;
renderCases = function() {
  _renderCases();
  document.querySelectorAll("#cases-grid [data-case]").forEach(el => {
    el.addEventListener("dblclick", () => applyCaseToCalc(+el.dataset.case));
  });
};

// Contractor cabinet: show real requests filtered by name match loosely
const _renderCabinet = renderCabinet;
renderCabinet = function() {
  _renderCabinet();
  const u = getUser();
  if (!u || u.role !== "contractor") return;
  const nav = document.getElementById("cab-nav");
  if (!nav) return;
  nav.querySelectorAll("button").forEach(btn => {
    if (btn.dataset.cab === "requests") {
      btn.onclick = function() {
        nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        let reqs = [];
        try { reqs = JSON.parse(localStorage.getItem("wcalc_requests") || "[]"); } catch(e) {}
        // show all in demo (or filter by city)
        const panel = document.getElementById("cab-panel");
        panel.innerHTML = `
          <h3 style="margin-bottom:12px">Входящие заявки</h3>
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px">
            ${reqs.length ? reqs.slice().reverse().map(r => `
              <div style="padding:12px 0;border-bottom:1px solid var(--cream-100)">
                <strong>${r.name}</strong> · ${r.clientName || ""} · ${r.contact || ""}<br>
                <span style="color:var(--ink-400)">${r.date || "дата не указана"} · ${r.note || ""}</span>
              </div>
            `).join("") : "<p style='color:var(--ink-400)'>Заявок пока нет</p>"}
          </div>`;
      };
    }
  });
};

// Pair cabinet estimates
renderCabinet = (function(orig) {
  return function() {
    orig();
    const u = getUser();
    if (!u || u.role === "contractor" || u.role === "developer") return;
    const nav = document.getElementById("cab-nav");
    if (!nav) return;
    nav.querySelectorAll("button").forEach(btn => {
      if (btn.dataset.cab === "estimates") {
        btn.addEventListener("click", () => {
          let hist = [];
          try { hist = JSON.parse(localStorage.getItem("wcalc_estimates") || "[]"); } catch(e) {}
          document.getElementById("cab-panel").innerHTML = `
            <h3 style="margin-bottom:12px">Сохранённые сметы</h3>
            <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px">
              ${hist.length ? hist.map(h => `
                <div style="padding:10px 0;border-bottom:1px solid var(--cream-100)">
                  ${h.input.city} · ${h.input.guests} гостей · ${formatPrice(h.input.budget)}
                  <span style="color:var(--ink-400)"> · ${new Date(h.at).toLocaleDateString("ru-RU")}</span>
                </div>
              `).join("") : "<p style='color:var(--ink-400)'>Рассчитайте свадьбу в калькуляторе — смета сохранится здесь</p>"}
            </div>`;
        });
      }
    });
  };
})(renderCabinet);


// ===== PREMIUM TOASTS =====
function showToast(msg, opts) {
  opts = opts || {};
  const type = opts.type || "info";
  const title = opts.title || (type === "success" ? "Готово" : type === "error" ? "Ошибка" : "Уведомление");
  const stack = document.getElementById("toast-stack");
  if (!stack) return;
  const icons = { success: "✓", error: "!", info: "●" };
  const el = document.createElement("div");
  el.className = "toast " + type;
  el.innerHTML = `
    <div class="toast-icon">${icons[type] || "●"}</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <button type="button" class="toast-close" aria-label="Закрыть">×</button>
  `;
  el.querySelector(".toast-close").onclick = () => dismissToast(el);
  stack.appendChild(el);
  setTimeout(() => dismissToast(el), opts.duration || 3200);
}
function dismissToast(el) {
  if (!el || el.classList.contains("hide")) return;
  el.classList.add("hide");
  setTimeout(() => el.remove(), 350);
}

function getSub(email) {
  try {
    const sub = JSON.parse(localStorage.getItem("wcalc_subs") || "{}");
    return sub[email] || null;
  } catch(e) { return null; }
}
function setSub(email, plan) {
  const sub = JSON.parse(localStorage.getItem("wcalc_subs") || "{}");
  if (plan) sub[email] = { plan, at: Date.now(), by: "admin" };
  else delete sub[email];
  localStorage.setItem("wcalc_subs", JSON.stringify(sub));
}

// Enhance header to show PRO badge
const _refreshHeaderAuth2 = refreshHeaderAuth;
refreshHeaderAuth = function() {
  _refreshHeaderAuth2();
  const u = getUser();
  if (!u || u.role === "developer") return;
  const sub = getSub(u.email);
  if (sub && sub.plan) {
    const area = document.getElementById("header-auth-area");
    const span = area && area.querySelector(".header-user span");
    if (span && !span.querySelector(".premium-badge-user")) {
      span.insertAdjacentHTML("beforeend", '<span class="premium-badge-user">' + sub.plan + '</span>');
    }
  }
};

// Admin users tab: grant premium
const _renderAdmin2 = renderAdmin;
renderAdmin = function(tab) {
  _renderAdmin2(tab);
  if ((tab || adminTab) !== "users") return;
  const panel = document.getElementById("admin-panel");
  if (!panel) return;
  const db = getUsersDB();
  const users = Object.values(db);
  panel.innerHTML = `
    <p style="font-size:13px;color:var(--ink-400);margin-bottom:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
      Пользователи: ${users.length}. Выдача премиум — только подрядчикам.
    </p>
    <table class="admin-table">
      <thead><tr><th>Имя</th><th>Email</th><th>Роль</th><th>Статус</th><th>Действие</th></tr></thead>
      <tbody>
        ${users.map(u => {
          const s = getSub(u.email);
          return `<tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.role}</td>
            <td>${s ? s.plan : "—"}</td>
            <td>
              ${u.role === "contractor" ? `
                <select onchange="adminGrantPremium('${u.email}', this.value)" style="font-size:12px;padding:4px 6px;border-radius:8px;border:1px solid var(--cream-300)">
                  <option value="">Нет</option>
                  <option value="PRO" ${s && s.plan==="PRO"?"selected":""}>PRO</option>
                  <option value="Business" ${s && s.plan==="Business"?"selected":""}>Business</option>
                </select>
              ` : "—"}
            </td>
          </tr>`;
        }).join("") || "<tr><td colspan=5>Нет пользователей</td></tr>"}
      </tbody>
    </table>
  `;
};

function adminGrantPremium(email, plan) {
  if (!plan) {
    setSub(email, null);
    showToast("Премиум снят с " + email, { type: "info", title: "Статус" });
  } else {
    setSub(email, plan);
    showToast(plan + " выдан: " + email, { type: "success", title: "Премиум" });
  }
  renderAdmin("users");
}

// Upgrade existing showToast calls still work (string only)


function openArticle(i) {
  const list = getKnowledgeLive();
  const a = list[i];
  if (!a) return;
  document.getElementById("article-label").textContent = a.label || "База знаний";
  document.getElementById("article-title").textContent = a.t;
  document.getElementById("article-body").innerHTML = a.body || ("<p>" + (a.d || "") + "</p>");
  document.getElementById("article-modal").classList.add("open");
}
function closeArticle() {
  document.getElementById("article-modal").classList.remove("open");
}

function renderKnowledge() {
  const g = document.getElementById("kb-grid");
  if (!g) return;
  const articles = getKnowledgeLive();
  g.innerHTML = articles.map((a, i) => `
    <div class="kb-card anim-fade-up" data-kb="${i}">
      <h3>${a.t}</h3>
      <p>${a.d || ""}</p>
    </div>
  `).join("");
  g.querySelectorAll("[data-kb]").forEach(el => {
    el.addEventListener("click", () => openArticle(+el.dataset.kb));
  });
}

// Catalog pagination
let catalogPage = 1;
const CATALOG_PAGE_SIZE = 9;
let catalogFiltered = [];

function renderCatalog() {
  const type = document.getElementById("filter-type").value;
  const cityQ = (document.getElementById("filter-city").value || "").toLowerCase().trim();
  const priceF = document.getElementById("filter-price").value;

  catalogFiltered = CONTRACTORS.filter(c => {
    if (type && c.type !== type) return false;
    if (cityQ && !c.city.toLowerCase().includes(cityQ)) return false;
    if (catalogTravel === "local" && c.travel) return false;
    if (catalogTravel === "travel" && !c.travel) return false;
    if (priceF) {
      if (priceF === "0-30000" && c.price > 30000) return false;
      if (priceF === "30000-80000" && (c.price < 30000 || c.price > 80000)) return false;
      if (priceF === "80000-150000" && (c.price < 80000 || c.price > 150000)) return false;
      if (priceF === "150000" && c.price < 150000) return false;
    }
    return true;
  });

  catalogPage = 1;
  paintCatalogPage(false);

  document.getElementById("filter-type").onchange = () => { renderCatalog(); };
}

function paintCatalogPage(append) {
  const grid = document.getElementById("contractors-grid");
  const countEl = document.getElementById("catalog-count");
  if (!grid) return;

  const total = catalogFiltered.length;
  if (countEl) countEl.textContent = "Найдено: " + total;

  if (!total) {
    grid.innerHTML = '<div class="catalog-empty">Ничего не найдено. Попробуйте сбросить фильтры.</div>';
    const old = document.getElementById("load-more-wrap");
    if (old) old.remove();
    return;
  }

  const end = catalogPage * CATALOG_PAGE_SIZE;
  const slice = catalogFiltered.slice(0, end);

  const htmlCards = slice.map(c => {
    const initials = getInitials(c.name);
    const bg = avatarColor(c.name);
    return `
    <div class="contractor-card anim-fade-up">
      <div class="c-top">
        <div class="c-avatar" style="background:${bg}">${initials}</div>
        <div class="c-info">
          <div class="c-name-row">
            <div class="c-name">${c.name}</div>
            <div class="c-rating">★ ${c.rating}</div>
          </div>
          <div class="c-type">${c.type}</div>
        </div>
      </div>
      <div class="c-city">${c.city}${c.travel ? " · выезд до " + c.radius + " км" : ""}</div>
      <div class="c-price">${c.type === "кейтеринг" ? "от " + formatPrice(c.price) + "/чел" : formatPrice(c.price)}</div>
      <div class="c-tags">${(c.tags||[]).map(t => '<span class="c-tag">'+t+'</span>').join("")}</div>
      ${c.travel ? '<div class="c-travel">Готов приехать</div>' : ''}
      <button class="c-btn" type="button">Запросить слот</button>
    </div>`;
  }).join("");

  grid.className = "contractors-grid stagger";
  grid.innerHTML = htmlCards;

  let wrap = document.getElementById("load-more-wrap");
  if (end < total) {
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.id = "load-more-wrap";
      wrap.className = "load-more-wrap";
      grid.parentNode.appendChild(wrap);
    }
    wrap.innerHTML = `<button type="button" class="load-more-btn" id="load-more-btn">Смотреть ещё · осталось ${total - end}</button>`;
    document.getElementById("load-more-btn").onclick = () => {
      catalogPage++;
      paintCatalogPage(true);
    };
  } else if (wrap) {
    wrap.remove();
  }
}

// Re-bind filters to reset pagination
["filter-type","filter-city","filter-price"].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener(id === "filter-city" ? "input" : "change", () => {
    if (document.getElementById("catalog-section") && document.getElementById("catalog-section").style.display !== "none")
      renderCatalog();
  });
});
document.querySelectorAll(".filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    setTimeout(() => {
      if (document.getElementById("catalog-section") && document.getElementById("catalog-section").style.display !== "none")
        renderCatalog();
    }, 10);
  });
});

</script>
</body>
</html>
