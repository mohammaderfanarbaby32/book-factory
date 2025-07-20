from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class cala(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='products/', default='default.jpg')  # افزودن مقدار پیش‌فرض
    shortcut = models.URLField()


class SimpleUser(models.Model):
    first_name= models.CharField(max_length=100)
    last_name = models.CharField(max_length = 100)
    username = models.CharField(max_length=100, unique=True)
    email= models.CharField(max_length = 100)
    password = models.CharField(max_length=128)
    mobile = models.CharField(max_length=15, blank=True, null=True)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class Book(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='book_images/')
    author = models.CharField(max_length=100)
    translator = models.CharField(max_length=100, blank=True, null=True)
    publisher = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    pages = models.IntegerField()
    publish_year = models.PositiveIntegerField()
    cover_type = models.CharField(max_length=50)  # مثلا: جلد سخت یا نرم
    paper_type = models.CharField(max_length=50)  # مثلا: کاغذ گلاسه یا معمولی
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    






    