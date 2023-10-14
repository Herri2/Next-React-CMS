'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('specialties', [
      {
        slug: "麻醉科",
        en_metaname: "Anaesthesiology",
        tc_metaname: "麻醉科",
        sc_metaname: "麻醉科",
        en_metadesc: "Anaesthesiology",
        tc_metadesc: "麻醉科",
        sc_metadesc: "麻醉科",
        en_name: "Anaesthesiology",
        tc_name: "麻醉科",
        sc_name: "麻醉科",
        alttext: "麻醉科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "危重病學",
        en_metaname: "Intensive Care",
        tc_metaname: "危重病學",
        sc_metaname: "重症监护",
        en_metadesc: "Intensive Care",
        tc_metadesc: "危重病學",
        sc_metadesc: "重症监护",
        en_name: "Intensive Care",
        tc_name: "危重病學",
        sc_name: "重症监护",
        alttext: "危重病學",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "社會醫學",
        en_metaname: "Community Medicine",
        tc_metaname: "社會醫學",
        sc_metaname: "社会医学",
        en_metadesc: "Community Medicine",
        tc_metadesc: "社會醫學",
        sc_metadesc: "社会医学",
        en_name: "Community Medicine",
        tc_name: "社會醫學",
        sc_name: "社会医学",
        alttext: "社會醫學",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "急症科",
        en_metaname: "Emergency Medicine",
        tc_metaname: "急症科",
        sc_metaname: "急诊科",
        en_metadesc: "Emergency Medicine",
        tc_metadesc: "急症科",
        sc_metadesc: "急诊科",
        en_name: "Emergency Medicine",
        tc_name: "急症科",
        sc_name: "急诊科",
        alttext: "急症科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "家庭醫學",
        en_metaname: "Family Medicine",
        tc_metaname: "家庭醫學",
        sc_metaname: "家庭医学",
        en_metadesc: "Family Medicine",
        tc_metadesc: "家庭醫學",
        sc_metadesc: "家庭医学",
        en_name: "Family Medicine",
        tc_name: "家庭醫學",
        sc_name: "家庭医学",
        alttext: "家庭醫學",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "婦產科",
        en_metaname: "Obstetrics & Gynaecology",
        tc_metaname: "婦產科",
        sc_metaname: "妇产科",
        en_metadesc: "Obstetrics & Gynaecology",
        tc_metadesc: "婦產科",
        sc_metadesc: "妇产科",
        en_name: "Obstetrics & Gynaecology",
        tc_name: "婦產科",
        sc_name: "妇产科",
        alttext: "婦產科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "眼科",
        en_metaname: "Ophthalmology",
        tc_metaname: "眼科",
        sc_metaname: "眼科",
        en_metadesc: "Ophthalmology",
        tc_metadesc: "眼科",
        sc_metadesc: "眼科",
        en_name: "Ophthalmology",
        tc_name: "眼科",
        sc_name: "眼科",
        alttext: "眼科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "骨科",
        en_metaname: "Orthopaedics & Traumatology",
        tc_metaname: "骨科",
        sc_metaname: "骨科",
        en_metadesc: "Orthopaedics & Traumatology",
        tc_metadesc: "骨科",
        sc_metadesc: "骨科",
        en_name: "Orthopaedics & Traumatology",
        tc_name: "骨科",
        sc_name: "骨科",
        alttext: "骨科",
        icon: "/images/specialties/ot.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "耳鼻喉科",
        en_metaname: "Otorhinolaryngology",
        tc_metaname: "耳鼻喉科",
        sc_metaname: "耳鼻喉科",
        en_metadesc: "Otorhinolaryngology",
        tc_metadesc: "耳鼻喉科",
        sc_metadesc: "耳鼻喉科",
        en_name: "Otorhinolaryngology",
        tc_name: "耳鼻喉科",
        sc_name: "耳鼻喉科",
        alttext: "耳鼻喉科",
        icon: "/images/specialties/otorhinolaryngology.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "兒科",
        en_metaname: "Paediatrics",
        tc_metaname: "兒科",
        sc_metaname: "儿科",
        en_metadesc: "Paediatrics",
        tc_metadesc: "兒科",
        sc_metadesc: "儿科",
        en_name: "Paediatrics",
        tc_name: "兒科",
        sc_name: "儿科",
        alttext: "兒科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "病理科",
        en_metaname: "Pathology",
        tc_metaname: "病理科",
        sc_metaname: "病理科",
        en_metadesc: "Pathology",
        tc_metadesc: "病理科",
        sc_metadesc: "病理科",
        en_name: "Pathology",
        tc_name: "病理科",
        sc_name: "病理科",
        alttext: "病理科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "內科",
        en_metaname: "Internal Medicine",
        tc_metaname: "內科",
        sc_metaname: "內科",
        en_metadesc: "Internal Medicine",
        tc_metadesc: "內科",
        sc_metadesc: "內科",
        en_name: "Internal Medicine",
        tc_name: "內科",
        sc_name: "內科",
        alttext: "內科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "心臟科",
        en_metaname: "Cardiology",
        tc_metaname: "心臟科",
        sc_metaname: "心脏科",
        en_metadesc: "Cardiology",
        tc_metadesc: "心臟科",
        sc_metadesc: "心脏科",
        en_name: "Cardiology",
        tc_name: "心臟科",
        sc_name: "心脏科",
        alttext: "心臟科",
        icon: "/images/specialties/cardiology.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "深切治療科",
        en_metaname: "Critical Care Medicine",
        tc_metaname: "深切治療科",
        sc_metaname: "危重病医学",
        en_metadesc: "Critical Care Medicine",
        tc_metadesc: "深切治療科",
        sc_metadesc: "危重病医学",
        en_name: "Critical Care Medicine",
        tc_name: "深切治療科",
        sc_name: "危重病医学",
        alttext: "深切治療科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "皮膚及性病科",
        en_metaname: "Dermatology & Venereology",
        tc_metaname: "皮膚及性病科",
        sc_metaname: "皮肤及性病科",
        en_metadesc: "Dermatology & Venereology",
        tc_metadesc: "皮膚及性病科",
        sc_metadesc: "皮肤及性病科",
        en_name: "Dermatology & Venereology",
        tc_name: "皮膚及性病科",
        sc_name: "皮肤及性病科",
        alttext: "皮膚及性病科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "內分泌及糖尿科",
        en_metaname: "Endocrinology, Diabetes & Metabolism",
        tc_metaname: "內分泌及糖尿科",
        sc_metaname: "内分泌及糖尿病科",
        en_metadesc: "Endocrinology, Diabetes & Metabolism",
        tc_metadesc: "內分泌及糖尿科",
        sc_metadesc: "内分泌及糖尿病科",
        en_name: "Endocrinology, Diabetes & Metabolism",
        tc_name: "內分泌及糖尿科",
        sc_name: "内分泌及糖尿病科",
        alttext: "內分泌及糖尿科",
        icon: "/images/specialties/edm.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "腸胃肝臟科",
        en_metaname: "Gastroenterology & Hepatology",
        tc_metaname: "腸胃肝臟科",
        sc_metaname: "消化科",
        en_metadesc: "Gastroenterology & Hepatology",
        tc_metadesc: "腸胃肝臟科",
        sc_metadesc: "消化科",
        en_name: "Gastroenterology & Hepatology",
        tc_name: "腸胃肝臟科",
        sc_name: "消化科",
        alttext: "腸胃肝臟科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "老人科",
        en_metaname: "Geriatric Medicine",
        tc_metaname: "老人科",
        sc_metaname: "老年医学科",
        en_metadesc: "Geriatric Medicine",
        tc_metadesc: "老人科",
        sc_metadesc: "老年医学科",
        en_name: "Geriatric Medicine",
        tc_name: "老人科",
        sc_name: "老年医学科",
        alttext: "老人科",
        icon: "/images/specialties/gm.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "血液及血液腫瘤科",
        en_metaname: "Haematology & Haematological Oncology",
        tc_metaname: "血液及血液腫瘤科",
        sc_metaname: "血液及血液肿瘤科",
        en_metadesc: "Haematology & Haematological Oncology",
        tc_metadesc: "血液及血液腫瘤科",
        sc_metadesc: "血液及血液肿瘤科",
        en_name: "Haematology & Haematological Oncology",
        tc_name: "血液及血液腫瘤科",
        sc_name: "血液及血液肿瘤科",
        alttext: "血液及血液腫瘤科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "腎病科",
        en_metaname: "Nephrology",
        tc_metaname: "腎病科",
        sc_metaname: "肾病科",
        en_metadesc: "Nephrology",
        tc_metadesc: "腎病科",
        sc_metadesc: "肾病科",
        en_name: "Nephrology",
        tc_name: "腎病科",
        sc_name: "肾病科",
        alttext: "腎病科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "腦神經科",
        en_metaname: "Neurology",
        tc_metaname: "腦神經科",
        sc_metaname: "脑神经科",
        en_metadesc: "Neurology",
        tc_metadesc: "腦神經科",
        sc_metadesc: "脑神经科",
        en_name: "Neurology",
        tc_name: "腦神經科",
        sc_name: "脑神经科",
        alttext: "腦神經科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "呼吸系統科",
        en_metaname: "Respiratory Medicine",
        tc_metaname: "呼吸系統科",
        sc_metaname: "呼吸内科",
        en_metadesc: "Respiratory Medicine",
        tc_metadesc: "呼吸系統科",
        sc_metadesc: "呼吸内科",
        en_name: "Respiratory Medicine",
        tc_name: "呼吸系統科",
        sc_name: "呼吸内科",
        alttext: "呼吸系統科",
        icon: "/images/specialties/rm.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "風濕病科",
        en_metaname: "Rheumatology",
        tc_metaname: "風濕病科",
        sc_metaname: "风湿病科",
        en_metadesc: "Rheumatology",
        tc_metadesc: "風濕病科",
        sc_metadesc: "风湿病科",
        en_name: "Rheumatology",
        tc_name: "風濕病科",
        sc_name: "风湿病科",
        alttext: "風濕病科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "精神科",
        en_metaname: "Psychiatry",
        tc_metaname: "精神科",
        sc_metaname: "精神科",
        en_metadesc: "Psychiatry",
        tc_metadesc: "精神科",
        sc_metadesc: "精神科",
        en_name: "Psychiatry",
        tc_name: "精神科",
        sc_name: "精神科",
        alttext: "精神科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "放射科",
        en_metaname: "Radiology",
        tc_metaname: "放射科",
        sc_metaname: "放射科",
        en_metadesc: "Radiology",
        tc_metadesc: "放射科",
        sc_metadesc: "放射科",
        en_name: "Radiology",
        tc_name: "放射科",
        sc_name: "放射科",
        alttext: "放射科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "臨床腫瘤科",
        en_metaname: "Clinical Oncology",
        tc_metaname: "臨床腫瘤科",
        sc_metaname: "临床肿瘤科",
        en_metadesc: "Clinical Oncology",
        tc_metadesc: "臨床腫瘤科",
        sc_metadesc: "临床肿瘤科",
        en_name: "Clinical Oncology",
        tc_name: "臨床腫瘤科",
        sc_name: "临床肿瘤科",
        alttext: "臨床腫瘤科",
        icon: "/images/specialties/co.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "核子醫學科",
        en_metaname: "Nuclear Medicine",
        tc_metaname: "核子醫學科",
        sc_metaname: "核子医学科",
        en_metadesc: "Nuclear Medicine",
        tc_metadesc: "核子醫學科",
        sc_metadesc: "核子医学科",
        en_name: "Nuclear Medicine",
        tc_name: "核子醫學科",
        sc_name: "核子医学科",
        alttext: "核子醫學科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "外科",
        en_metaname: "General Surgery",
        tc_metaname: "外科",
        sc_metaname: "外科",
        en_metadesc: "General Surgery",
        tc_metadesc: "外科",
        sc_metadesc: "外科",
        en_name: "General Surgery",
        tc_name: "外科",
        sc_name: "外科",
        alttext: "外科",
        icon: "/images/specialties/gs.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "泌尿外科",
        en_metaname: "Urology",
        tc_metaname: "泌尿外科",
        sc_metaname: "泌尿外科",
        en_metadesc: "Urology",
        tc_metadesc: "泌尿外科",
        sc_metadesc: "泌尿外科",
        en_name: "Urology",
        tc_name: "泌尿外科",
        sc_name: "泌尿外科",
        alttext: "泌尿外科",
        icon: "/images/specialties/urology.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "神經外科",
        en_metaname: "Neurosurgery",
        tc_metaname: "神經外科",
        sc_metaname: "神经外科",
        en_metadesc: "Neurosurgery",
        tc_metadesc: "神經外科",
        sc_metadesc: "神经外科",
        en_name: "Neurosurgery",
        tc_name: "神經外科",
        sc_name: "神经外科",
        alttext: "神經外科",
        icon: "/images/specialties/neurosurgery.png",
        priority: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "心胸肺外科",
        en_metaname: "Cardio-thoracic Surgery",
        tc_metaname: "心胸肺外科",
        sc_metaname: "心胸肺外科",
        en_metadesc: "Cardio-thoracic Surgery",
        tc_metadesc: "心胸肺外科",
        sc_metadesc: "心胸肺外科",
        en_name: "Cardio-thoracic Surgery",
        tc_name: "心胸肺外科",
        sc_name: "心胸肺外科",
        alttext: "心胸肺外科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "整形外科",
        en_metaname: "Plastic Surgery",
        tc_metaname: "整形外科",
        sc_metaname: "整形外科",
        en_metadesc: "Plastic Surgery",
        tc_metadesc: "整形外科",
        sc_metadesc: "整形外科",
        en_name: "Plastic Surgery",
        tc_name: "整形外科",
        sc_name: "整形外科",
        alttext: "整形外科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "小兒外科",
        en_metaname: "Paediatric Surgery",
        tc_metaname: "小兒外科",
        sc_metaname: "小儿外科",
        en_metadesc: "Paediatric Surgery",
        tc_metadesc: "小兒外科",
        sc_metadesc: "小儿外科",
        en_name: "Paediatric Surgery",
        tc_name: "小兒外科",
        sc_name: "小儿外科",
        alttext: "小兒外科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "免疫及過敏病科",
        en_metaname: "Immunology & Allergy",
        tc_metaname: "免疫及過敏病科",
        sc_metaname: "免疫及过敏病科",
        en_metadesc: "Immunology & Allergy",
        tc_metadesc: "免疫及過敏病科",
        sc_metadesc: "免疫及过敏病科",
        en_name: "Immunology & Allergy",
        tc_name: "免疫及過敏病科",
        sc_name: "免疫及过敏病科",
        alttext: "免疫及過敏病科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "感染及傳染病科",
        en_metaname: "Infectious Disease",
        tc_metaname: "感染及傳染病科",
        sc_metaname: "感染及传染病科",
        en_metadesc: "Infectious Disease",
        tc_metadesc: "感染及傳染病科",
        sc_metadesc: "感染及传染病科",
        en_name: "Infectious Disease",
        tc_name: "感染及傳染病科",
        sc_name: "感染及传染病科",
        alttext: "感染及傳染病科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "內科腫瘤科",
        en_metaname: "Medical Oncology",
        tc_metaname: "內科腫瘤科",
        sc_metaname: "内科肿瘤科",
        en_metadesc: "Medical Oncology",
        tc_metadesc: "內科腫瘤科",
        sc_metadesc: "内科肿瘤科",
        en_name: "Medical Oncology",
        tc_name: "內科腫瘤科",
        sc_name: "内科肿瘤科",
        alttext: "內科腫瘤科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "紓緩醫學科",
        en_metaname: "Palliative Medicine",
        tc_metaname: "紓緩醫學科",
        sc_metaname: "舒缓医学科",
        en_metadesc: "Palliative Medicine",
        tc_metadesc: "紓緩醫學科",
        sc_metadesc: "舒缓医学科",
        en_name: "Palliative Medicine",
        tc_name: "紓緩醫學科",
        sc_name: "舒缓医学科",
        alttext: "紓緩醫學科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "復康科",
        en_metaname: "Rehabilitation",
        tc_metaname: "復康科",
        sc_metaname: "康复科",
        en_metadesc: "Rehabilitation",
        tc_metadesc: "復康科",
        sc_metadesc: "康复科",
        en_name: "Rehabilitation",
        tc_name: "復康科",
        sc_name: "康复科",
        alttext: "復康科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "婦科腫瘤科",
        en_metaname: "Gynaecological Oncology",
        tc_metaname: "婦科腫瘤科",
        sc_metaname: "妇科肿瘤科",
        en_metadesc: "Gynaecological Oncology",
        tc_metadesc: "婦科腫瘤科",
        sc_metadesc: "妇科肿瘤科",
        en_name: "Gynaecological Oncology",
        tc_name: "婦科腫瘤科",
        sc_name: "妇科肿瘤科",
        alttext: "婦科腫瘤科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "泌尿婦科",
        en_metaname: "Urogynaecology",
        tc_metaname: "泌尿婦科",
        sc_metaname: "泌尿妇科",
        en_metadesc: "Urogynaecology",
        tc_metadesc: "泌尿婦科",
        sc_metadesc: "泌尿妇科",
        en_name: "Urogynaecology",
        tc_name: "泌尿婦科",
        sc_name: "泌尿妇科",
        alttext: "泌尿婦科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "生殖醫學科",
        en_metaname: "Reproductive Medicine",
        tc_metaname: "生殖醫學科",
        sc_metaname: "生殖医学科",
        en_metadesc: "Reproductive Medicine",
        tc_metadesc: "生殖醫學科",
        sc_metadesc: "生殖医学科",
        en_name: "Reproductive Medicine",
        tc_name: "生殖醫學科",
        sc_name: "生殖医学科",
        alttext: "生殖醫學科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "母胎醫學科",
        en_metaname: "Maternal & Fetal Medicine",
        tc_metaname: "母胎醫學科",
        sc_metaname: "母胎医学科",
        en_metadesc: "Maternal & Fetal Medicine",
        tc_metadesc: "母胎醫學科",
        sc_metadesc: "母胎医学科",
        en_name: "Maternal & Fetal Medicine",
        tc_name: "母胎醫學科",
        sc_name: "母胎医学科",
        alttext: "母胎醫學科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "疼痛醫學",
        en_metaname: "Pain Medicine",
        tc_metaname: "疼痛醫學",
        sc_metaname: "疼痛医学",
        en_metadesc: "Pain Medicine",
        tc_metadesc: "疼痛醫學",
        sc_metadesc: "疼痛医学",
        en_name: "Pain Medicine",
        tc_name: "疼痛醫學",
        sc_name: "疼痛医学",
        alttext: "疼痛醫學",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "遺傳學及基因組學專科（兒科）",
        en_metaname: "Genetics and Genomics (Paediatrics)",
        tc_metaname: "遺傳學及基因組學專科（兒科）",
        sc_metaname: "遗传学及基因组学专科（儿科）",
        en_metadesc: "Genetics and Genomics (Paediatrics)",
        tc_metadesc: "遺傳學及基因組學專科（兒科）",
        sc_metadesc: "遗传学及基因组学专科（儿科）",
        en_name: "Genetics and Genomics (Paediatrics)",
        tc_name: "遺傳學及基因組學專科（兒科）",
        sc_name: "遗传学及基因组学专科（儿科）",
        alttext: "遺傳學及基因組學專科（兒科）",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: "牙科",
        en_metaname: "Dentistry",
        tc_metaname: "牙科",
        sc_metaname: "牙科",
        en_metadesc: "Dentistry",
        tc_metadesc: "牙科",
        sc_metadesc: "牙科",
        en_name: "Dentistry",
        tc_name: "牙科",
        sc_name: "牙科",
        alttext: "牙科",
        priority: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('specialties', null, {});
  }
};