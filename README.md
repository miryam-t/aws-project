# AWS Game Project

פרויקט מבוסס Node.js המורץ בתוך Docker. הפרויקט כולל עבודה עם Prisma עבור בסיס הנתונים ותשתית Docker מוגדרת.

## דרישות קדם (Prerequisites)
כדי להריץ את הפרויקט, יש לוודא מותקן על המחשב:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Docker Compose

## הרצה (How to Run)

1. שיבוט הפרויקט:
   ```bash
   git clone https://github.com/miryam-t/aws-project
   cd AWS
   * **ניהול גרסאות:** הגדרת סביבת עבודה ב-Git וחיבורה ל-GitHub כמאגר מרוחק.
* **פתרון בעיות רשת (נטפרי):** מעקף חסימות SSL כדי לאפשר תקשורת מאובטחת בין המחשב המקומי ל-GitHub.
* **טיפול בקונפליקטים:** איתור ופתרון שגיאת "Nested Repository" (גיט בתוך גיט) בתיקיית ה-Prisma.
* **Deployment:** בניית תשתית Docker מלאה והעלאתה ל-Repository מרוחק לצרכי הגשה/גיבוי.


הגדרת קובץ סביבה:
צרי קובץ בשם .env בתיקייה הראשית והוסיפי את המשתנים הנדרשים (בסיס נתונים וכו').

הרצת הפרויקט:

Bash


docker-compose up --build
האפליקציה תהיה זמינה ותעלה את בסיס הנתונים הנדרש באופן אוטומטי.
