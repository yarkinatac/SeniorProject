using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using SeniorProject.Services.Blob;

var builder = WebApplication.CreateBuilder(args);

// Eklemeler
builder.Services.AddAuthentication()
    .AddGoogle(options =>
    {
        options.ClientId = "514547504352-34muov5k1lve498art74t6of3ts82rcl.apps.googleusercontent.com";
        options.ClientSecret = "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";
    });


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["JwtConfig:Secret"])),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });
builder.Services.AddScoped<BlobService>();


// Add services to the container.
builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<PetsConnectedDbContext>(options =>
    options.UseSqlServer(connectionString));


// Swagger eklentileri
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Pets Connected", Version = "v1" });

    // JWT kimlik doğrulama eklemek için aşağıdaki kodu kullanın
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme.",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] { }
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Pets Connected v1");

        // Swagger UI'ı kimlik doğrulama için yapılandırmak için
        c.OAuthUseBasicAuthenticationWithAccessCodeGrant();
        c.OAuthClientId("swagger-ui");
        c.OAuthClientSecret("swagger-ui-secret");
    });
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
